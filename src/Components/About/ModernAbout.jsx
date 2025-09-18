import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ModernAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'Years Experience', value: '8+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '25+' },
  ];

  const journey = [
    {
      year: '2016',
      title: 'Started Journey',
      description: 'Began professional career in software development',
      icon: '🚀',
    },
    {
      year: '2018',
      title: 'Senior Developer',
      description: 'Promoted to senior role, leading team projects',
      icon: '💼',
    },
    {
      year: '2020',
      title: 'Tech Lead',
      description: 'Architecting scalable solutions for enterprise clients',
      icon: '🏗️',
    },
    {
      year: '2023',
      title: 'Sr. Support Engineer',
      description: 'Specializing in complex technical solutions and optimization',
      icon: '⚡',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-width-container section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about creating impactful solutions that bridge technology and business needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Crafting Digital Excellence
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                With over 8 years of experience in software engineering, I specialize in building
                scalable, performant applications that drive business growth. My expertise spans
                full-stack development, system architecture, and technical problem-solving.
              </p>
              <p>
                I thrive on challenges that require innovative thinking and technical excellence.
                From optimizing legacy systems to implementing cutting-edge technologies, I deliver
                solutions that exceed expectations and create lasting value.
              </p>
              <p>
                My approach combines deep technical knowledge with strong business acumen, ensuring
                that every solution not only works flawlessly but also aligns with strategic objectives
                and delivers measurable ROI.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Let's Connect
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary flex items-center"
              >
                Download CV
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20
                         rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-900/50"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Professional Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600" />

            {/* Timeline items */}
            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-1" />
                  <div className="relative z-10 w-16 h-16 bg-white dark:bg-dark-bg rounded-full
                                border-4 border-blue-600 dark:border-purple-600 flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 px-8">
                    <div className={`bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg
                                  ${index % 2 === 0 ? 'text-right' : ''}`}>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100
                            dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Excellence</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Committed to delivering the highest quality in every project
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100
                            dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">💡</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Always exploring new technologies and creative solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100
                            dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Collaboration</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Building strong partnerships to achieve shared success
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernAbout;