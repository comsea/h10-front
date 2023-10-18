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
        'gray' : '#F5F5F5',
        'gray2' : '#E9ECEF',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1490px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
