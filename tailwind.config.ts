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
    },
    extend: {
      backgroundImage: {
        
      },
      colors: {
        primary: '#012757',
        secondary: '#2A9D8F',
        accent: '#2A9D8F',
        neutral: '#EEF4FD',
        neutralDark: '#012757',
        bgWhite: '#EEF4FD'
        // Diğer renkler...
      },
      screens: {
        'xs': {'max': '450px'},
      },

    },
  },
  plugins: [],
};
export default config;
