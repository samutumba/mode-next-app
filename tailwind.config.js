/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {  
      title: ['Raleway', 'Open Sans', 'ui - sans - serif', 'system - ui'],
      p: ['Quicksand', 'ui-serif', 'Georgia', 'Open Sans'],
      t: ['Raleway','Quicksand', 'ui-serif', 'Georgia', 'Open Sans'],
   
    },
    colors: {
      'sun': '#FDD962',
      'iron': '#e1e1e1',
      'evening-blue': '#3261fa',
      'tint-blue': '#fefaf7',
      'midnight-blue': '#060130',
      'gold': '#F3AC70',
      'dirt': '#090604',
      'dark-blue': '#00273D',
      'shade-blue': '#050025',
      'bottom-blue': '#040020',
      'ivory': '#fffff0'

    },

  },
  plugins: [
    require('flowbite/plugin'),
     require('flowbite-typography'),
  ],
}
 