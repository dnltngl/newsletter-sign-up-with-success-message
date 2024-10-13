/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          Tomato: "hsl(4, 100%, 67%)",
        },
        neutral: {
          White: "hsl(0, 0%, 100%)",
          DarkSlateGrey: "hsl(234, 29%, 20%)",
          CharcoalGrey: "hsl(235, 18%, 26%)",
          Grey: "hsl(231, 7%, 60%)",
        },
      },
      fontFamily: {
        Roboto: ["Roboto-Bold", "sans-serif"], // Match with the font-family in @font-face
        RobotoRegular: ["Roboto-Regular", "sans-serif"], // Match with the font-family in @font-face
      },
      screens: {
        xs: "375px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
