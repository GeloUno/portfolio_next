const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      myColorFirst: "#4073E3",
      myColorSecond: "#330067",
      myColorThird: "#B700A4",
      myColorFourth: colors.fuchsia,
      ...colors
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
