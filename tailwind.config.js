// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E5AB5',
        'dark-blue': '#143D75',
        'accent-purple': '#7D4EFA',
        'soft-blue': '#A3C6F7',
        'light-gray': '#F5F5F5',
        'dark-gray': '#2C2C2C',
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}