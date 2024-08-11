/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'main-red':'#FF0000',
        'main-black':"#000000",
        'main-white':"#FFFFFF",
        'second-color':"#D1D1D1"
      
      }
    },
    
  },
  plugins: [],
};
