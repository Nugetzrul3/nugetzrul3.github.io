import { Github, Linkedin, Mail, Phone, Sun, Moon } from 'lucide-react';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personalInfo } from '../data/portfolio-data';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`w-full ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } shadow-sm border-b transition-colors duration-300`}>
      <div className="w-full px-4 py-6">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode 
                ? 'hover:bg-gray-700 text-yellow-400' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {personalInfo.name}
            </h1>
            <h2 className={`text-lg md:text-xl font-medium ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {personalInfo.title}
            </h2>
          </div>
          <div className="flex gap-4 md:gap-6 items-center mt-4 md:mt-0">
            <SocialLink href={personalInfo.github} aria-label="GitHub">
              <Github className="w-6 h-6" />
            </SocialLink>
            <SocialLink href={personalInfo.linkedin} aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </SocialLink>
            <SocialLink href={personalInfo.resume} aria-label="Resume">
              <FontAwesomeIcon icon={faFilePdf} className="w-6 h-6" />
            </SocialLink>
            <SocialLink href={`mailto:${personalInfo.email}`} aria-label="Email">
              <Mail className="w-6 h-6" />
            </SocialLink>
            <SocialLink href={`tel:${personalInfo.phone}`} aria-label="Phone">
              <Phone className="w-6 h-6" />
            </SocialLink>
          </div>
        </div>
      </div>
    </header>
  );
};

const SocialLink = ({ href, children, 'aria-label': ariaLabel }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="transform hover:scale-110 transition-transform duration-300 hover:text-blue-600"
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

export default Header;