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
        nunito: ["Nunito", "sans-serif"],
        odor: ["Odor Mean Chey", "serif"]
      },
      height: {
        hero: "calc(100vh - 180px)",
      },
      borderWidth: {
        3: "3px"
      },
      boxShadow: {
        custom: "0px 0px 10px 5px rgba(0, 0, 0, .5)"
      },
      scale: {
        115: "scale(1.15)"
      },
      fontSize: {
        s: "13px"
      }
    },
  },
  plugins: [],
}

