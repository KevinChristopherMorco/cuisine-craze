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
        navToggleIn: {
          "0%": { width: "0rem", opacity: 0 },
          "100%": { width: "50rem", opacity: 1 },
        },
        navToggleOut: {
          "0%": { width: "50rem", opacity: 1 },
          "100%": { width: "0rem", opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 150ms ease-in-out",
        navToggleIn: "navToggleIn 150ms ease-in-out",
        navToggleOut: "navToggleOut 150ms ease-in-out",
      },
      backgroundImage: {
        waves: "url('/src/images/waves/wave.svg')",
        wavesDark: "url('/src/images/waves/wave-dark.svg')",
      },
    },
  },
  plugins: [],
};
