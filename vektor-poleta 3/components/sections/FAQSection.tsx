"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ } from "@/constants/content";
import { SectionHeading, Reveal } from "@/components/ui";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-bg-deep">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <SectionHeading
                label={FAQ.sectionLabel}
                line1={FAQ.headline1}
                line2={FAQ.headline2}
                subtext={FAQ.subheadline}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 inline-flex items-center gap-1.5 text-accent font-medium text-sm hover:text-accent-hover transition-colors duration-150 group"
              >
                {FAQ.linkLabel}
              </button>
            </Reveal>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col">
            {FAQ.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="border-b border-white/07">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`text-sm font-medium leading-snug transition-colors duration-200 ${
                        open === i ? "text-text-primary" : "text-text-secondary"
                      }`}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`w-5 h-5 flex-shrink-0 rounded-full border flex items-center justify-center text-sm leading-none transition-colors duration-200 ${
                        open === i
                          ? "border-accent text-accent bg-accent/12"
                          : "border-white/12 text-text-secondary"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-text-secondary leading-relaxed pb-5">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
