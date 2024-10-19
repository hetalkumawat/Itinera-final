/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        customGreen: '#14330E',
        lilac: '#E6E6FA',
        olive : '#B0CCBA' // Adding your custom green color
      },
    },
  },
  plugins: [],
}
