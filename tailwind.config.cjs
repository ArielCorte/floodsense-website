/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          500: '#1FABE2',
          800: '#0C74BA',
        },
      },
      fontFamily: {
        display: ['Cooper-Black'],
      },
    },
  },
  plugins: [],
}
