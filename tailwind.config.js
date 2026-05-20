/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7F77DD",
        accent: "#1D9E75",
        background: "#0F0E1A",
        surface: "#231F35",
        text: "#F0EFF8",
      },
    },
  },
  plugins: [],
}