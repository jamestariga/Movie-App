/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['cupcake', 'dark'],
  },
  plugins: [require('daisyui')],
}
