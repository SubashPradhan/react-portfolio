import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import CreativeAbout from './Components/About/CreativeAbout.jsx';
import CreativeProjects from './Components/Projects/CreativeProjects.jsx';
import CreativeSkills from './Components/Skills/CreativeSkills.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import './styles/globals.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <CreativeAbout />
      <CreativeProjects />
      <CreativeSkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;