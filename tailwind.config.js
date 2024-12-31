/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./js/*.js"
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'moon': ['Moon Dance', 'cursive'],
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

