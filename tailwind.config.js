/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        main: {
          DEFAULT: '#435BDA', 
          light: '#7484D3', 
          dark: '#2444EE', 
        },
      },
    },
  },
  plugins: [],
}

