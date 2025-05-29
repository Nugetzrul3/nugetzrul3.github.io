import { skills } from '../../data/portfolio-data';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    { 
      title: 'Programming Languages', 
      items: skills.languages, 
      color: 'blue',
      icon: '💻'
    },
    { 
      title: 'Frameworks & Libraries', 
      items: skills.frameworks, 
      color: 'green',
      icon: '🚀'
    },
    { 
      title: 'Architecture Patterns', 
      items: skills.architectures, 
      color: 'purple',
      icon: '🏗️'
    }
  ];

  const additionalSkills = ['SQLModel', 'Sequelize', 'Docker', 'Git/GitHub', 'CI/CD', 'REST APIs', 'Database Design', 'Agile/Scrum', 'BurpSuite', 'Firebase', 'AWS EC2', 'GitHub Actions'];

  const getColorClasses = (color) => {
    const colors = {
      blue: darkMode ? 'bg-blue-900/30 text-blue-300 border-blue-700' : 'bg-blue-50 text-blue-700 border-blue-200',
      green: darkMode ? 'bg-green-900/30 text-green-300 border-green-700' : 'bg-green-50 text-green-700 border-green-200',
      purple: darkMode ? 'bg-purple-900/30 text-purple-300 border-purple-700' : 'bg-purple-50 text-purple-700 border-purple-200',
      orange: darkMode ? 'bg-orange-900/30 text-orange-300 border-orange-700' : 'bg-orange-50 text-orange-700 border-orange-200'
    };
    return colors[color];
  };

  return (
    <section className="space-y-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
      
      {/* Main Skill Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className={`${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } shadow-lg rounded-xl p-6 border transition-all duration-300 hover:shadow-xl`}>
            <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
              <span className="text-2xl mr-3">{category.icon}</span>
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.items.map((skill) => (
                <div 
                  key={skill} 
                  className={`py-2 rounded-lg border text-center font-small transition-all duration-300 hover:shadow-sm ${
                    getColorClasses(category.color)
                  }`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <div className={`${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } shadow-lg rounded-xl p-8 border transition-all duration-300`}>
        <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
          <span className="text-2xl mr-3">🛠️</span>
          Tools & Technologies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {additionalSkills.map((skill) => (
            <div 
              key={skill} 
              className={`px-4 py-3 rounded-lg border text-center font-medium transition-all duration-300 hover:shadow-sm ${
                getColorClasses('orange')
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;