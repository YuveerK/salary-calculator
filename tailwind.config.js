/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./index.js",
    "./app/**/*.{js,jsx,ts,tsx}", // Expo Router (if used)
    "./screens/**/*.{js,jsx,ts,tsx}", // Screens
    "./components/**/*.{js,jsx,ts,tsx}", // Components
    "./navigation/**/*.{js,jsx,ts,tsx}", // Navigation files
    "./hooks/**/*.{js,jsx,ts,tsx}", // Custom hooks
    "./utils/**/*.{js,jsx,ts,tsx}", // Utility files
    "./contexts/**/*.{js,jsx,ts,tsx}", // Context providers
    "./providers/**/*.{js,jsx,ts,tsx}", // Auth/theme providers
    "./store/**/*.{js,jsx,ts,tsx}", // Zustand/Redux stores
    "./services/**/*.{js,jsx,ts,tsx}", // API services
    "./assets/**/*.{js,jsx,ts,tsx}", // SVG components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
