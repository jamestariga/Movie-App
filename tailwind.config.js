/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blurred: 'rgba(255, 255, 255, 0.25)',
      },
    },
  },
  daisyui: {
    themes: ['cupcake', 'dark'],
  },
  plugins: [require('daisyui')],
}
