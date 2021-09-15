module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        neutral: "var(--neutral)",

      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}