const Footer = ({ darkMode }) => {
  return (
    <footer className={`w-full py-8 mt-16 ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border-t transition-colors duration-300`}>
      <div className="text-center px-4">
        <p className={`${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Made with ❤️ by{' '}
          <a 
            href="https://github.com/Nugetzrul3/nugetzrul3.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium hover:underline ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            Nugetzrul3
          </a>
        </p>
        <div className={`mt-2 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          © {new Date().getFullYear()} Muhammad Salmaan Nagoormira. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;