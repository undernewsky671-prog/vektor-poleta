"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REVIEWS } from "@/constants/content";
import { SectionHeading, StarRating, Reveal } from "@/components/ui";

export function ReviewsSection() {
  const [active, setActive] = useState(0);
  const reviews = REVIEWS.items;

  const next = () => setActive((a) => (a + 1) % reviews.length);
  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="section-padding bg-bg-mid">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label={REVIEWS.sectionLabel}
            line1={REVIEWS.headline1}
            line2={REVIEWS.headline2}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-16">
          {/* Name list — desktop */}
          <div className="hidden lg:flex flex-col gap-1 pt-2">
            {reviews.map((r, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  i === active
                    ? "bg-accent/12 text-accent font-medium"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>

          {/* Active review */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg-light border border-white/07 rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-semibold text-text-primary text-[15px]">
                      {reviews[active].name}
                    </p>
                    <span className="mono-tag text-accent mt-1 inline-block">
                      {reviews[active].tag}
                    </span>
                  </div>
                  <StarRating count={reviews[active].stars} />
                </div>

                <blockquote className="text-base md:text-lg text-text-secondary leading-relaxed">
                  «{reviews[active].text}»
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="flex items-center justify-between mt-6">
              {/* Mobile name pills */}
              <div className="flex gap-1.5 lg:hidden overflow-x-auto">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200 ${
                      i === active ? "bg-accent" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <div className="hidden lg:block" />

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-white/12 rounded-lg flex items-center justify-center text-text-secondary hover:border-white/30 hover:text-text-primary transition-all duration-200"
                  aria-label="Предыдущий"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-white/12 rounded-lg flex items-center justify-center text-text-secondary hover:border-white/30 hover:text-text-primary transition-all duration-200"
                  aria-label="Следующий"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
