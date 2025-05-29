import { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Navigation from './components/Navigation';
import FloatingToggle from './components/FloatingToggle';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import './styles/globals.css';
import './index.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useDarkMode();

  const renderActiveSection = () => {
    const sectionProps = { darkMode };
    
    switch (activeSection) {
      case 'about':
        return (
          <>
            <About {...sectionProps} />
            <Stats {...sectionProps} />
          </>
        );
      case 'skills':
        return <Skills {...sectionProps} />;
      case 'projects':
        return <Projects {...sectionProps} />;
      case 'experience':
        return <Experience {...sectionProps} />;
      case 'contact':
        return <Contact {...sectionProps} />;
      default:
        return (
          <>
            <About {...sectionProps} />
            <Stats {...sectionProps} />
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen w-full overflow-x-hidden flex flex-col transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Header darkMode={darkMode} />
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        darkMode={darkMode} 
      />
      <main className="flex-1 w-full px-4 py-12 max-w-7xl mx-auto">
        {renderActiveSection()}
      </main>
      <Footer darkMode={darkMode} />
      
      {/* Floating Dark Mode Toggle */}
      <FloatingToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
    </div>
  );
};

export default App;