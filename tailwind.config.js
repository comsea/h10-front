/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#174E65',
        'ligthblue' : '#EFFAFF',
        'blue':'#C3D5DC',
        'bluegray' : '#7C929B',
        'gray' : '#F5F5F5'

      },
    }
  },
  plugins: [],
}