/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['72px','75px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif']
      },
      colors: {
        'tcgrey':'#B4B4B8',
        'tclmagenta' : '#6D2932',
        'tcmagenta' : '#561C24',
        'tcs4': "#E2BFB3",
        "tcs3": "#FFBE98",
        "tcs2": "#F7DED0",
        "tcs1": "#FEECE2",
    },
    backgroundImage: {
      'footer-texture' :'url("https://www.transparenttextures.com/patterns/xv.png")',
      
    }
  },
},
  plugins: [
    require('flowbite/plugin')
  ],
}
