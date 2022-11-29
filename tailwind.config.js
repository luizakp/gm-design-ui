const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const neutralColor = {
  100: "#FFFFFF",
  200: "#F7F7F9",
  300: "#EBECF2",
  400: "#D7DDEA",
  500: "#BBC3D4",
  600: "#A5ADBF",
  700: "#82899A",
  800: "#4F576A",
  900: "#4F576A",
};

const givColors = {
  50: "#F6F3FF",
  100: "#E7E1FF",
  200: "#B9A7FF",
  300: "#8668FC",
  400: "#754CFF",
  500: "#5326EC",
  600: "#3811BF",
  700: "#211985",
  800: "#1B1657",
  900: "#090446",
};

const pinkyColors = {
  100: "#FFEBF4",
  200: "#FFC9E2",
  300: "#FF96C6",
  400: "#FD67AC",
  500: "#E1458D",
  600: "#D81A72",
  700: "#C7035E",
  800: "#AA004F",
  900: "#83003D",
};

const deepColors = {
  100: "#A3B0F6",
  200: "#6879D4",
  300: "#4E5CA8",
  400: "#404C8C",
  500: "#303B72",
  600: "#092560",
  700: "#121B4B",
  800: "#091139",
  900: "#030823 ",
};

const sucecessColors = {
  100: "#D2FFFB",
  200: "#A9F8F1",
  300: "#7CE8DF",
  400: "#5CD3C9",
  500: "#37B4A9",
  600: "#2EA096",
  700: "#1B8C82",
  800: "#058277",
  900: "#00665D ",
};

const linkColors = {
  100: "#CAE9FF",
  200: "#8DD0FF",
  300: "#52B7FF",
  400: "#24A4FF",
  500: "#0A91FE",
  600: "#0083E0",
  700: "#2C66CD",
  800: "#0245BB",
  900: "#00348E ",
};

const warningColors = {
  100: "#FFFBEF",
  200: "#FFF3D2",
  300: "#FFEAB5",
  400: "#FFCD7A",
  500: "#FFBF56",
  600: "#F6AB2F",
  700: "#EA960D",
  800: "#CE8000",
  900: "#A46500 ",
};

const dangerColors = {
  100: "#FFD6D0",
  200: "#FFB3A9",
  300: "#FF8A7A",
  400: "#F96E5B",
  500: "#E6492D",
  600: "#D93119",
  700: "#C71D06",
  800: "#A51400",
  900: "#7A0F00 ",
};

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        neutral: neutralColor,
        giv: givColors,
        pink: pinkyColors,
        deep: deepColors,
        sucecess: sucecessColors,
        link: linkColors,
        warning: warningColors,
        danger: dangerColors,
      },
    },
  },

  // Add some basic Tailwind plugins to add additional features:
  plugins: [],
};
