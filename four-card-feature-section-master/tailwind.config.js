module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pri-red": "hsl(0, 78%, 62%)",
        "pri-cyan": "hsl(180, 62%, 55%)",
        "pri-orange": "hsl(34, 97%, 64%)",
        "pri-blue": "hsl(212, 86%, 64%)",
        "very-dark-blue": "hsl(234, 12%, 34%)",
        "grayish-blue": "hsl(229, 6%, 66%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        Poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
