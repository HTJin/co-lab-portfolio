/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      work: ["Work Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#9FD8FF",
        secondary: "#FFCD32",
        tertiary: "#465BFF",
      },
      animation: {
        trance: "trance 5s infinite linear",
      },
      keyframes: {
        trance: {
          "0%, 100%": { color: "#465BFF" },
          "25%, 75%": { color: "#8b5cf6" },
          "50%": { color: "#9FD8FF" },
        },
      },
    },
  },
  plugins: [],
};
