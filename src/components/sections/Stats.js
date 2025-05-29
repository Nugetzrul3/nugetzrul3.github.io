import { quickStats } from '../../data/portfolio-data';

const Stats = ({ darkMode }) => {
  return (
    <section className="py-12 animate-fadeIn">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {quickStats.map((stat, index) => (
          <div key={index} className={`text-center p-6 rounded-xl transition-all duration-300 ${
            darkMode 
              ? 'bg-gray-800 border border-gray-700 hover:bg-gray-750' 
              : 'bg-white border border-gray-200 hover:shadow-lg'
          }`}>
            <div className={`text-3xl md:text-4xl font-bold mb-2 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {stat.number}
            </div>
            <div className="font-semibold mb-1">
              {stat.label}
            </div>
            <div className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;