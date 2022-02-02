module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pri-violet": "hsl(257, 40%, 49%)",
        "pri-soft-magenta": "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        Poppins: ['"Poppins"', "sans-serif"],
        OpenSans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
