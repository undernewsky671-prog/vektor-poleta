"use client";
import { useState } from "react";
import Image from "next/image";
import { ABOUT } from "@/constants/content";
import { Reveal } from "@/components/ui";

export function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-padding bg-light-bg">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <div>
            <Reveal>
              <p className="section-label text-text-muted mb-5">
                {ABOUT.sectionLabel}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-4xl md:text-5xl font-bold text-light-text leading-[1.05] mb-8"
                style={{ letterSpacing: "-0.03em" }}
              >
                {ABOUT.headline1}
                <br />
                {ABOUT.headline2}
              </h2>
            </Reveal>

            <div className="space-y-5">
              {ABOUT.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.15 + i * 0.08}>
                  <p className="text-base text-light-text-2 leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <button className="mt-10 inline-flex items-center gap-1.5 text-light-text font-medium text-[15px] hover:text-accent transition-colors duration-200">
                {ABOUT.cta}
              </button>
            </Reveal>
          </div>

          {/* Right — image */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.2}>
              {/* Положите about.jpg в public/images/ */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-white/60 border border-light-border">
                {!imgError ? (
                  <Image
                    src="/images/about.jpg"
                    alt="Команда Вектора Полёта"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="mono-tag text-[10px] text-light-text-2">
                      Фото: about.jpg
                    </p>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-light-text rounded-xl px-8 py-6">
                <p
                  className="mono-tag text-accent text-sm"
                  style={{ letterSpacing: "0.16em" }}
                >
                  {ABOUT.manifesto}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
