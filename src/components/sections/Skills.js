import { skills, skillsWithProficiency } from '../../data/portfolio-data';

const Skills = ({ darkMode }) => {
  return (
    <section className="space-y-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
      
      {/* Skills with Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className={`${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } shadow-lg rounded-xl p-6 border transition-all duration-300`}>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
            Programming Languages
          </h3>
          <div className="space-y-4">
            {skillsWithProficiency.languages.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full rounded-full h-2 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } shadow-lg rounded-xl p-6 border transition-all duration-300`}>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="w-2 h-6 bg-green-600 rounded-full mr-3"></span>
            Frameworks & Tools
          </h3>
          <div className="space-y-4">
            {skillsWithProficiency.frameworks.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full rounded-full h-2 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className={`${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } shadow-lg rounded-xl p-6 border transition-all duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1`}>
          <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center">
            <span className="w-2 h-6 bg-purple-600 rounded-full mr-3"></span>
            Architectures
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.architectures.map((arch) => (
              <span 
                key={arch} 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default ${
                  darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                }`}
              >
                {arch}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className={`md:col-span-2 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } shadow-lg rounded-xl p-6 border transition-all duration-300`}>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="w-2 h-6 bg-orange-600 rounded-full mr-3"></span>
            Additional Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['SQLModel', 'Sequelize', 'Docker', 'Git/GitHub', 'CI/CD', 'REST APIs', 'Database Design', 'Agile/Scrum', 'BurpSuite'].map((tech) => (
              <span 
                key={tech} 
                className={`px-3 py-2 rounded-lg text-sm font-medium text-center transition-all duration-300 cursor-default ${
                  darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;