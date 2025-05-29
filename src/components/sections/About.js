import { personalInfo, education, certifications, interests } from '../../data/portfolio-data';

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

          <div className="lg:w-1/3 flex justify-center items-start">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;