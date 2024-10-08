/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'custom-color': 'invert(1) sepia(1) saturate(5) hue-rotate(90deg)', // Custom filter
      },
    },
  },
  plugins: [],
}

