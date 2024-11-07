/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        //accent: "#9200A3",// light mode
		  accent: "#D100E9",
		  background: '#000000',
		  foreground: "#FFFFFF",
		  gray: colors.neutral,
      },
    },
  },
  plugins: [],
};
