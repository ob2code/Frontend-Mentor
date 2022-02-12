module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
        "gra-m-from": "hsl(0, 0%, 100%)",
        "gra-m-to": "hsl(0, 100%, 98%)",
        "gra-b-from": "hsl(0, 80%, 86%)",
        "gra-b-to": "hsl(0, 100%, 98%)",
      },
      fontFamily: {
        JosefinSans: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
