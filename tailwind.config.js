/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arapey: ['var(--font-arapey)'],
        assistant: ['var(--font-assistant)'],
      },
      colors : {
        primary : '#15203C',
        secondary: '#E3CAAB',
        gray: '#D9D9D9',
        darkGray: '#525661',
      }
    },
  },
  plugins: [],
};
