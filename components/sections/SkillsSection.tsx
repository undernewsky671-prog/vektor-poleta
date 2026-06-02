"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants/content";
import { SectionHeading, Reveal } from "@/components/ui";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-light-bg">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label={SKILLS.sectionLabel}
            line1={SKILLS.headline1}
            line2={SKILLS.headline2}
            subtext={SKILLS.subheadline}
            light
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.07,
              }}
              whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
              className="bg-white border border-light-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="w-10 h-10 bg-black/05 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <span className="font-mono font-bold text-2xl text-light-text tracking-tight">
                  {item.accent}
                </span>
              </div>
              <h3 className="text-[15px] font-semibold text-light-text leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-light-text-2 leading-relaxed flex-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
