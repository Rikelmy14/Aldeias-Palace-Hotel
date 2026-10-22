import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FBF9F5",
          100: "#F5F1E8",
          200: "#EAE2D0",
          300: "#DCCFAF",
        },
        champagne: {
          400: "#C9A876",
          500: "#B08D57",
          600: "#7A5A32",
        },
        graphite: {
          800: "#2A2724",
          900: "#1C1A17",
          950: "#121110",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.06em",
      },
      maxWidth: {
        prose2: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
