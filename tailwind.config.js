/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6c63ff',
        secondary: '#ff6584',
        bg: '#f4f4f4',
        text: '#212121'
      },

      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}