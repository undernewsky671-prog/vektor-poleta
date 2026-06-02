"use client";
import { motion } from "framer-motion";
import { PLATFORM } from "@/constants/content";
import { SectionHeading, Reveal } from "@/components/ui";

export function PlatformSection() {
  return (
    <section id="platform" className="section-padding bg-bg-deep">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label={PLATFORM.sectionLabel}
            line1={PLATFORM.headline1}
            line2={PLATFORM.headline2}
            subtext={PLATFORM.subheadline}
            center
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {PLATFORM.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 2) * 0.1,
              }}
              className="bg-bg-light border border-white/07 rounded-2xl p-8 hover:border-white/12 transition-colors duration-300"
            >
              <div className="w-11 h-11 bg-accent/12 rounded-lg flex items-center justify-center text-xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <button
              onClick={() =>
                document
                  .querySelector("#pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 bg-accent text-bg-deep font-semibold text-[15px] px-8 py-3.5 rounded hover:bg-accent-hover hover:-translate-y-px transition-all duration-200"
            >
              {PLATFORM.cta}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
