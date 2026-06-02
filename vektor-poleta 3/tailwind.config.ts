import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-deep": "#080809",
        "bg-mid": "#0D0F14",
        "bg-light": "#161A22",
        surface: "#1E2330",
        "surface-hover": "#242A38",
        "text-primary": "#F0F0EE",
        "text-secondary": "#8A8E99",
        "text-muted": "#4A4E5A",
        accent: "#00D4FF",
        "accent-hover": "#00AACF",
        "light-bg": "#F7F7F5",
        "light-surface": "#FFFFFF",
        "light-text": "#0D0F14",
        "light-text-2": "#5C6070",
        "light-border": "#E2E2DE",
        success: "#2ECC71",
        warning: "#F39C12",
        error: "#E74C3C",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      spacing: {
        "30": "7.5rem",
      },
      maxWidth: {
        content: "1280px",
      },
      backdropBlur: {
        glass: "12px",
        nav: "16px",
      },
      animation: {
        "count-up": "countUp 1.2s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        countUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
