/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#65605f',
        secondaryColor: '#03a7e9'
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

