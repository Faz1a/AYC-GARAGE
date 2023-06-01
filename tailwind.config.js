/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
    
  ],
  theme: {
    
    extend: {
      fontFamily:{
        'aycfont':['AYCFONT'],
      }
    },
    colors: {

     'aycolor': '#26b53e',
     'black': '#020617',
     'white': '	#fdfdff',
    
    },
    brightness: {
      25: '.25',
      175: '1.75',
    }
  },
  plugins: [
    
  ],
}