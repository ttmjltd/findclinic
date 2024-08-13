import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      colors: {
        primary: '#0077B6',
        secondary: '#2A9D8F',
        accent: '#ADE8F4',
        neutral: '#EEF4FD',
        neutralDark: '#012757',
        // Diğer renkler...
      },
    },
  },
  plugins: [],
};
export default config;
