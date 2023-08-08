/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Pally", "Comic Sans MS", "sans-serif"],
        body: ["Pally", "Comic Sans MS", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#010409",
          2: "#161b22",
        },
      },
    },
  },
  plugins: [],
};
