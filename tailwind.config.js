/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "about-bg": "url('/src/assets/AboutImage.svg')",
        "hero-bg": "url('/src/assets/hero-image.png')",
      },
      colors: {
        PrefooterBg: "#333333",
        FooterBg: "#242424",
        white: "#FFFFFF",
        greenText: "#035057",
        blueText: "#10367A",
        grayText: "#031A1C",
        orangeText: "#FE5716",
        cardH1: "#10367A",
        cardP: "#454C5D",
        grayBg: "#F0ECEC",
      },
    },
  },
  plugins: [
    
  ],
};
