const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '5rem': '6rem',
    },
    colors: {
      fuchsia: colors.fuchsia,
      blue: colors.blue,
      indigo: colors.indigo,
      gray: colors.gray,
      purple: colors.purple,
      cyan: colors.cyan,
      white: colors.white,
    },
    extend: {
      backgroundImage: theme => ({
        'blobBackgroundMobile': "url('/images/BackgroundSmall.svg')",
        'blobBackgroundDesktop': "url('/images/Background.svg')",
        'titlePageBackgroud': "url('/images/TitleBackgroud.svg')",
      })
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
