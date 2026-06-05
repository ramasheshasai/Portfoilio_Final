import ScrambleText from './ScrambleText';
import React from 'react';
import { Code, Globe, Wrench, Brain, Users, Award, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import CodeRain from './CodeRain';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code className="w-5 h-5" />,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    skills: ['C++', 'C', 'Java', 'Python', 'SQL'],
  },
  {
    title: 'Web Development',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'PHP', 'MongoDB'],
  },
  {
    title: 'Frameworks & Tools',
    icon: <Wrench className="w-5 h-5" />,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    skills: ['Tailwind CSS', 'Bootstrap', 'Flask', 'Figma', 'Jira', 'Git'],
  },
  {
    title: 'Technical Skills',
    icon: <Brain className="w-5 h-5" />,
    color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    skills: ['Data Structures & Algorithms', 'OOP', 'Database Design', 'System Design', 'REST APIs'],
  },
  {
    title: 'Product & Management',
    icon: <Users className="w-5 h-5" />,
    color: 'text-green-400 bg-green-500/10 border-green-500/20',
    skills: ['Product Management', 'Agile / Scrum', 'User Research', 'PRD Writing', 'Team Leadership'],
  },
];

const certifications = [
  {
    title: 'Deloitte Data Analyst Virtual Internship',
    issuer: 'Deloitte Australia (Forage)',
    date: '2025',
    description: 'Data analysis, visualization, and business insights using Excel and SQL.',
  },
  {
    title: 'Oracle GenAI Virtual Internship',
    issuer: 'Oracle (AICTE Eduskills)',
    date: '2025',
    description: 'Generative AI, prompt engineering, and automation using Oracle Cloud.',
  },
  {
    title: 'BITS Pilani Hackathon Winner',
    issuer: 'BITS Pilani, Hyderabad',
    date: 'March 2025',
    description: 'Winner at TechXcelerate for Cloudinary AI-based MERN project.',
  },
  {
    title: 'Hack SRM Finalist',
    issuer: 'SRM University, AP',
    date: 'February 2025',
    description: 'Finalist in university-level hackathon competition.',
  },
  {
    title: 'Python Programming',
    issuer: 'SWAYAM Platform',
    date: '2024',
    description: 'Scored 76% in comprehensive Python programming course.',
  },
  {
    title: 'E-Business',
    issuer: 'SWAYAM Platform',
    date: '2024',
    description: 'Scored 75% in e-business fundamentals course.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const chipItem = {
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Skills = () => (
  <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-transparent relative overflow-hidden">
    <CodeRain />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3"><ScrambleText text="Skills & Expertise" /></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          A comprehensive overview of my technical skills, tools, and certifications.
        </p>
      </motion.div>

      {/* Skill tag grid */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-14">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-dark rounded-2xl p-5 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg border ${cat.color}`}>{cat.icon}</div>
              <h3 className="text-white font-semibold text-sm sm:text-base">{cat.title}</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {cat.skills.map((skill, j) => (
                <motion.span
                  key={j}
                  variants={chipItem}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-blue-500/40 hover:text-blue-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Certifications & Achievements</h3>
        <div className="grid lg:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-dark rounded-xl p-4 border-l-2 border-blue-500 hover:border-purple-500 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{cert.title}</h4>
                  <p className="text-blue-400 text-xs font-medium mt-0.5">{cert.issuer}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{cert.date}</p>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* LeetCode banner */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/20 p-6 sm:p-8 text-center"
      >
        <Trophy className="w-8 h-8 text-orange-400 mx-auto mb-3" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Competitive Programming</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-6">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-orange-400">1434</div>
            <div className="text-gray-500 text-sm mt-1">LeetCode Rating</div>
          </div>
          <div className="w-12 h-px sm:w-px sm:h-12 bg-orange-500/30" />
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-orange-400">4056</div>
            <div className="text-gray-500 text-sm mt-1">EAPCET Rank</div>
          </div>
        </div>
        <a
          href="https://leetcode.com/u/S_RAMA_SHESHA_SAI/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-xl hover:bg-orange-500/30 font-semibold text-sm transition-colors"
        >
          View LeetCode Profile
        </a>
      </motion.div>

    </div>
  </section>
);

export default Skills;
