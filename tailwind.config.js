/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * Helio design tokens
 * -------------------
 * Color:
 *   helio  → Signal Green (#1E7A52) — primary brand color, nav/headlines/buttons
 *   amber  → Solar Amber (#E8A03C) — secondary accent, use sparingly for ONE
 *            spotlight number/highlight per section, never as a background
 *   ink    → #122A22 — deep pine-charcoal, primary text & dark sections
 *   paper  → #F7F6F1 — warm off-white, main background
 *   mist   → #E4EBE5 — card / alternate-section background
 *   navy   → #16324A — reserved for charts & data visualizations only
 *
 * Type:
 *   font-display → Space Grotesk (headlines)
 *   font-sans    → Inter (body copy, UI)
 *   font-mono    → IBM Plex Mono (stats, labels, data — anything that reads
 *                  like a forecast/sensor readout)
 */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        helio: {
          50: "#EAF4EF",
          100: "#D2E8DC",
          200: "#A6D1BA",
          300: "#7CBC9C",
          400: "#4C9B76",
          500: "#1E7A52",
          600: "#186344",
          700: "#124C35",
          800: "#0D3626",
          900: "#092619",
        },
        amber: {
          50: "#FDF3E4",
          100: "#FBE7C9",
          200: "#F5CE93",
          300: "#F0BD75",
          400: "#EEB157",
          500: "#E8A03C",
          600: "#C97F23",
          700: "#9C611C",
        },
        ink: "#122A22",
        paper: "#F7F6F1",
        mist: "#E4EBE5",
        navy: "#16324A",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};