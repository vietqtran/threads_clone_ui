/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/images/LoginBackground.png')",
      },
      backgroundColor: {
        'login-input-d': 'rgb(30, 30, 30)',
        'login-input-l': 'rgb(245, 245, 245)'
      },
      fontSize: {
        '15': '0.938rem'
      },
      textColor: {
        'login-input-d': 'rgb(243, 245, 247)'
      }
    },
  },
  plugins: [],
}

