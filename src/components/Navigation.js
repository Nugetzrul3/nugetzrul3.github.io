import { navigation } from '../data/portfolio-data';

const Navigation = ({ activeSection, setActiveSection, darkMode }) => {
  return (
    <nav className={`w-full ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } shadow-sm sticky top-0 z-10 border-b transition-colors duration-300`}>
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex justify-center px-4 min-w-max">
          <div className="flex space-x-2 md:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`whitespace-nowrap px-4 py-4 text-sm md:text-base font-medium transition-all duration-300 border-b-2 ${
                  activeSection === item.id
                    ? 'text-blue-600 border-blue-600'
                    : darkMode 
                      ? 'text-gray-400 hover:text-gray-200 border-transparent hover:border-gray-600'
                      : 'text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;