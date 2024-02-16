/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#030303",
        purple: "#755CDE",
        orange: "#F6A560",
        pink: "#F39E9E",
        hotPink: "#EB7565",
        teal: "#61C4B7",
        violet: "#552049",
        grey: "#7A746E",
        base: "#FFF7F0",
      },
      keyframes: {
        arrowRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        arrowRight: "arrowRight 5s ease-in-out infinite",
      },
      width: {
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
