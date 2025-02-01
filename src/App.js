import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Sun, Moon, FileText } from 'lucide-react';
import './index.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
  
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

  const skills = ['FastAPI', 'PonyORM', 'SQLModel', 'SpringBoot', 'Flask', 'AWS Cloud Services', 'Bootstrap', 'ReactJS', 'NodeJS'];
  const languages = ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'C++', 'SQL', 'Kotlin'];
  const interests = ['Photography', 'Cars', 'PC Building', 'PC Gaming', 'Lego', 'Gym', 'Drawing', "Rubik's Cube"];
  const architectures = ['MVVM', 'MVC', 'MERN', 'Microservices'];

  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Freight Cyber (Melbourne, Australia)",
      date: "Nov 2024 - Present",
      details: [
        "Integrated and tested APIs for the FCX Drive mobile application using NodeJS, Sequelize, and Express, allowing for seamless and fast communication between the application and the backend server.",
        "Deployed REST API server to AWS EC2 instance using GitHub CI/CD workflows and AWS Secret Manager, ensuring that deployments are smooth and seamless while securely storing and retrieving API keys.",
        "Integrated APIs and developed new, responsive, and user-friendly pages for the FCX Drive application using Kotlin and the MVVM architecture.",
        "Worked with the client using the Agile methodology, ensuring that app requirements were met through daily standups and team coordination.",
      ],
    },
    {
      title: "Junior Python Developer",
      company: "CodePillow (Seoul, South Korea)",
      date: "Dec 2021 - Feb 2023",
      details: [
        "Built backend for an NFT game based in South Korea using FastAPI and SQLModel.",
        "Gained 580 active users, with over 1 million games played and 9 thousand NFTs issued.",
        "Connected a local node to a backend with database support for blockchain exploration, built with FastAPI and SQLModel.",
        "Gained over 1000+ views and had more than 100 active users per day.",
      ],
    },
    {
      title: "Freelancer",
      company: "Upwork Australia (Melbourne, Australia)",
      date: "Aug 2021 - Sep 2021",
      details: [
        "Built a Telegram bot to prevent spam in a channel using Telegram JS API and SQLite database, preventing over 100 spammers from advertising malicious links.",
        "Kept constant communication with the channel owner to ensure that the requirements were met.",
      ],
    },
    {
      title: "Freelancer",
      company: "Centralex Exchange (Hong Kong, China)",
      date: "Nov 2020",
      details: [
        "Built a verification bot for a Discord server to prevent spam using Discord.py and SQLite database. Blocked 300+ bot accounts from flooding the server.",
        "Kept constant communication with the server owner to ensure that the requirements were met.",
      ],
    },
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden flex flex-col transition-colors duration-300 ${
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
            <h1 className="text-xl md:text-3xl font-bold transform hover:scale-102 transition-transform duration-300 mb-4 md:mb-0">
              Muhammad Salmaan Nagoormira
              <h3 className='text-xl md:text-m text-gray-400'>
              Software Engineer
              </h3>
            </h1>
            <div className="flex gap-4 md:gap-6 items-center">
              <a href="https://github.com/Nugetzrul3" target="_blank" rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/salmaan-nagoormira" target="_blank" rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6" />
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
        <div className="w-full px-4 flex justify-center"> {/* Added flex justify-center here */}
          <div className="flex space-x-4 md:space-x-8 min-w-max">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-2 md:px-3 py-4 text-m font-medium transition-colors duration-300 ${
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
            <h2 className="text-2xl font-bold text-center">About Me</h2>
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
                      AWS Cloud Foundations — <a className='certLink' target='_blank' rel='noreferrer' href='https://www.credly.com/badges/7cf7b04e-a2a6-4e65-aef1-1b65710d65af/linked_in_profile'>View Certificate</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold">Interests</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {interests.map((interest) => (
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
          <h2 className="text-2xl font-bold text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Frameworks Section */}
            <div className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
              <h3 className="font-semibold mb-4 text-center">Frameworks</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transform hover:scale-110 transition-transform duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        
            {/* Architectures Section */}
            <div className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
              <h3 className="font-semibold mb-4 text-center">Architectures</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {architectures.map((arch) => (
                  <span key={arch} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm transform hover:scale-110 transition-transform duration-300">
                    {arch}
                  </span>
                ))}
              </div>
            </div>
        
            {/* Programming Languages Section */}
            <div className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
              <h3 className="font-semibold mb-4 text-center">Programming Languages</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {languages.map((skill) => (
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
            <h2 className="text-2xl font-bold text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Web Browser Extensions</h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Developed web browser extensions using JavaScript and HTML/CSS to mobilize standard desktop wallet.
                  Open-source project with 7 stars, 10 forks, and 500+ active users.
                </p>
              </div>
              
              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Android Cryptocurrency Miner</h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Developed Android app with Kotlin and C++ for mobile cryptocurrency mining.
                  Open-source project with 4 stars, 5 forks, and 200+ downloads and 4.5 star rating
                  on Google play.
                </p>
              </div>

              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Price Comparison Webstore</h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Built a price comparison website using Agile methodology with a team of 6 students.
                  Created user stories, SRS, ERD, and designed and implemented MySQL database for the website backend,
                  deploying the web app on AWS Beanstalk using Docker.
                </p>
              </div>

              <div className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300`}>
                <h3 className="text-lg font-semibold">Minecraft MITM Attack Prevention</h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Secured Minecraft server communication using CCA-secure protocol to prevent packet sniffing, 
                  implementing RSA encryption and SHA256-HMAC authentication. Successfully demonstrated
                  this defense by utlising BurpSuite and WireShark to show encrypted packets.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="space-y-6 animate-fadeIn">
          <h2 className="text-2xl font-bold text-center">Professional Experience</h2>
          <h4 className="text-s italic text-center">Click each to learn more</h4>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } experienceSect shadow rounded-lg p-6 transform hover:scale-102 transition-all duration-300 cursor-pointer`}
                onClick={() => toggleSection(index)}
              >
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {experience.company} — {experience.date}
                </p>
                {openSection === index && (
                  <ul className={`mt-4 space-y-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {experience.details.map((detail, i) => (
                      <li key={i}>• {detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
        )}

        {/* Contact Form Section */}
        {activeSection === 'contact' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-center">Get In Touch</h2>
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
      <footer className={`w-full py-4 mt-auto ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } border-t ${
        darkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="text-center">
          <p className={`${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>Made with ❤️ by Nugetzrul3</p>
        </div>
      </footer>
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
