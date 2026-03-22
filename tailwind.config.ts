import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        cream: "#E8E0D5",
        "cream-dark": "#C8BFB2",
        copper: "#B8794E",
        "copper-light": "#D4956A",
        muted: "#6B6B6B",
        "surface-light": "#F2EDE8",
        "surface-mid": "#1A1A1A",
      },
      fontFamily: {
        display: ["var(--font-bodoni)", "Bodoni Moda", "serif"],
        body: ["var(--font-syne)", "Syne", "sans-serif"],
      },
      letterSpacing: {
        mega: "0.35em",
        wide: "0.15em",
      },
      animation: {
        "cursor-pulse": "cursorPulse 2s ease-in-out infinite",
        "fade-up": "fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "line-grow": "lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        cursorPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        lineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
