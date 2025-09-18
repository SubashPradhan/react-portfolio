import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CreativeAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('journey');

  const experience = [
    {
      period: 'Present',
      role: 'Integration Support Engineer',
      company: 'Stream',
      description: 'Supporting developers with Stream\'s chat and activity feed APIs. Helping teams build real-time messaging and activity feeds at scale.',
      color: 'from-blue-500 to-cyan-500',
      icon: '🚀'
    },
    {
      period: '2021 - 2024',
      role: 'Sr. Developer Support Engineer',
      company: 'Nylas',
      description: 'Led developer support initiatives for API integrations. Helped developers build world-class user experiences.',
      color: 'from-purple-500 to-pink-500',
      icon: '💼'
    },
    {
      period: '2018 - 2021',
      role: 'Social Media Evaluator',
      company: 'Appen',
      description: 'Evaluated web pages and social media feeds to improve AI technologies.',
      color: 'from-green-500 to-emerald-500',
      icon: '🤖'
    },
    {
      period: '2019',
      role: 'Full Stack Developer',
      company: 'Codaisseur Bootcamp',
      description: '11-week intensive bootcamp. Built full-stack applications using React, Redux, Node.js.',
      color: 'from-orange-500 to-red-500',
      icon: '🎓'
    }
  ];

  const stats = [
    { label: 'Years in Tech', value: '5+', icon: '⚡' },
    { label: 'APIs Integrated', value: '100+', icon: '🔗' },
    { label: 'Developers Helped', value: '1000+', icon: '👥' },
    { label: 'Projects Built', value: '100+', icon: '🛠️' }
  ];

  const skills = [
    { name: 'API Integration', level: 95, color: 'bg-blue-500' },
    { name: 'JavaScript/React', level: 90, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'Technical Support', level: 98, color: 'bg-purple-500' },
    { name: 'Documentation', level: 92, color: 'bg-pink-500' },
    { name: 'Problem Solving', level: 96, color: 'bg-cyan-500' }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }} ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ background: 'var(--color-accent)', opacity: 0.1 }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ background: '#8b5cf6', opacity: 0.1 }} />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, var(--color-accent), #06b6d4)' }} />
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            I'm an Integration Support Engineer at Stream, passionate about helping developers build
            real-time chat and activity feeds. I bridge the gap between complex technology and practical solutions.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="backdrop-blur-sm rounded-full p-2" style={{ background: 'var(--color-card-bg)', border: '1px solid var(--color-card-border)' }}>
            {['journey', 'stats', 'skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full capitalize font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'shadow-lg'
                    : 'hover:opacity-80'
                }`}
                style={{
                  background: activeTab === tab ? 'linear-gradient(to right, var(--color-accent), #06b6d4)' : 'transparent',
                  color: activeTab === tab ? 'white' : 'var(--color-text-secondary)'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'journey' && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                       style={{ background: `linear-gradient(to right, ${exp.color.split(' ')[1]}, ${exp.color.split(' ')[3]})` }} />

                  <div className="relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-300" style={{ background: 'var(--color-card-bg)', border: '1px solid var(--color-card-border)' }}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-2xl`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>{exp.period}</span>
                        <h3 className="text-xl font-bold mt-1" style={{ color: 'var(--color-text)' }}>{exp.role}</h3>
                        <p className="font-medium" style={{ color: '#06b6d4' }}>{exp.company}</p>
                      </div>
                    </div>
                    <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'stats' && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to right, var(--color-accent), #06b6d4)' }}>
                      {stat.icon}
                    </div>
                    <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" style={{ background: 'var(--color-accent)', opacity: 0.2 }} />
                  </div>
                  <h3 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>{stat.value}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-medium" style={{ color: 'var(--color-text)' }}>{skill.name}</span>
                      <span className="font-bold" style={{ color: '#06b6d4' }}>{skill.level}%</span>
                    </div>
                    <div className="relative h-3 rounded-full overflow-hidden" style={{ background: 'var(--color-bg-tertiary)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className={`absolute inset-0 ${skill.color} blur-sm opacity-50`} />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-sm rounded-2xl p-8" style={{ background: 'linear-gradient(to right, var(--color-accent)/0.1, #06b6d4/0.1)', border: '1px solid var(--color-accent)/0.2' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Let's Build Something Amazing</h3>
            <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              Ready to integrate powerful APIs or need help with your development challenges?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Start a Conversation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeAbout;