import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      period: 'Present',
      role: 'Sr. Support Engineer',
      company: 'Stream',
      description: 'Supporting developers with Stream\'s chat and activity feed APIs. Helping teams build real-time messaging and activity feeds at scale. Resolving complex technical challenges and ensuring smooth integrations.',
      type: 'full-time'
    },
    {
      period: '2021 - 2024',
      role: 'Sr. Developer Support Engineer / Production Support Lead',
      company: 'Nylas',
      description: 'Led developer support initiatives for API integrations. Helped developers build world-class user experiences with embedded email and scheduling capabilities.',
      type: 'full-time'
    },
    {
      period: '2018 - 2021',
      role: 'Social Media Evaluator',
      company: 'Appen',
      description: 'Evaluated web pages and social media feeds to improve AI technologies. Maintained high accuracy rates while feeding data for research and device training purposes.',
      type: 'part-time'
    },
    {
      period: '2019',
      role: 'Full Stack Developer',
      company: 'Codaisseur Bootcamp',
      description: '11-week intensive bootcamp. Built full-stack applications using React, Redux, Node.js, Express, GraphQL. Worked with agile-scrum methodologies and CI/CD pipelines.',
      type: 'education'
    },
    {
      period: '2010 - 2013',
      role: 'Technical Officer',
      company: 'Software Systems Nepal',
      description: 'Supported end-users with software issues, installations, and networking. Built customer retention through excellent technical service.',
      type: 'full-time'
    }
  ];

  return (
    <section id="about" className="section-padding bg-[var(--color-bg-secondary)]" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            I'm a Sr. Support Engineer at Stream with a passion for helping developers build
            real-time chat and activity feeds. With a background in full-stack development and years of
            experience in technical support, I bridge the gap between complex technology and practical solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-[var(--color-border)]"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--color-accent)] rounded-full"></div>
              <div className="mb-1">
                <span className="text-sm text-[var(--color-accent)] font-medium">{item.period}</span>
                <span className="ml-4 text-xs px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full">
                  {item.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
              <h4 className="text-[var(--color-text-secondary)] mb-2">{item.company}</h4>
              <p className="text-[var(--color-text-secondary)]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">10+</div>
            <div className="text-[var(--color-text-secondary)]">Years in Tech</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">API Expert</div>
            <div className="text-[var(--color-text-secondary)]">Nylas Integration Specialist</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">Global</div>
            <div className="text-[var(--color-text-secondary)]">Remote Work Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;