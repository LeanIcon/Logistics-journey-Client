/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./assets/**/*.css"
  ],
  theme: {
    extend: {
      screens: {
        xss: "400px",
        xs: "480px",
        mdd: "550px",
        mlg: "920px",
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
