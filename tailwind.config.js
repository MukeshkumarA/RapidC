/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      colors: {
        'semiTransparent-blue': 'rgba(2, 6, 12, 0.75)',
      }
    },
  },
  plugins: [require("daisyui")],
}

