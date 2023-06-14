/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ha-shem-gray': {
          100: '#F9F9F9',
          200: '#D9D9D9'
        }
      },
      width: {
        '100ha': '60rem',
        '200ha': '30rem'
      }
    },
  },
  plugins: [],
}

