/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        RedHatdisplay: ['Red Hat Display, sans-serif'],
        Roboto: ["Roboto, sans-serif"],
        Lato: ["Lato, sans-serif"],
      },
      colors:{
        customOrange: "rgba(255, 140, 0, 1)",
   
        customSkyblue: "rgba(58, 123, 213, 1)",
   customRed: '#FF6B6B',
   customDarkgrey: '#333333'
 


      },
      boxShadow: {
        'custom-light': '0 4px 20px rgba(94, 94, 94, 0.1)',
      },
  },
  plugins: [],
}
}

