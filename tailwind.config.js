/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        quick: ['Quicksand', 'sans-serif'],
        lata: ['Inconsolata', 'sans-serif'],
        nan: ['Unbounded', 'sans-serif']

      }
    },

  },
  plugins: [],
}