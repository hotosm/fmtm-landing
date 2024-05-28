/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        saasstartertheme: {
          primary: "#d63f3f", // hot-red
          "primary-content": "#ffffff", // hot-white
          secondary: "#4f5765", // hot-gray-700
          "secondary-content": "#ffffff", // hot-white
          neutral: "#2c3038", // hot-gray-900
          "neutral-content": "#ffffff", // hot-white
          accent: "#7c2e26", // hot-darkred-700
          "accent-content": "#ffffff", // hot-white
          "base-content": "#2c3038", // hot-black
          "base-100": "#fefbf6", // very light background
          "base-200": "#eeeef0", // light gray background
          success: "#57c1bd", // hot-green-300
          error: "#7c2e26", // hot-darkred-700
        },
      },
    ],
  },
}
