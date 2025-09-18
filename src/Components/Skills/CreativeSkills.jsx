import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CreativeSkills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Mastery',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95, experience: '5+ years', icon: '⚛️' },
        { name: 'TypeScript', level: 90, experience: '3+ years', icon: '📘' },
        { name: 'JavaScript', level: 95, experience: '6+ years', icon: '🟡' },
        { name: 'CSS/SCSS', level: 88, experience: '6+ years', icon: '🎨' },
        { name: 'Tailwind CSS', level: 92, experience: '2+ years', icon: '💨' },
        { name: 'Next.js', level: 85, experience: '2+ years', icon: '⚡' }
      ]
    },
    {
      title: 'Backend Power',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 88, experience: '4+ years', icon: '🟢' },
        { name: 'Python', level: 85, experience: '3+ years', icon: '🐍' },
        { name: 'Express', level: 85, experience: '4+ years', icon: '🚀' },
        { name: 'PostgreSQL', level: 80, experience: '3+ years', icon: '🐘' },
        { name: 'MongoDB', level: 82, experience: '3+ years', icon: '🍃' },
        { name: 'REST APIs', level: 95, experience: '5+ years', icon: '🔌' },
        { name: 'GraphQL', level: 75, experience: '2+ years', icon: '📊' }
      ]
    },
    {
      title: 'API Integration',
      icon: '🔗',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Stream APIs', level: 95, experience: '1+ years', icon: '💬' },
        { name: 'Webhooks', level: 90, experience: '3+ years', icon: '🪝' },
        { name: 'OAuth', level: 88, experience: '4+ years', icon: '🔐' },
        { name: 'API Documentation', level: 95, experience: '5+ years', icon: '📚' },
        { name: 'Postman', level: 92, experience: '4+ years', icon: '📮' },
        { name: 'Integration Testing', level: 88, experience: '3+ years', icon: '🧪' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 95, experience: '6+ years', icon: '📝' },
        { name: 'Docker', level: 80, experience: '2+ years', icon: '🐳' },
        { name: 'AWS', level: 75, experience: '2+ years', icon: '☁️' },
        { name: 'CI/CD', level: 82, experience: '3+ years', icon: '🔄' },
        { name: 'Netlify', level: 90, experience: '4+ years', icon: '🌐' },
        { name: 'Heroku', level: 85, experience: '3+ years', icon: '🚀' }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: '#8b5cf6', opacity: 0.1 }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'var(--color-accent)', opacity: 0.1, animationDelay: '1s' }} />
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }} />
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    onMouseEnter={() => setActiveSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setActiveSkill(null)}
                    className="relative group/skill"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium" style={{ color: 'var(--color-text)' }}>{skill.name}</span>
                        <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{skill.experience}</span>
                      </div>
                      <span className="font-bold" style={{ color: '#06b6d4' }}>{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 rounded-full overflow-hidden" style={{ background: 'var(--color-bg-tertiary)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      </motion.div>

                      {/* Glow effect on hover */}
                      {activeSkill === `${categoryIndex}-${skillIndex}` && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-sm opacity-50`}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-sm rounded-2xl p-8" style={{ background: 'var(--color-card-bg)', border: '1px solid var(--color-card-border)' }}>
            <h4 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3" style={{ color: 'var(--color-text)' }}>
              <span className="text-2xl">🤝</span>
              Soft Skills
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Technical Support', 'Problem Solving', 'API Documentation',
                'Customer Success', 'Team Collaboration', 'Active Listening',
                'Technical Writing', 'Integration Testing'
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="px-3 py-2 rounded-full text-sm"
                  style={{
                    background: 'linear-gradient(to right, var(--color-accent)/0.2, #8b5cf6/0.2)',
                    border: '1px solid var(--color-accent)/0.3',
                    color: 'var(--color-accent)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeSkills;