/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-sarif"],
      },
      colors: {
        primary: "hsl(263, 55%, 52%)",
        secondly: "hsl(217, 19%, 35%)",
        thirdly: "hsl(219, 29%, 14%)",
        fourthly: "hsl(0, 0%, 100%)",
        rear: "hsl(210, 46%, 95%)",
        primarytext: "hsl(0, 0%, 81%)",
        footerlink: "hsl(228, 45%, 44%)",
      },
      backgroundImage: {
        'hero-pattern': "url('./images/bg-pattern-quotation.svg')"
      },
      backgroundPosition: {
        'hero-pattern-position': "top right 15%",
      },
    },
  },
  plugins: [],
}

