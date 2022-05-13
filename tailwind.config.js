module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
