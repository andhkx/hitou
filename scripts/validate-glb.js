const v = require("C:/Users/user/AppData/Local/Temp/opencode/porf-test/node_modules/gltf-validator");
const fs = require("fs");
(async () => {
  const path = process.argv[2] || "public/assets/lanyard/card.glb";
  const data = new Uint8Array(fs.readFileSync(path));
  const r = await v.validateBytes(data);
  console.log("VALIDATOR:", r.issues.numErrors, "errors,", r.issues.numWarnings, "warnings");
  r.issues.messages
    .filter((m) => m.severity < 2)
    .slice(0, 6)
    .forEach((m) => console.log("  ", m.severity === 0 ? "ERR" : "WARN", m.code, m.message.slice(0, 140)));
})();