/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bonfire': "url('/bonfire.svg')",
        'banner-img': "url('/banner_img.jpg')",
        'search': "url('/search.svg')"
      },
      fontFamily: {
        mainFont: ['"Protest Strike"', "sans-serif"],
        secondFont: ['"Protest Riot"', "sans-serif"]
      },
      dropShadow: {
        'light': '1px 1px 2px rgb(255,255,255)',
        'dark': '2px 2px 1px rgb(0,0,0)',
      }
    },
  },
  darkMode: "selector",
  plugins: [],
}


