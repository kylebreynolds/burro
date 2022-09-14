/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.js',
    './src/components/Home.js',
    './src/components/Contact.js',
    './src/components/Burro.js',
    './src/components/Resume.js'

],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },


    extend: {
     
    },
  },
  plugins: [],
}
