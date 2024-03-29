const colors = require("tailwindcss/colors");
const theme = require("./src/config/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      ...theme.colors,
      transparent: colors.transparent,
    },
    fontFamily: {
      body: ["Source Sans Pro", "sans-serif"],
      display: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xs: ["0.707rem", "1.75"],
      sm: ["0.8827rem", "1.75"],
      body: ["1rem", "1.75"], // 14px
      h5: ["1.414rem", "1.3"],
      h4: ["1.999rem", "1.3"],
      h3: ["2.827rem", "1.3"],
      h2: ["3.998rem", "1.3"],
      h1: ["5.653rem", "1.3"],
    },
    fontWeight: {
      normal: 300,
      medium: 400,
    },
    extend: {
      screens: {
        xs: "580px",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
