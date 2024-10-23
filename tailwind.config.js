/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          600: '#2D3748',
          700: '#1A202C',
          750: '#161B2C',
          800: '#12151F',
          900: '#0A0C14',
        },
      },
    },
  },
  plugins: [],
};