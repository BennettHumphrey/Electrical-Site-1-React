/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxsm: '350px',
      xsm: '480px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'main': '#e6e6e6',
        'company':'#7254ab',
        'text':'#4d4d4d',
        'bubble':'#333333c6',
        'footer':'#b1b2bd',
        'footer-text':'white'
      },
    },
  },
  plugins: [],
}

