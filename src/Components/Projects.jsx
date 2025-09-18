import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Nylas API Tool',
      description: 'A comprehensive tool for testing and integrating Nylas APIs. Built to help developers understand and implement Nylas features efficiently.',
      tech: ['React', 'Node.js', 'Nylas API', 'Material-UI'],
      liveUrl: 'https://nylas-api-tool.netlify.app/',
      image: '🔧'
    },
    {
      id: 2,
      title: 'Project Management App',
      description: 'Full-stack project management solution with real-time updates, task tracking, and team collaboration features.',
      tech: ['React', 'Redux', 'Express', 'MongoDB'],
      liveUrl: 'https://track-your-project.netlify.app/',
      image: '📊'
    },
    {
      id: 3,
      title: '3D Carousel',
      description: 'Interactive 3D image carousel with smooth animations and touch support. Pure CSS and JavaScript implementation.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Animation'],
      liveUrl: 'https://html-image-carousel.netlify.app/',
      image: '🎠'
    },
    {
      id: 4,
      title: 'Movie Search App',
      description: 'React application for searching and discovering movies using external APIs. Features include filtering, sorting, and detailed movie information.',
      tech: ['React', 'API Integration', 'CSS', 'Responsive Design'],
      liveUrl: 'https://movie-search-app.netlify.app/',
      image: '🎬'
    },
    {
      id: 5,
      title: 'Quiz App',
      description: 'TypeScript-based quiz application with dynamic question generation, score tracking, and progress visualization.',
      tech: ['TypeScript', 'React', 'State Management', 'CSS'],
      liveUrl: 'https://ts-quiz.netlify.app/',
      image: '🎯'
    },
    {
      id: 6,
      title: 'HTML Portfolio',
      description: 'My first portfolio built with vanilla HTML/CSS. A milestone in my web development journey.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      liveUrl: 'https://my-html-portfolio.netlify.app/',
      image: '🌐'
    }
  ];

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            A selection of projects I've built over the years. Each one represents a learning journey
            and a step forward in my development career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-[var(--color-bg-secondary)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300"
            >
              {/* Project Image/Emoji */}
              <div className="h-48 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <span className="text-6xl">{project.image}</span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline"
                  whileHover={{ x: 5 }}
                >
                  View Live
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-[var(--color-accent)]/10 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;