module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '0': '0 0 auto'
      },
      spacing: {
        '18': '5rem',
        'left-f': '35.55%',
        'left-p': '30%',
        'right-p': '10%',
        'basket': '6rem',
      }
    },
  },
  plugins: [],
}
