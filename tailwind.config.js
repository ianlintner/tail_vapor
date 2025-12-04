/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./demo/**/*.{html,js}', './src/**/*.{js,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('./src/index.js')],
};
