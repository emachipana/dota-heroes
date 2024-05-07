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
        "nunito": ["Nunito", "sans-serif"],
        "odor": ["Odor Mean Chey", "serif"]
      },
      height: {
        "hero": "calc(100vh - 180px)",
      },
      borderWidth: {
        "3": "3px"
      }
    },
  },
  plugins: [],
}

