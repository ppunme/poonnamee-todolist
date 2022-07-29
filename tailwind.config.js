/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      ipad: "820px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "lavender-500": "#e4ecfd",
        "lavender-600": "#d1d9e9",
        "navy-900": "#152238",
        "dark-gray-800": "#313131",
        "dark-gray-900": "#1f1f1f",
        "black-900": "#000",
      },
      width: {
        68: "17rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
      },
      height: {
        68: "17rem",
        128: "32rem",
        132: "33rem",
        144: "36rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")({})],
};
