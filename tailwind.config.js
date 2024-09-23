/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "rgba(252,245,223,.95)",
        gold: "#fcb913",
      },
      fontFamily: {
        primary: "teko",
        secondary: "josefin slab",
        tetriary: "courier prime",
      },
    },
  },
  plugins: [],
};
