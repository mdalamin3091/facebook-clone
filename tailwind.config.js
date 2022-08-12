module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1B74E4",
        hover_bg:"#f3f4f6",
        home_bg:"#F0F2F5"
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}