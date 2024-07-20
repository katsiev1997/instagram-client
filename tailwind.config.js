/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0095F6",
        black: "#262626",
        gray: "#8E8E8E",
        border: "#DBDBDB",
        white: "#FAFAFA",
      },
    },
  },
  plugins: [],
};

