/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#277d70',
        secondary: '#e7f1f0',
      },
      textColor: {
        primary: '#277d70',
        secondary: '#e7f1f0',
      },
    },
  },
  plugins: [],
}