import { Sun, Moon } from 'lucide-react';

const FloatingToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
        darkMode 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-600 focus:ring-yellow-400 shadow-gray-900/30' 
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 focus:ring-blue-500 shadow-gray-500/20'
      }`}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            darkMode ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
          }`} 
        />
      </div>
    </button>
  );
};

export default FloatingToggle;