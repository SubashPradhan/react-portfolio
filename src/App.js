import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ModernNavbar from './Components/Navbar/ModernNavbar';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import LoadingSpinner from './Components/Common/LoadingSpinner';

// Lazy load components for better performance
const About = lazy(() => import('./Components/About/ModernAbout'));
const Skills = lazy(() => import('./Components/Skills/ModernSkills'));
const Contact = lazy(() => import('./Components/Contact/ModernContact'));
const Footer = lazy(() => import('./Components/Footer/ModernFooter'));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
        <ModernNavbar />
        <main>
          <Hero />
          <Suspense fallback={<LoadingSpinner />}>
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
