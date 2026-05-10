import type { Config } from "tailwindcss";

const ink = (k: number) => `rgb(var(--ink-${k}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: ink(950),
          900: ink(900),
          800: ink(800),
          700: ink(700),
          600: ink(600),
          500: ink(500),
          400: ink(400),
          300: ink(300),
          200: ink(200),
          100: ink(100),
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          dim: "rgb(var(--accent-dim) / <alpha-value>)",
          glow: "rgb(var(--accent-glow) / <alpha-value>)",
        },
      },
      animation: {
        blink: "blink 1.1s steps(2) infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "scroll-x": "scroll-x 40s linear infinite",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
