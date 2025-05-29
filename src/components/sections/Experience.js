import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { experiences } from '../../data/portfolio-data';

const Experience = ({ darkMode }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section className="space-y-8 animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Click each position to learn more
        </p>
      </div>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            } shadow-lg rounded-xl p-6 border transition-all duration-300 hover:shadow-xl cursor-pointer`}
            onClick={() => toggleSection(index)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                <p className={`font-medium mb-1 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                  {experience.company}
                </p>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {experience.location} • {experience.date}
                </p>
              </div>
              <div className={`ml-4 p-1 rounded-full transition-transform duration-300 ${
                openSection === index ? 'rotate-180' : ''
              }`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
            
            {openSection === index && (
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <ul className={`space-y-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {experience.details.map((detail, i) => (
                    <li key={i} className="flex items-start leading-relaxed">
                      <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;