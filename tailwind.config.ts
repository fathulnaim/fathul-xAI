import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#121212",
        primary: "#FFFFFF",
        accent: {
          DEFAULT: "#38BDF8",
          muted: "rgba(56, 189, 248, 0.15)",
          border: "rgba(56, 189, 248, 0.3)",
        },
        muted: "#94A3B8",
        border: "#27272A",
      },
      fontFamily: {
        sans: ["Inter", "Geist", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 50px -10px rgba(56, 189, 248, 0.25)",
        "glow-sm": "0 0 25px -5px rgba(56, 189, 248, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
