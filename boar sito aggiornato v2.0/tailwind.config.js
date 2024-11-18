/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff69b4', // pink
          dark: '#ff1493', // darker pink
        },
      },
    },
  },
  plugins: [],
};