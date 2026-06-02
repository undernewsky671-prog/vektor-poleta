"use client";
import { motion } from "framer-motion";
import React from "react";

// ─── Button ──────────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "surface";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-sans font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 whitespace-nowrap";

  const sizes = {
    sm: "text-xs px-3.5 py-2 rounded",
    md: "text-sm px-5 py-2.5 rounded-md",
    lg: "text-base px-8 py-3.5 rounded-md",
  };

  const variants = {
    primary:
      "bg-accent text-bg-deep hover:bg-accent-hover hover:-translate-y-px active:translate-y-0",
    secondary:
      "bg-transparent text-accent border border-accent hover:bg-accent/12",
    ghost:
      "bg-transparent text-text-primary hover:text-accent px-0 py-0 rounded-none",
    surface:
      "bg-surface text-text-primary border border-white/12 hover:bg-surface-hover hover:border-white/20",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── Tag ──────────────────────────────────────────────────────
interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block mono-tag bg-accent/12 text-accent px-2 py-1 rounded ${className}`}
    >
      {children}
    </span>
  );
}

// ─── SectionHeading ───────────────────────────────────────────
interface SectionHeadingProps {
  label?: string;
  line1: string;
  line2?: string;
  subtext?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  label,
  line1,
  line2,
  subtext,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {label && (
        <p
          className={`section-label mb-4 ${light ? "text-text-muted" : "text-text-secondary"}`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-2 ${
          light ? "text-light-text" : "text-text-primary"
        }`}
        style={{ letterSpacing: "-0.03em" }}
      >
        {line1}
        {line2 && (
          <>
            <br />
            {line2}
          </>
        )}
      </h2>
      {subtext && (
        <p
          className={`mt-5 text-base leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-light-text-2" : "text-text-secondary"}`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}

// ─── ScrollReveal wrapper ──────────────────────────────────────
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── ImagePlaceholder ─────────────────────────────────────────
interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export function ImagePlaceholder({
  label,
  aspectRatio = "aspect-video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} ${className} bg-bg-light border border-white/07 rounded-xl flex items-center justify-center`}
    >
      <div className="text-center">
        <div className="text-2xl mb-2">📸</div>
        <p className="mono-tag text-text-muted">{label}</p>
      </div>
    </div>
  );
}

// ─── StarRating ───────────────────────────────────────────────
export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-accent text-sm">
          ★
        </span>
      ))}
    </div>
  );
}
