/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk'],
      },

      colors: {
        'rubikBlk': '#1E1E1E',
        'rubikWht': '#F9F9F9',
        'rubikOrng' : '#FF5900',
        'rubikRed' : '#B90000',
        'rubikBlu' : '#0045AD',
        'rubikGrn' : '#009B48',
        'rubikYllw' : '#FFD500',
        'light-gry' : '#e6e6e6'
      },
    },
  },
  plugins: [],
}