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
        back: "#f2f2f2",
        content: "#1D1D1F",
        gray01: "#6E6E73",
        gray02: "#d2d2d7a3",
        gray03: "#86868b",
        white01: "#FAFAFC",
        white02: "#E8E8ED66",
        blue01: "#06C",
        blue_active: "#006edb",
        blue02: "#0071E3",
        brown01: "#B64400",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
