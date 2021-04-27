module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '124': '-36rem',
      }
    },
  },
  variants: {
    extend: {
      width: ['group-hover'],
      height: ['group-hover'],
    },
  },
  plugins: [],
}
