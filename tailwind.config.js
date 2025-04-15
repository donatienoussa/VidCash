/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["RubikBold", "sans-serif"],
        regular: ["RubikRegular", "sans-serif"],
        light: ["RubikLight", "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: "#0061FFA0",
          "100": "#0061FFA1"
        }
      }
    },
  },
  plugins: [],
}