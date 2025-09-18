import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Optimization',
      category: 'fullstack',
      description: 'Rebuilt legacy e-commerce platform with modern React architecture, implementing performance optimizations and scalable infrastructure.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis', 'Docker'],
      metrics: {
        performance: '+65% page load speed',
        conversion: '+38% conversion rate',
        revenue: '+$2.3M annual revenue',
        users: '500K+ active users',
      },
      highlights: [
        'Implemented micro-frontend architecture reducing deployment time by 70%',
        'Integrated AI-powered recommendation engine increasing average order value by 25%',
        'Built real-time inventory management system preventing 95% of overselling incidents',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Financial Dashboard Analytics',
      category: 'frontend',
      description: 'Developed comprehensive financial analytics dashboard for Fortune 500 company, processing millions of transactions in real-time.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Chart.js'],
      metrics: {
        processing: '10M+ transactions/day',
        latency: '<100ms response time',
        accuracy: '99.99% data accuracy',
        savings: '$500K operational costs saved',
      },
      highlights: [
        'Created custom visualization library reducing bundle size by 40%',
        'Implemented WebSocket connections for real-time data updates',
        'Built predictive analytics features using machine learning models',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      category: 'fullstack',
      description: 'Built HIPAA-compliant healthcare management platform serving 50+ clinics with automated appointment scheduling and patient records.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'Django', 'MongoDB', 'Kubernetes'],
      metrics: {
        efficiency: '45% reduction in admin time',
        satisfaction: '92% patient satisfaction',
        compliance: '100% HIPAA compliant',
        scale: '50+ clinics integrated',
      },
      highlights: [
        'Designed secure API handling sensitive medical data',
        'Implemented automated appointment reminders reducing no-shows by 30%',
        'Built telemedicine features supporting 1000+ virtual consultations daily',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'AI-Powered Content Platform',
      category: 'ai',
      description: 'Developed content generation platform using GPT models, serving creators with automated content optimization and SEO enhancement.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Vercel'],
      metrics: {
        content: '1M+ pieces generated',
        time: '80% time saved',
        seo: '+150% organic traffic',
        users: '10K+ active creators',
      },
      highlights: [
        'Integrated multiple AI models for content generation and optimization',
        'Built custom fine-tuning pipeline improving content quality by 60%',
        'Implemented usage-based billing system processing $100K+ monthly',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Real-Time Collaboration Tool',
      category: 'fullstack',
      description: 'Created Figma-like collaborative design tool with real-time synchronization, supporting teams across multiple time zones.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Redis', 'Canvas API'],
      metrics: {
        concurrent: '1000+ concurrent users',
        latency: '<50ms sync latency',
        uptime: '99.9% uptime SLA',
        teams: '200+ enterprise teams',
      },
      highlights: [
        'Implemented CRDT algorithm for conflict-free collaborative editing',
        'Built custom WebRTC infrastructure reducing hosting costs by 60%',
        'Created plugin system with 50+ third-party integrations',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'DevOps Monitoring Platform',
      category: 'backend',
      description: 'Built comprehensive monitoring solution for cloud infrastructure, providing real-time insights and automated incident response.',
      image: '/api/placeholder/600/400',
      technologies: ['Go', 'Prometheus', 'Grafana', 'Kubernetes', 'Terraform'],
      metrics: {
        monitoring: '10K+ services monitored',
        incidents: '75% fewer incidents',
        response: '90% faster resolution',
        cost: '40% infrastructure cost reduction',
      },
      highlights: [
        'Developed custom metrics collection reducing overhead by 50%',
        'Implemented predictive alerting preventing 80% of potential outages',
        'Built auto-scaling policies optimizing resource utilization',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-dark-bg" ref={ref}>
      <div className="max-width-container section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing impactful solutions that drive business growth and user satisfaction.
            Each project demonstrates measurable results and technical excellence.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg
                       hover:shadow-2xl transition-all duration-300 cursor-pointer card-hover"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20">💼</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0
                              group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-sm">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {value}
                      </span>
                      <p className="text-gray-500 dark:text-gray-500 capitalize text-xs">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
                               text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            flex items-center justify-center">
                <span className="text-white font-medium">View Details →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20
                              rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-8xl opacity-20">💼</span>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20
                                 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
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

export default Projects;