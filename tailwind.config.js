/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f3f8',
          100: '#d9e0ed',
          200: '#b3c1db',
          300: '#8da2c9',
          400: '#6783b7',
          500: '#3d5a8a',
          600: '#2a4470',
          700: '#1B2A4A',
          800: '#152240',
          900: '#0f1a30',
        },
        accent: {
          50: '#fdf8eb',
          100: '#f9ecc8',
          200: '#f0d898',
          300: '#e4c06a',
          400: '#d4a94a',
          500: '#C8A55A',
          600: '#b08d3e',
          700: '#8c6f2e',
          800: '#6b5523',
          900: '#4a3b18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
