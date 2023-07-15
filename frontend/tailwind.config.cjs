/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto Serif", "serif"],
    },
    colors: {
      orange: "#DF622C",
      white: "#ffffff",
    },
  },
  plugins: [],
};
