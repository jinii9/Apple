module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
    },
    extend: {
      colors: {
        back: "#F5F5F7",
        content: "#1D1D1F",
        gray01: "#6E6E73",
        white01: "#fafafc",
        white02: "#e8e8ed66",
        blue01: "#06c",
      },
    },
  },
  plugins: [],
};
