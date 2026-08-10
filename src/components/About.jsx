"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Award, Code2, FileText, Globe } from "lucide-react";
import { about, profile, projects, certificates } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1];

const STAT_ICONS = [Code2, Award, Globe];

export default function About() {
  const reduce = useReducedMotion();

  const stats = [
    { icon: STAT_ICONS[0], value: String(projects.length), title: "PROJECTS" },
    { icon: STAT_ICONS[1], value: String(certificates.length), title: "CERTIFICATES" },
    { icon: STAT_ICONS[2], value: String(projects.length + certificates.length), title: "COMPLETED WORKS" },
  ];

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: EASE },
    },
  };

  return (
    <section
      id="about"
      className="w-full min-h-[100dvh] flex items-start px-6 pt-[60px] pb-[30px] md:pt-20 md:pr-[60px] md:pl-[120px] relative z-10 text-white"
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16 } } }}
            className="w-full max-w-[600px]"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="font-mono text-[12px] text-muted tracking-[0.2em]">
                ABOUT ME
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="text-[clamp(32px,5vw,46px)] font-extrabold leading-[1.03] text-foreground">
                {profile.nameParts.map((part) => (
                  <div key={part}>{part}</div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
            >
              <p className="mt-[18px] text-[14px] text-secondary leading-[1.75] max-w-[490px]">
                {about.paragraph}
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            >
              <p className="mt-[18px] px-[25px] py-3 rounded-[10px] border border-border bg-card text-[12px] italic text-foreground/80 inline-block w-fit leading-relaxed">
                &ldquo;{about.quote}&rdquo;
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={{ once: false, margin: "-80px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16 } } }}
              className="flex gap-2.5 mt-[18px] flex-wrap"
            >
              <motion.a
                variants={itemVariants}
                href={about.cvUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-[18px] py-2.5 rounded-lg border border-white bg-white text-black text-[13px] font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:opacity-90"
                >
                  <FileText size={14} aria-hidden="true" />
                  Download CV
                </button>
              </motion.a>
              <motion.button
                variants={itemVariants}
                type="button"
                onClick={scrollToPortfolio}
                className="flex items-center gap-1.5 px-[18px] py-2.5 rounded-lg border border-white bg-transparent text-white text-[13px] font-semibold cursor-pointer transition-opacity duration-300 hover:opacity-85"
              >
                <ArrowUpRight size={14} aria-hidden="true" />
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 70, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 1.2, ease: EASE }}
            className="hidden lg:flex w-[48%] justify-end"
          >
            <div className="p-3 rounded-full border border-border -translate-x-20">
              {about.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={about.photo}
                  alt="Profile"
                  width={240}
                  height={240}
                  className="w-[240px] h-[240px] rounded-full object-cover block"
                />
              ) : (
                <div className="w-[240px] h-[240px] rounded-full bg-card flex items-center justify-center">
                  <span className="text-6xl font-extrabold text-muted tracking-tight">
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16 } } }}
          className="grid mt-9 grid-cols-1 md:grid-cols-3 gap-[18px]"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              variants={{
                hidden: { opacity: 0, scale: 0.92, y: 25 },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.85, ease: EASE },
                },
              }}
              whileHover={reduce ? undefined : { scale: 1.03 }}
              onClick={scrollToPortfolio}
              className="relative p-[18px] rounded-2xl border border-border bg-card cursor-pointer"
            >
              <div className="w-[34px] h-[34px] rounded-full border border-border flex items-center justify-center mb-2.5">
                <stat.icon size={16} className="text-foreground/70" aria-hidden="true" />
              </div>
              <div className="absolute top-4 right-4 text-[18px] font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-[11px] tracking-[0.08em] text-secondary">{stat.title}</div>
              <div className="absolute bottom-3.5 right-3.5 text-foreground/50">
                <ArrowUpRight size={15} aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}