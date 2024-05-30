import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark": "#3d3d3d",
      "primary": "var(--color-primary)",
      "primary-300": "var(--color-primary-300)",
      "white": "#fff",
      "white-100": "var(--color-white-100)",
      "gradient": "var(--color-gradient)",
      "transparent": "transparent"
    },
    extend: {
      fontFamily: {
        "open-sans": "var(--font-open-sans)",
        "playfair-display": "var(--font-playfair-display)"
      }
    },
  },
  plugins: [],
};
export default config;
