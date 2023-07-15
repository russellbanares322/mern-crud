/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto Serif", "serif"],
    },
    colors: {
      white: "#FFFFFF",
      green: "#017143",
      black: "#343434",
      gray: "#4C4C4C",
    },
  },
  plugins: [],
};
