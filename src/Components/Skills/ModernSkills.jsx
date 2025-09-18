import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ModernSkills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 95, years: 6 },
        { name: 'TypeScript', level: 90, years: 4 },
        { name: 'Next.js', level: 88, years: 3 },
        { name: 'Vue.js', level: 75, years: 2 },
        { name: 'Tailwind CSS', level: 92, years: 3 },
        { name: 'Redux', level: 85, years: 5 },
        { name: 'GraphQL', level: 80, years: 3 },
        { name: 'Webpack', level: 78, years: 4 },
      ],
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 92, years: 5 },
        { name: 'Python', level: 88, years: 4 },
        { name: 'PostgreSQL', level: 85, years: 5 },
        { name: 'MongoDB', level: 82, years: 4 },
        { name: 'Redis', level: 78, years: 3 },
        { name: 'Docker', level: 85, years: 4 },
        { name: 'AWS', level: 80, years: 3 },
        { name: 'REST APIs', level: 95, years: 6 },
      ],
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95, years: 7 },
        { name: 'CI/CD', level: 85, years: 4 },
        { name: 'Kubernetes', level: 75, years: 2 },
        { name: 'Jenkins', level: 80, years: 3 },
        { name: 'Terraform', level: 70, years: 2 },
        { name: 'Prometheus', level: 72, years: 2 },
        { name: 'Grafana', level: 75, years: 2 },
        { name: 'Elasticsearch', level: 78, years: 3 },
      ],
    },
    soft: {
      title: 'Soft Skills',
      icon: '🤝',
      skills: [
        { name: 'Problem Solving', level: 95, years: 8 },
        { name: 'Team Leadership', level: 90, years: 5 },
        { name: 'Communication', level: 92, years: 8 },
        { name: 'Project Management', level: 85, years: 4 },
        { name: 'Mentoring', level: 88, years: 4 },
        { name: 'Client Relations', level: 87, years: 5 },
        { name: 'Technical Writing', level: 82, years: 6 },
        { name: 'Agile/Scrum', level: 90, years: 6 },
      ],
    },
  };

  const certifications = [
    { name: 'AWS Solutions Architect', issuer: 'Amazon', year: '2022' },
    { name: 'Google Cloud Professional', issuer: 'Google', year: '2021' },
    { name: 'Certified Kubernetes Admin', issuer: 'CNCF', year: '2021' },
    { name: 'React Advanced Patterns', issuer: 'Epic React', year: '2020' },
  ];

  const currentCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg" ref={ref}>
      <div className="max-width-container section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuously learning and mastering new technologies to deliver cutting-edge solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                        ${activeCategory === key
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                          : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:shadow-md'
                        }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {currentCategory.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.years} years experience
                  </p>
                </div>
                <span className="text-lg font-bold gradient-text">
                  {skill.level}%
                </span>
              </div>
              <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  className="absolute h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Top Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              🚀 Top Technologies
            </h3>
            <div className="space-y-3">
              {['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'].map((tech) => (
                <div key={tech} className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{tech}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Learning Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              📚 Currently Learning
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Rust</span>
                  <span className="text-sm text-gray-500">40%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-full w-2/5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Web3 / Blockchain</span>
                  <span className="text-sm text-gray-500">25%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-full w-1/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Machine Learning</span>
                  <span className="text-sm text-gray-500">30%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-full w-[30%] bg-gradient-to-r from-green-500 to-teal-500 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold mb-4">⚡ Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Skills</span>
                <span className="font-bold">32+</span>
              </div>
              <div className="flex justify-between">
                <span>Years Coding</span>
                <span className="font-bold">8+</span>
              </div>
              <div className="flex justify-between">
                <span>Projects Done</span>
                <span className="font-bold">50+</span>
              </div>
              <div className="flex justify-between">
                <span>Code Quality</span>
                <span className="font-bold">A+</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-lg p-4 text-center shadow-md
                         hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-purple-100
                              dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🏆</span>
                </div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {cert.issuer} • {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernSkills;