module.exports = {
  darkMode: 'class', // Используем class-based темную тему
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Добавьте свои кастомные цвета для обеих тем
        primary: {
          light: '#2563eb',
          dark: '#3b82f6'
        }
      }
    },
  },
  plugins: [],
}