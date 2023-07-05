/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundColor: {
        'pureblue': '#00004d'
      },
      backgroundImage: {
        'logo': "url('../images/LR.png')"
      },
      backgroundSize: {
        '50': '50% auto'
      },
      fontFamily: {
        'robotoMono': '"Roboto Mono", monospace',
        'druk': '"Druk", sans-serif'
      },
      height: {
        '1/10': '10%',
        '9/10': '90%'
      }
    },
  },
  plugins: [],
}

