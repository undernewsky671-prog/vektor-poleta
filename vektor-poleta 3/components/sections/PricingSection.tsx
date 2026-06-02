"use client";
import { motion } from "framer-motion";
import { PRICING_SOFTWARE } from "@/constants/content";
import { SectionHeading, Reveal } from "@/components/ui";

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-bg-deep">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label={PRICING_SOFTWARE.sectionLabel}
            line1={PRICING_SOFTWARE.headline1}
            line2={PRICING_SOFTWARE.headline2}
            subtext={PRICING_SOFTWARE.subheadline}
            center
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {PRICING_SOFTWARE.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.07,
              }}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                plan.featured
                  ? "bg-surface border border-accent"
                  : "bg-surface border border-white/07 hover:border-white/14 hover:-translate-y-1"
              }`}
              style={
                plan.featured
                  ? { boxShadow: "0 0 32px rgba(0,212,255,0.12)" }
                  : {}
              }
            >
              {/* Featured badge */}
              {plan.featured && plan.featuredLabel && (
                <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 bg-accent text-bg-deep mono-tag px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.featuredLabel}
                </div>
              )}

              {/* Tier */}
              <p
                className={`mono-tag mb-1 ${plan.featured ? "text-accent" : "text-text-muted"}`}
              >
                {plan.tag}
              </p>
              <p className="text-xs text-text-secondary mb-5 leading-snug min-h-[32px]">
                {plan.slogan}
              </p>

              <div className="h-px bg-white/07 mb-5" />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                {plan.features.map((f, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-2.5 text-xs text-text-secondary leading-snug"
                  >
                    <span className="text-accent mt-0.5 flex-shrink-0 text-[10px]">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                  plan.featured
                    ? "bg-accent text-bg-deep hover:bg-accent-hover"
                    : "bg-transparent border border-white/12 text-text-primary hover:bg-surface-hover hover:border-white/20"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
