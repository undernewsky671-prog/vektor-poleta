"use client";
import { motion } from "framer-motion";
import { EQUIPMENT } from "@/constants/content";
import { SectionHeading, Reveal } from "@/components/ui";

export function EquipmentSection() {
  return (
    <section id="equipment" className="section-padding bg-bg-mid">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label={EQUIPMENT.sectionLabel}
            line1={EQUIPMENT.headline1}
            line2={EQUIPMENT.headline2}
            subtext={EQUIPMENT.subheadline}
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EQUIPMENT.kits.map((kit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.07,
              }}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                kit.featured
                  ? "bg-bg-light border border-accent hover:-translate-y-1"
                  : "bg-bg-light border border-white/07 hover:border-white/14 hover:-translate-y-1"
              }`}
              style={
                kit.featured
                  ? { boxShadow: "0 0 28px rgba(0,212,255,0.10)" }
                  : {}
              }
            >
              {/* Featured badge */}
              {kit.featured && kit.featuredLabel && (
                <div className="absolute -top-[11px] left-6 bg-accent text-bg-deep mono-tag px-3 py-1 rounded-full">
                  {kit.featuredLabel}
                </div>
              )}

              {/* Image area — плейсхолдер до добавления фото */}
              <div className="aspect-[16/9] bg-bg-deep/60 rounded-lg mb-5 flex items-center justify-center border border-white/05">
                {/*
                  IMAGE: Kit product photo
                  Имя файла: kit-{i}.jpg (kit-0.jpg ... kit-4.jpg)
                  После добавления фото в public/images/ запустите: node inject-images.js
                */}
                <span className="mono-tag text-text-muted text-[9px]">
                  {kit.tag}
                </span>
              </div>

              {/* Tag */}
              <p
                className={`mono-tag mb-1 ${kit.featured ? "text-accent" : "text-text-muted"}`}
              >
                {kit.tag}
              </p>
              <p className="text-xs text-text-secondary mb-5 leading-snug min-h-[32px]">
                {kit.slogan}
              </p>

              <div className="h-px bg-white/07 mb-4" />

              {/* Items */}
              <ul className="flex flex-col gap-2 flex-1 mb-5">
                {kit.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="flex items-start gap-2 text-xs text-text-secondary leading-snug"
                  >
                    <span className="text-accent mt-0.5 flex-shrink-0 text-[10px]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* For plan */}
              <p className="text-[10px] font-mono text-text-muted mb-4 border-t border-white/05 pt-3">
                {kit.forPlan}
              </p>

              {/* CTA */}
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                  kit.featured
                    ? "bg-accent text-bg-deep hover:bg-accent-hover"
                    : "bg-transparent border border-white/12 text-text-primary hover:bg-surface hover:border-white/20"
                }`}
              >
                {kit.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Consult block */}
        <Reveal delay={0.2}>
          <div className="mt-12 bg-bg-light border border-white/07 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {EQUIPMENT.consultBlock.title}
              </h3>
              <p className="text-sm text-text-secondary max-w-lg leading-relaxed">
                {EQUIPMENT.consultBlock.text}
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex-shrink-0 inline-flex items-center gap-2 bg-transparent border border-accent text-accent font-medium text-sm px-6 py-3 rounded-md hover:bg-accent/12 transition-colors duration-200"
            >
              {EQUIPMENT.consultBlock.cta}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
