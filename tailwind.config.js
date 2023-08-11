/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
          3: "#21262d",
          4: "#30363d",
          5: "#58a6ff",
          6: "#30363d",
          7: "#f0f6fc1a",
          8: "#21262d",
          9: "#8b949e",
          10: "#B7C0CA",
          11: "#56585B"
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
