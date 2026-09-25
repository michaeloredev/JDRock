/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forest green from the mountain logo (#005524 = brand-700)
        brand: {
          50: "#ecf7f0",
          100: "#d1ecdb",
          200: "#a6d8b9",
          300: "#6fbd91",
          400: "#3f9d6a",
          500: "#1f7f4d",
          600: "#11683c",
          700: "#005524",
          800: "#03441e",
          900: "#04371a",
          950: "#021f0f",
        },
        // Warm cedar/amber for calls to action; use with dark text
        accent: {
          DEFAULT: "#eaa63f",
          hover: "#d8922a",
          ink: "#1c1917",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        heading: ["arvo", "Georgia", "serif"],
        display: ["matrix-ii-display-inline-ext", "arvo", "serif"],
      },
    },
  },
  plugins: [],
};
