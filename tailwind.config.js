/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reddit: {
          orange: '#FF4500',
          blue: '#0079D3',
          gray: {
            100: '#F8F9FA',
            200: '#DAE0E6',
            300: '#878A8C',
            400: '#1A1A1B',
          }
        }
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

