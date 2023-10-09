/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        bolsomiq: ["Balsamiq Sans", "cursive"],
      },
      colors: {
        primary: "#653FD2",
        darkGrey: "#1B2430",
      },
    },
  },
  plugins: [],
};
