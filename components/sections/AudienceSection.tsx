"use client";
import { motion } from "framer-motion";
import { AUDIENCE } from "@/constants/content";
import { Tag, SectionHeading, Reveal } from "@/components/ui";

export function AudienceSection() {
  return (
    <section id="audience" className="section-padding bg-bg-mid">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label={AUDIENCE.sectionLabel}
            line1={AUDIENCE.headline1}
            line2={AUDIENCE.headline2}
            subtext={AUDIENCE.subheadline}
            center
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AUDIENCE.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-all duration-300"
            >
              <Tag>{card.tag}</Tag>
              <h3 className="text-base font-semibold text-text-primary leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                {card.text}
              </p>
              <button className="self-start text-sm text-accent font-medium hover:text-accent-hover transition-colors duration-150 group">
                {card.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                document
                  .querySelector("#pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-accent text-bg-deep font-semibold text-[15px] px-8 py-3.5 rounded hover:bg-accent-hover hover:-translate-y-px transition-all duration-200"
            >
              {AUDIENCE.cta}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
