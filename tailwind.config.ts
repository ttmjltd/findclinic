import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      epilogue: ["Epilogue"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#012757",
        secondary: "#2A9D8F",
        accent: "#2A9D8F",
        neutral: "#EEF4FD",
        neutralDark: "#012757",
        bgWhite: "#EEF4FD",
        brightNavy: "#0275b4",
        blue: "#0167f9",
        navy: "#013bb3",

        // Diğer renkler...
      },
      screens: {
        xs: { max: "450px" },
      },
      fontSize: {
        xxs: ["10.79px", "11.06px"],
      },
    },
  },
  plugins: [],
};
export default config;
