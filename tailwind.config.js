/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-custom": "#386994",
        "green-custom": "#72C076",
        "blue-custom": "#223F59"
      },
      fontFamily: {
        "nunito": ["Nunito", "sans-serif"]
      }
    },
  },
  plugins: [],
}

