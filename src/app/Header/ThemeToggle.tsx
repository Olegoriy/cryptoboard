import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none"
      aria-label="Переключить тему"
      title="Переключить тему"
    >
      <span className={`transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}>
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow">
          {darkMode ? '🌙' : '🌞'}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;