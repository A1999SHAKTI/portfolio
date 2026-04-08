import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          700: "#059669",
        },
        dark: {
          100: "#f0fdf8",
          200: "#d1fae5",
          300: "#a7f3d0",
          400: "#6ee7b7",
          500: "#4b7c6b",
          600: "#2d5a4a",
          700: "#1a3d32",
          800: "#0f2720",
        },
      },
    },
  },
  plugins: [],
};

export default config;
