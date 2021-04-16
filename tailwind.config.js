module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.tsx',
    './pages/**/*.tsx'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'blurple': {
          DEFAULT: '#7289da',
          'dark': '#495eab',
          'light': '#8fa4e3'
        },
        'footer': {
          'light': '#f7f9fc',
          'dark': '#eff1f4'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
