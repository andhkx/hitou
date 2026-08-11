// Kompres GLB: resize baked texture 2560 -> 1024 (max), rebuild chunk BIN + JSON.
// Usage: node scripts/compress-glb.mjs [input] [output] [maxDim]
import sharp from "sharp";
import fs from "node:fs";

const [input = "public/assets/lanyard/card.glb", output = input, maxDim = 1024] = process.argv.slice(2);

const b = fs.readFileSync(input);
const jlen = b.readUInt32LE(12);
const json = JSON.parse(b.toString("utf8", 20, 20 + jlen));
const binStart = 20 + jlen;
const binLen = b.readUInt32LE(binStart);
const bin = b.subarray(binStart + 8, binStart + 8 + binLen);

const pads = (n) => (4 - (n % 4)) % 4;

for (let i = 0; i < json.images.length; i++) {
  const img = json.images[i];
  const v = json.bufferViews[img.bufferView];
  const old = bin.subarray(v.byteOffset || 0, (v.byteOffset || 0) + v.byteLength);
  const meta = await sharp(old).metadata();
  const scale = Math.min(1, maxDim / Math.max(meta.width, meta.height));
  if (scale >= 1) continue; // sudah cukup kecil

  const resized = await sharp(old).resize({ width: Math.round(meta.width * scale), height: Math.round(meta.height * scale), fit: "inside" }).png({ compressionLevel: 9 }).toBuffer();

  // image bufferView harus di akhir buffer agar bisa dipotong aman
  const tail = bin.subarray(0, v.byteOffset || 0);
  const newBin = Buffer.concat([tail, resized]);
  const binPad = pads(newBin.length);
  const padded = Buffer.concat([newBin, Buffer.alloc(binPad)]);

  v.byteLength = resized.length;
  json.buffers[0].byteLength = newBin.length;

  const jsonBuf = Buffer.from(JSON.stringify(json));
  const jsonPad = pads(jsonBuf.length);
  const header = Buffer.alloc(12);
  header.write("glTF", 0, 4, "ascii");
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(12 + 8 + jsonBuf.length + jsonPad + 8 + newBin.length + binPad, 8);

  const chunkJsonLen = Buffer.alloc(4);
  // GLB spec: JSON padding MUST be included in the chunk length
  chunkJsonLen.writeUInt32LE(jsonBuf.length + jsonPad, 0);
  const chunkJsonType = Buffer.from("JSON");
  const chunkBinLen = Buffer.alloc(4);
  // chunk length includes padding (must be 4-aligned); buffer byteLength stays unpadded above
  chunkBinLen.writeUInt32LE(padded.length, 0);
  const chunkBinType = Buffer.from([0x42, 0x49, 0x4e, 0x00]); // "BIN\0"

  fs.writeFileSync(output, Buffer.concat([
    header,
    chunkJsonLen, chunkJsonType, jsonBuf, Buffer.alloc(jsonPad, 0x20),
    chunkBinLen, chunkBinType, padded,
  ]));

  console.log(`GLB rebuilt: image ${meta.width}x${meta.height} -> ${resized.length} bytes (${(b.length / 1024).toFixed(0)}KB -> ${(fs.statSync(output).size / 1024).toFixed(0)}KB), alpha=${meta.hasAlpha}`);
  break;
}