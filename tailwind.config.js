/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1094AE',
          dark: '#117A8F',
          light: '#14B8DA',
          hover: '#117A8F',
        },
        accent: {
          rose: '#D48596',
          'rose-light': '#ED2CDC',
          'rose-lighter': '#F5E6ED',
        },
        bg: {
          warm: '#FFFBF7',
        }
      },
      animation: {
        'in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}