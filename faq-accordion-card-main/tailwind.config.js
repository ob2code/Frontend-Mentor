module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pri-txt-blue": "hsl(238, 29%, 16%)",
        "pri-txt-red": "hsl(14, 88%, 65%)",
        "nue-txt-very-blue": "hsl(237, 12%, 33%)",
        "nue-txt-blue": "hsl(240, 6%, 50%)",
        "div-blue": "hsl(240, 5%, 91%)",
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-blue": "hsl(240, 73%, 65%)",
      },
      fontFamily: {
        KumbhSans: ['"Kumbh Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
