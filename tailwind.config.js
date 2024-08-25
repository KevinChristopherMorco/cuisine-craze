/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: { fadeIn: "fadeIn 150ms ease-in-out" },
      backgroundImage: {
        waves: "url('/src/images/waves/wave.svg')",
        wavesDark: "url('/src/images/waves/wave-dark.svg')",
      },
    },
  },
  plugins: [],
};
