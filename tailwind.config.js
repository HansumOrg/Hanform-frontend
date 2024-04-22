/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './navigation/**/*.{js,jsx,ts,tsx}', './utils/**/*.{js,jsx,ts,tsx}', './assets/**/*.{js,jsx,ts,tsx}', './constants/**/*.{js,jsx,ts,tsx}', './hooks/**/*.{js,jsx,ts,tsx}', './services/**/*.{js,jsx,ts,tsx}', './store/**/*.{js,jsx,ts,tsx}', './styles/**/*.{js,jsx,ts,tsx}', './theme/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors :{
        'main-background' : '#F5F6F8',
        'enable-button-background' : '#1A5BAB',
        'disable-button-background' : '#D8D8D8'
      }
    },
  },
  plugins: [],
};
