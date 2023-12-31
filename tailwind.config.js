/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files:["./src/**/*.{html,js}", "./src/*.{html,js}"],
  },
  theme: {
    colors: {
      'beige': '#DCC1AB',
      'gray': '#F5F0EC', 
      'green': '#1B5B31',
      'light-beige': '#F5F0EC',
      'white': '#FFFFFF',
      'black': '#111111',
    },
    
    extend: { 
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
    },
      transitionProperty: {
        'height': 'height',
    },
  },
  plugins: [],
}
}
