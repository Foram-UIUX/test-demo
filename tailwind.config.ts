import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1C",
        secondary: "#D8CBB8",
        background: "#F7F4EE",
        accent: "#A8563A",
        premium: "#B18A4A",
        charcoal: "#242424"
      },
    },
  },
  plugins: [],
};
export default config;
