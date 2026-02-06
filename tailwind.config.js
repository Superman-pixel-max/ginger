/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        floatAround: {
          "0%": { transform: "translate(0px, 0px)" },
          "25%": { transform: "translate(20px, -30px)" },
          "50%": { transform: "translate(-25px, -10px)" },
          "75%": { transform: "translate(15px, 20px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        floatUp: {
          "0%": { transform: "translateY(100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-10vh)", opacity: "0" },
        },
        floatDown: {
          "0%": {
            transform: "translate(0px, -10vh) rotate(0deg)",
            opacity: "0",
          },
          "50%": {
            transform: "translate(0px, 50vh) rotate(180deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(-30px, 100vh) rotate(360deg)",
            opacity: "0",
          },
        },

      },

      animation: {
        pop: "pop 0.3s ease-out",
        floatAround: "floatAround 10s ease-in-out infinite",
        floatUp: "floatUp 6s linear infinite",
        floatDown: "floatDown 8s linear infinite",
      },

      colors: {
        primary: "#fe6ed5",
        secondary: "#ff92d7",
        accent: "#8404ae",
        tertiary: "#000000",
        background: "#570000",
      },
    },
  },
  plugins: [],
};
