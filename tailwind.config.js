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
    },
  },
  plugins: [],
};
