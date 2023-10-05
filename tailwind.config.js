/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },

    extend: {
      fontFamily: {
        bebasNeue: ['Bebas Neue', 'sans-serif'],
        bodoniModa: ['Bodoni Moda', 'serif'],
      }
    },
  },
  plugins: [],
}

