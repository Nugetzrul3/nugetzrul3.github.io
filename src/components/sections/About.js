import { personalInfo, education, certifications, interests, currentProjects } from '../../data/portfolio-data';

const About = ({ darkMode }) => {
  return (
    <section className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className={`${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } shadow-lg rounded-xl p-8 border transition-all duration-300`}>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-8">
            <div>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {personalInfo.bio}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <div key={index} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <div>
                      <div className="font-medium">{edu.institution}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {edu.degree}
                      </div>
                    </div>
                    <span className={`text-sm font-medium mt-2 sm:mt-0 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-6 bg-green-600 rounded-full mr-3"></span>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`font-medium hover:underline ${
                        darkMode ? 'text-green-400' : 'text-green-600'
                      }`}
                    >
                      {cert.name} →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-6 bg-purple-600 rounded-full mr-3"></span>
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 space-y-6 flex flex-col items-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Currently Working On Section */}
            <div className="w-full max-w-80">
              <h3 className="text-lg font-semibold mb-3 flex items-center justify-center">
                <span className="w-2 h-5 bg-orange-500 rounded-full mr-2"></span>
                Currently Working On
              </h3>
              <div className="space-y-3">
                {currentProjects.map((project, index) => {
                  const isMultiRepo = Array.isArray(project.githubUrls);

                  return (
                    <div
                      key={index}
                      onClick={
                        !isMultiRepo
                          ? () => window.open(project.githubUrls, "_blank")
                          : undefined
                      }
                      className={`w-full p-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-md ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600 border border-gray-600"
                          : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                      } ${!isMultiRepo ? "cursor-pointer" : ""}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4
                          className={`font-medium text-sm ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {project.title}
                        </h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode
                              ? "bg-orange-900 text-orange-300"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p
                        className={`text-xs leading-relaxed ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Conditional GitHub links */}
                      {isMultiRepo ? (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.githubUrls.map((repo, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation(); // prevent parent click
                                window.open(repo.url, "_blank");
                              }}
                              className={`text-xs px-2 py-1 rounded-md border transition-colors ${
                                darkMode
                                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-600"
                                  : "bg-white hover:bg-gray-100 text-gray-600 border-gray-300"
                              }`}
                            >
                              {repo.label}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-end mt-2">
                          <span
                            className={`text-xs ${
                              darkMode ? "text-gray-500" : "text-gray-400"
                            }`}
                          >
                            View on GitHub →
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;