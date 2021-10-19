module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
        blue: {
          450: "#5f99f7"
        }
      },
      fontFamily: {
        nunito: ['Nunito']
      },
      borderWidth: {
        '3': '3px',
        '6': '6px'
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
    },
  },
  plugins: [],
}
