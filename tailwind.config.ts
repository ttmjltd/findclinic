import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'epilogue': ['Epilogue'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        
      },
      colors: {
        primary: '#0077B6',
        secondary: '#2A9D8F',
        accent: '#ADE8F4',
        neutral: '#EEF4FD',
        neutralDark: '#012757',
        bgWhite: '#EEF4FD'
        
      },
      screens: {
        'xs': {'max': '450px'},
      },

    },
  },
  plugins: [],
};
export default config;
