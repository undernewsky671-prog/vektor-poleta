"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CTA_SECTION } from "@/constants/content";
import { SectionHeading, Reveal } from "@/components/ui";

export function CTASection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;
    setLoading(true);
    // Simulate submission (replace with real API call)
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setStatus("success");
  };

  return (
    <section id="contact" className="section-padding bg-bg-mid relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(0,212,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-5 md:px-10">
        {/* Headline */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="section-label mb-5">{CTA_SECTION.sectionLabel}</p>
            <h2
              className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              {CTA_SECTION.headline1}
              <br />
              <span className="text-accent">{CTA_SECTION.headline2}</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <Reveal delay={0.1}>
            <div className="bg-bg-light border border-white/07 rounded-2xl p-8">
              <h3 className="text-base font-semibold text-text-primary mb-6">
                {CTA_SECTION.formTitle}
              </h3>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="text-4xl mb-4">✓</div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {CTA_SECTION.successTitle}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {CTA_SECTION.successText}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label className="mono-tag text-text-secondary block mb-2">
                      {CTA_SECTION.fields.name.label}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={CTA_SECTION.fields.name.placeholder}
                      required
                      className="w-full bg-surface border border-white/12 rounded-md px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,212,255,0.12)] transition-all duration-200"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="mono-tag text-text-secondary block mb-2">
                      {CTA_SECTION.fields.contact.label}
                    </label>
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={CTA_SECTION.fields.contact.placeholder}
                      required
                      className="w-full bg-surface border border-white/12 rounded-md px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,212,255,0.12)] transition-all duration-200"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="mono-tag text-text-secondary block mb-2">
                      {CTA_SECTION.fields.interest.label}
                    </label>
                    <div className="relative">
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full bg-surface border border-white/12 rounded-md px-4 py-3 text-sm text-text-primary outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,212,255,0.12)] transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          {CTA_SECTION.fields.interest.placeholder}
                        </option>
                        {CTA_SECTION.fields.interest.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-xs">
                        ▾
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading || !name || !contact}
                    className="mt-2 w-full bg-accent text-bg-deep font-semibold text-[15px] py-3.5 rounded-md hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-bg-deep/30 border-t-bg-deep rounded-full animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      CTA_SECTION.submitBtn
                    )}
                  </button>

                  <p className="text-[11px] text-text-muted text-center leading-snug">
                    {CTA_SECTION.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contacts + trust */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.2}>
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-4">
                  {CTA_SECTION.contactsTitle}
                </h3>
                <div className="flex flex-col gap-3">
                  {CTA_SECTION.contacts.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-bg-light border border-white/07 rounded-xl px-5 py-4 hover:border-white/14 transition-colors duration-200"
                    >
                      <div>
                        <p className="mono-tag text-text-muted mb-0.5">
                          {c.platform}
                        </p>
                        <p className="text-sm font-medium text-text-primary">
                          {c.handle}
                        </p>
                      </div>
                      <span className="text-accent text-sm font-medium">
                        {c.cta}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-text-muted">
                  {CTA_SECTION.workHours} · {CTA_SECTION.responseTime}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-bg-light border border-white/07 rounded-xl p-6">
                <ul className="flex flex-col gap-3">
                  {CTA_SECTION.trustItems.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <span className="text-accent text-xs flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
