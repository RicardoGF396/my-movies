/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        'dark-blue': '#202123',
        'main-blue': '#292D34',
        'main-gray': '#8A8A8A',
        'secondary-gray': '#3B3E45',
        'orange': '#DE8129'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
