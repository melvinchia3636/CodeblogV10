/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#eb5e28',
        background: '#f6f5f4',
      },
    },
  },
  plugins: [],
};
