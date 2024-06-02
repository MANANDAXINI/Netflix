/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-right': 'linear-gradient(to right, transparent, black 75%)',
      },
      maskImage: {
        'gradient-to-right': 'linear-gradient(to right, transparent, black 75%)',
      },
      webkitMaskImage: {
        'gradient-to-right': 'linear-gradient(to right, transparent, black 75%)',
      },
    },
  },
  plugins: [],
}