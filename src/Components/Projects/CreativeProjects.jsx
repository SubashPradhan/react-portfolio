import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CreativeProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Nylas API Tool',
      category: 'api',
      description: 'A comprehensive tool for testing and integrating Nylas APIs. Built to help developers understand and implement Nylas features efficiently.',
      fullDescription: 'This tool provides developers with a complete testing environment for Nylas email, calendar, and contacts APIs. Features include authentication testing, webhook simulation, and comprehensive API documentation.',
      tech: ['React', 'Node.js', 'Nylas API', 'Material-UI'],
      liveUrl: 'https://nylas-api-tool.netlify.app/',
      gradient: 'from-purple-600 via-blue-600 to-cyan-500',
      icon: '🔧'
    },
    {
      id: 2,
      title: 'Project Management App',
      category: 'fullstack',
      description: 'Full-stack project management solution with real-time updates, task tracking, and team collaboration features.',
      fullDescription: 'A comprehensive project management platform featuring real-time collaboration, advanced task tracking, time management, and detailed analytics. Built for teams who need powerful project oversight.',
      tech: ['React', 'Redux', 'Express', 'MongoDB'],
      liveUrl: 'https://track-your-project.netlify.app/',
      gradient: 'from-green-500 via-teal-500 to-blue-500',
      icon: '📊'
    },
    {
      id: 3,
      title: '3D Carousel',
      category: 'frontend',
      description: 'Interactive 3D image carousel with smooth animations and touch support. Pure CSS and JavaScript implementation.',
      fullDescription: 'An impressive 3D carousel component showcasing advanced CSS3 transforms and JavaScript animations. Features touch/swipe support, auto-rotation, and customizable styling options.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Animation'],
      liveUrl: 'https://html-image-carousel.netlify.app/',
      gradient: 'from-pink-500 via-red-500 to-orange-500',
      icon: '🎠'
    },
    {
      id: 4,
      title: 'Movie Search App',
      category: 'frontend',
      description: 'React application for searching and discovering movies using external APIs. Features filtering, sorting, and detailed information.',
      fullDescription: 'A sleek movie discovery platform with advanced search capabilities, detailed movie information, ratings, reviews, and personalized recommendations using external movie databases.',
      tech: ['React', 'API Integration', 'CSS', 'Responsive Design'],
      liveUrl: 'https://movie-search-app.netlify.app/',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      icon: '🎬'
    },
    {
      id: 5,
      title: 'Quiz App',
      category: 'frontend',
      description: 'TypeScript-based quiz application with dynamic question generation, score tracking, and progress visualization.',
      fullDescription: 'An interactive quiz platform built with TypeScript featuring dynamic question generation, real-time scoring, progress tracking, and detailed performance analytics.',
      tech: ['TypeScript', 'React', 'State Management', 'CSS'],
      liveUrl: 'https://ts-quiz.netlify.app/',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      icon: '🎯'
    },
    {
      id: 6,
      title: 'HTML Portfolio',
      category: 'frontend',
      description: 'My first portfolio built with vanilla HTML/CSS. A milestone in my web development journey.',
      fullDescription: 'My inaugural portfolio website showcasing early web development skills. Built entirely with vanilla HTML, CSS, and JavaScript, representing the foundation of my coding journey.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      liveUrl: 'https://my-html-portfolio.netlify.app/',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      icon: '🌐'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'api', label: 'API Tools', count: projects.filter(p => p.category === 'api').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 overflow-hidden" style={{ background: 'var(--color-bg)' }} ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'linear-gradient(to left, var(--color-accent)/0.1, transparent)' }} />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'linear-gradient(to right, #8b5cf6/0.1, transparent)' }} />
      </div>

      <div className="container-width relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, var(--color-accent), #06b6d4)' }} />
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            A collection of projects that showcase my journey from HTML basics to complex API integrations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300`}
              style={{
                color: selectedCategory === category.id ? 'white' : 'var(--color-text-secondary)'
              }}
            >
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(to right, var(--color-accent), #06b6d4)' }}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />

                {/* Card */}
                <div className="relative backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300" style={{ background: 'var(--color-card-bg)', border: '1px solid var(--color-card-border)' }}>
                  {/* Project icon header */}
                  <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-6xl filter drop-shadow-lg">{project.icon}</div>
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>{project.title}</h3>
                    <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.description}
                    </p>

                    {/* Tech stack - Show all skills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ background: 'var(--color-accent)/0.2', color: 'var(--color-accent)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center py-2 text-white text-sm font-medium rounded-lg transition-all duration-300"
                        style={{ background: 'linear-gradient(to right, var(--color-accent), #06b6d4)' }}
                        onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, var(--color-accent-hover), #0891b2)'}
                        onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, var(--color-accent), #06b6d4)'}
                      >
                        Live Demo
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                        style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{ background: 'var(--color-card-bg)', border: '1px solid var(--color-card-border)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`h-48 bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center relative`}>
                <div className="text-8xl filter drop-shadow-lg">{selectedProject.icon}</div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>{selectedProject.title}</h3>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {selectedProject.fullDescription}
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-text)' }}>Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg"
                        style={{
                          background: 'linear-gradient(to right, var(--color-accent)/0.2, #06b6d4/0.2)',
                          border: '1px solid var(--color-accent)/0.3',
                          color: 'var(--color-accent)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 text-white font-medium rounded-lg transition-all duration-300"
                    style={{ background: 'linear-gradient(to right, var(--color-accent), #06b6d4)' }}
                    onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, var(--color-accent-hover), #0891b2)'}
                    onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, var(--color-accent), #06b6d4)'}
                  >
                    Visit Live Site
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CreativeProjects;