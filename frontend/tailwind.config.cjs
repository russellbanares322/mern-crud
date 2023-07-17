/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      quicksand: "'Quicksand', serif",
    },
    colors: {
      white: "#FFFFFF",
      green: "#017143",
      "light-green": "#017250",
      black: "#343434",
      gray: "#4C4C4C",
      pink: "#ECDBC9",
      red: "#DB1723",
      "pale-white": "#E6E2DC",
      "light-red": "#FF5757",
    },
  },
  plugins: [],
};
