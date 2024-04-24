/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: { fontFamily: {
      'sans': ["Raleway", "sans-serif"],
    },
    backgroundImage: {
      'hero-pic': "url('/public/nathan-anderson-FHiJWoBodrs-unsplash.jpg')",
    }
  },
  },
  plugins: [],
}