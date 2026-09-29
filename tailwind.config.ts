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
        brand: {
          50: "#f0f9fa",
          100: "#dcf1f4",
          200: "#bee4e9",
          300: "#91d1db",
          400: "#5cb7c6",
          500: "#1599a8", // Primary logo teal
          600: "#128290",
          700: "#126975",
          800: "#13545e",
          900: "#13464e",
          950: "#082c32",
        },
        clinical: {
          dark: "#0b1517",
          onyx: "#111b1d",
          charcoal: "#1c2b2e",
          slate: "#364a4e",
          muted: "#60777c",
          border: "#e0ecee",
          lightBorder: "#edf5f6",
          surface: "#f8fbfb",
          pure: "#ffffff",
          ice: "#edf8f9",
        },
        champagne: {
          50: "#faf8f5",
          100: "#f3ede4",
          200: "#e6d9c6",
          500: "#c7b198",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        'brand': '1.25rem',
        'subtle': '0.625rem',
      },
      boxShadow: {
        'glow-teal': '0 0 35px -5px rgba(21, 153, 168, 0.25)',
        'premium': '0 20px 50px -12px rgba(11, 21, 23, 0.08)',
        'subtle': '0 4px 20px -2px rgba(11, 21, 23, 0.04)',
      },
    },
  },
  plugins: [],
};
export default config;
