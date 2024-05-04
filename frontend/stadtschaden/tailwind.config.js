/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["36px", "40px"],
      "4xl": ["48px", "58px"],
      "6xl": ["72px", "88px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        primary: ["MuseoModerno", "sans-serif"],
      },
      colors: {
        primary: "#00784A",
        secondary: "#57B8EF",
        background: "#292929",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        darkgray: "#1f1f1f",
        lightgray: "#ecf0f3"
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        leafesBackground: "url('assets/images/background-leafes.jpg')",
        lightLeafesBackground:
          "url('assets/images/background-wallpaper-2.webp')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
