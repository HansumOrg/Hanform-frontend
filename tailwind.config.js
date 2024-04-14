/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}', './mainPage/**/*.{js,jsx,ts,tsx}'],
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
