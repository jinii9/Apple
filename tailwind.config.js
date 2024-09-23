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

      },
      keyframes: {
        slideUp: {
          '10%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.7s ease-out',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
