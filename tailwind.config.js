const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {

      fuchsia: colors.fuchsia,
      blue: colors.blue,
      indigo: colors.indigo,
      gray: colors.gray,
    },
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
