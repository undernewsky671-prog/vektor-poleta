"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV } from "@/constants/content";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-deep/90 backdrop-blur-nav border-b border-white/07"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-content mx-auto px-5 md:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-sans font-bold text-sm tracking-[0.06em] text-text-primary hover:text-accent transition-colors duration-200"
          >
            {NAV.logo}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleAnchor(link.href)}
                className="text-[13px] text-text-muted hover:text-text-primary transition-colors duration-150 px-3.5 py-2 rounded-md hover:bg-white/04"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => handleAnchor("#contact")}
            className="hidden md:inline-flex items-center gap-1.5 bg-accent text-bg-deep text-[13px] font-semibold px-4 py-2 rounded hover:bg-accent-hover transition-colors duration-200"
          >
            {NAV.cta}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Меню"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-text-primary"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-px bg-text-primary"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-text-primary"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg-deep/97 backdrop-blur-nav flex flex-col pt-20 px-6 pb-8"
          >
            <nav className="flex flex-col gap-1 flex-1">
              {NAV.links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleAnchor(link.href)}
                  className="text-left text-2xl font-semibold text-text-primary hover:text-accent transition-colors py-3 border-b border-white/05"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => handleAnchor("#contact")}
              className="w-full bg-accent text-bg-deep text-base font-bold py-4 rounded-md mt-8 hover:bg-accent-hover transition-colors"
            >
              {NAV.mobileCta}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
