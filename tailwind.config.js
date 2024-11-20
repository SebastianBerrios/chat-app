/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#292F3F",
        lightgray: "#373E4E",
      },
    },
  },
  plugins: [],
};
