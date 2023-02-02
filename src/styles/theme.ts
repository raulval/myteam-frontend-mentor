import { Livvic } from "@next/font/google";

const livvic = Livvic({
  weight: ["400", "500", "600", "700", "900"],
});

const Theme = {
  colors: {
    background: "#014e56",
    primary: {
      main: "#f67e7e",
      text: "#ffff",
    },
    secondary: {
      main: "#012f34",
      text: "#79c8c7",
    },
    terciary: {
      text: "#99a8a9",
    },
  },
  fonts: {
    main: livvic.style.fontFamily,
  },
};

export default Theme;
