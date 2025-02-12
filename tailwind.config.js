/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"], // Überschriften
        body: ["Montserrat", "sans-serif"], // Fließtext
      },
      spacing: {
        0.75: "0.1875rem", // 3px
        1.5: "0.375rem", // 6px
        2.5: "0.625rem", // 10px
        3.5: "0.875rem", // 14px
      },
    },
  },
  plugins: [],
};
