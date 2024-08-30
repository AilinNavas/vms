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
        nunito: ['var(--font-nunito)']
      },
      colors : {
        primary : '#15203C',
        secondary: '#E3CAAB',
        gray: '#D9D9D9',
        darkGray: '#525661',
      },
      scale: {
        '102': '1.02',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
