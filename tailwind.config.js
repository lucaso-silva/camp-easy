/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bonfire': "url('public/bonfire.svg')",
        'banner-img': "url('public/banner_img.jpg')",
        'search': "url('public/search.svg')"
      },
      fontFamily: {
        mainFont: ['"Protest Strike"', "sans-serif"],
        secondFont: ['"Protest Riot"', "sans-serif"]
      }
    },
  },
  plugins: [],
}

