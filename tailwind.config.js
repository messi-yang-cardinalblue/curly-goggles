/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.08em',
      },
      fontFamily: {
        silkscreen: ['Silkscreen', 'cursive'],
        ['space-grotesk']: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
