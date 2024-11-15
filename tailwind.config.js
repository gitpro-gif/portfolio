/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playwrite': ['"Playwrite IT Moderna"', 'cursive', 'sans-serif'], // Add custom font
      },
    },
  },
  plugins: [],
}

