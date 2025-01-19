import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Sun, Moon } from 'lucide-react';
import './index.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  
  // Initialize dark mode from localStorage  
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    // Convert the string 'true'/'false' to actual boolean
    const isDarkMode = savedMode === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      const timer = setTimeout(() => {
        setFormStatus('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  // Update localStorage when dark mode changes
  useEffect(() => {
    // Store the boolean as a string
    localStorage.setItem('darkMode', String(darkMode));
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navigation = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      setFormStatus('sending');
      const response = await fetch('https://formspree.io/f/xdkkrldw', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className={`min-h-screen w-screen overflow-x-hidden transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`w-full ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-sm transition-colors duration-300`}>
        <div className="w-full px-4 py-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between md:items-center">
            <h1 className="text-xl md:text-3xl font-bold transform hover:scale-105 transition-transform duration-300 mb-4 md:mb-0">
              Muhammad Salmaan Nagoormira
            </h1>
            <div className="flex gap-4 md:gap-6 items-center">
              <a href="https://github.com/Nugetzrul3"
                className="transform hover:scale-110 transition-transform duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/salmaan-nagoormira"
                className="transform hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:salmaan_kmn@hotmail.com"
                className="transform hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:0415442975"
                className="transform hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`w-full ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-sm sticky top-0 z-10 transition-colors duration-300 overflow-x-auto`}>
        <div className="w-full px-4">
          <div className="flex space-x-4 md:space-x-8 min-w-max">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-2 md:px-3 py-4 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : darkMode 
                      ? 'text-gray-400 hover:text-gray-200'
                      : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full px-4 py-8">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold">About Me</h2>
            <div className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Junior Software Engineer with experience in full-stack development, blockchain technology,
                    and mobile app development. Bachelor of Computer Science graduate from RMIT University with a 3.2 GPA. 
                    Passionate about creating innovative solutions and contributing to open-source projects.
                  </p>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold">Education</h3>
                    <ul className="mt-2 space-y-2">
                      <li className={`flex justify-between items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>RMIT, Melbourne — Bachelor of Computer Science</span>
                        <span className="ml-4">2022-2024</span>
                      </li>
                      <li className={`flex justify-between items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Werribee Secondary College, Victoria — VCE (81.75 ATAR)</span>
                        <span className="ml-4">2021</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold">Certifications</h3>
                    <ul className="mt-2 space-y-2">
                      <li className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        <a href='https://www.credly.com/badges/7cf7b04e-a2a6-4e65-aef1-1b65710d65af/linked_in_profile'>AWS Cloud Foundations</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold">Interests</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Photography', 'Cars', 'PC Building', 'PC Gaming', 'Lego', 'Gym', 'Drawing', "Rubik's Cube"].map((interest) => (
                        <span
                          key={interest}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 flex justify-center items-start">
                  <div className="w-96 h-96 rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src="/me.png"
                      alt="Muhammad Salmaan Nagoormira"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
                <h3 className="font-semibold mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'PonyORM', 'SQLModel', 'SpringBoot', 'Flask', 'AWS Cloud Services', 'Bootstrap', 'ReactJS', 'NodeJS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transform hover:scale-110 transition-transform duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
                <h3 className="font-semibold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'JavaScript', 'HTML/CSS', 'C++', 'SQL', 'Kotlin'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm transform hover:scale-110 transition-transform duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Web Browser Extensions</h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Developed web browser extensions using JavaScript and HTML/CSS to mobilize standard desktop wallet.
                  Open-source project with 7 stars, 10 forks, and 500+ active users.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>500+ active users</span>
                </div>
              </div>
              
              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Android Cryptocurrency Miner</h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Developed Android app with Kotlin and C++ for mobile cryptocurrency mining.
                  Open-source project with 4 stars, 5 forks, and 200+ downloads.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>4.5-star rating on Google Play</span>
                </div>
              </div>

              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Price Comparison Webstore</h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Built a price comparison website using Agile methodology with a team of 6 students.
                  Implemented MySQL database and deployed using Docker on AWS cloud.
                </p>
              </div>

              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Minecraft MITM Attack Prevention</h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Secured Minecraft server communication using CCA-secure protocol, implementing RSA encryption
                  and SHA256-HMAC authentication.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold">Professional Experience</h2>
            <div className="space-y-6">
              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Junior Software Engineer</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Freight Cyber Melbourne, AU — Nov 2024 - Present
                </p>
              </div>

              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Junior Python Developer</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  CodePillow Seoul, South Korea — Dec 2021 - Feb 2023
                </p>
                <ul className={`mt-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Built backend for NFT game using FastAPI and SQLModel, gaining 580 active users</li>
                  <li>• Developed blockchain explorer with database support, achieving 1000+ daily views</li>
                </ul>
              </div>

              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Freelancer</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Upwork Australia — Aug 2021 - Sep 2021
                </p>
                <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Developed Telegram bot for spam prevention using Telegram JS API and SQLite database.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Contact Form Section */}
        {activeSection === 'contact' && (
          <section className="space-y-6 animate-fadeIn">
            <div className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow rounded-lg p-6 max-w-xl mx-auto`}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full py-2 px-4 rounded-lg ${
                    formStatus === 'sending'
                      ? 'bg-gray-400'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white font-medium transition-colors duration-300`}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

// Add some global styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default Portfolio;
