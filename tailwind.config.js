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
        'banner-img': "url('public/banner_img.jpg')"
      }
    },
  },
  plugins: [],
}

