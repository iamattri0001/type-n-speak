/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D27685',
        secondary: '#9E4784',
        tertiary: '#66347F',
        dark: '#37306B',
        light: '#FFEAEA'
      },
      fontFamily: {
        special: 'Orbitron, sans-serif',
        regular: 'Lato, sans-serif'
      },
    },
  },
  plugins: [],
}

