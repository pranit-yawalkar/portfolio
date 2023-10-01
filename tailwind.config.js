/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        bolsomiq: ["Balsamiq Sans", "cursive"],
      },
      colors: {
        primary: "#653FD2",
      },
    },
  },
  plugins: [],
};
