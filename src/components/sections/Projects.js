import { projects } from '../../data/portfolio-data';

const Projects = ({ darkMode }) => {
  return (
    <section className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } shadow-lg rounded-xl p-6 border transition-all duration-300 hover:shadow-xl`}>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.category}
                </span>
              </div>
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`px-2 py-1 rounded text-xs ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {project.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;