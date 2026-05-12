/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ming-blue': '#3A5A8C',
        'ming-red': '#C23E3E',
        'ming-gold': '#C8963E',
        'ming-jade': '#7BA07E',
        'ming-ink': '#2C2C2C',
        'ming-paper': '#F5EDE0',
        'ming-darkwood': '#4A3728',
        'ming-sepia': '#8B7355',
        'ming-cream': '#FDF8F0',
        'ming-vermillion': '#D4534A',
        'ming-celadon': '#A8C8B0',
      },
      fontFamily: {
        ming: ['"Noto Serif SC"', '"Source Han Serif SC"', '"Ma Shan Zheng"', 'STSong', 'SimSun', 'serif'],
      },
    },
  },
  plugins: [],
}
