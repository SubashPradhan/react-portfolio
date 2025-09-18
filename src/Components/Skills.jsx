import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Redux', 'Tailwind CSS', 'Material-UI']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'CI/CD', 'Netlify', 'Heroku', 'AWS Basics']
    },
    {
      title: 'API & Integration',
      skills: ['Stream Chat API', 'Stream Feeds API', 'Real-time Messaging', 'Webhooks', 'OAuth', 'API Documentation']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-[var(--color-bg-secondary)]" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Technologies I've worked with throughout my journey as a developer and support engineer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-accent)]">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Agile/Scrum', 'Technical Support', 'API Documentation', 'Customer Success', 'Problem Solving', 'Team Collaboration'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;