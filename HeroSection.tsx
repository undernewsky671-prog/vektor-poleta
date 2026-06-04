"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO } from "@/constants/content";

export function HeroSection() {
  const handleAnchor = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-deep"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-bg-deep/60" />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content — px-8 md:px-16 чтобы «У» не обрезалась */}
      <div className="relative z-10 max-w-content mx-auto px-8 md:px-16 w-full pt-20">
        <div className="max-w-5xl">

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mono-tag text-accent mb-8"
          >
            FPV · Образовательная платформа
          </motion.p>

          {/* overflow-visible — не обрезает выносные элементы кириллицы */}
          <div style={{ overflow: "visible" }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-[clamp(64px,10vw,120px)] font-bold leading-[0.95] tracking-[-0.04em] text-text-primary"
              style={{ paddingLeft: "0.03em" }}
            >
              {HERO.headline1}
              <br />
              {HERO.headline2}
            </motion.h1>
          </div>

          {/* Лид с явными переносами — «в» на новой строке */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg"
          >
            Программная платформа нового поколения
            <br />
            для обучения FPV-пилотированию.
            <br />
            Реалистичная симуляция, структурированная
            <br />
            методология и всё необходимое —
            <br />
            в одном продукте.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => handleAnchor("#pricing")}
              className="inline-flex items-center justify-center bg-accent text-bg-deep font-semibold text-[15px] px-8 py-3.5 rounded hover:bg-accent-hover hover:-translate-y-px active:translate-y-0 transition-all duration-200"
            >
              {HERO.ctaPrimary}
            </button>
            <button
              onClick={() => handleAnchor("#equipment")}
              className="inline-flex items-center justify-center bg-transparent border border-accent text-accent font-medium text-[15px] px-8 py-3.5 rounded hover:bg-accent/12 transition-colors duration-200"
            >
              {HERO.ctaSecondary}
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="mono-tag text-text-muted">{HERO.scrollLabel}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}
