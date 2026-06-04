import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Bachelor of Technology — Computer Science Engineering',
    institution: 'SRM University, AP',
    location: 'Amaravati, Andhra Pradesh',
    duration: 'October 2022 – 2026',
    grade: 'CGPA: 9.16',
    status: 'Current',
    highlights: [
      'Member of Environment & Arts Clubs',
      'Organizer of Earth Day Rally 2023',
      'Volunteer for Aloha 2023',
      'Consistent academic excellence (CGPA: 9.16)',
    ],
  },
  {
    degree: 'Intermediate — MPC (Mathematics, Physics, Chemistry)',
    institution: 'Sri Chaitanya College of Education',
    location: 'Andhra Pradesh',
    duration: '2020 – 2022',
    grade: 'Percentage: 96.4%',
    status: 'Completed',
    highlights: [
      'Strong foundation in STEM subjects',
      'Focused preparation for competitive exams',
      'Outstanding academic performance (96.4%)',
    ],
  },
  {
    degree: 'Secondary Education — CBSE',
    institution: 'Sri Chaitanya International Olympiad School',
    location: 'Andhra Pradesh',
    duration: '2018 – 2020',
    grade: 'Percentage: 87.4%',
    status: 'Completed',
    highlights: [
      'Well-rounded academic development',
      'Active participation in school activities',
      'Solid foundation for higher studies (87.4%)',
    ],
  },
];

const testScores = [
  {
    test: 'EAPCET',
    score: 'Rank: 4056',
    date: 'June 2022',
    description: 'Engineering entrance examination for Andhra Pradesh',
  },
  {
    test: 'Latest SGPA',
    score: '9.714',
    date: 'January 2026',
    description: 'Semester Grade Point Average',
  },
];

const Education = () => (
  <section id="education" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Education</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          My academic journey showcasing consistent excellence and active involvement.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 sm:left-6 lg:left-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent lg:-translate-x-px" />

        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative mb-8 lg:mb-10"
          >
            {/* Dot */}
            <div className="absolute left-2.5 sm:left-4 lg:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-[#0a0a0a] lg:-translate-x-1/2 shadow-lg shadow-blue-500/30" />

            {/* Card */}
            <div className={`ml-8 sm:ml-12 lg:ml-0 lg:w-[46%] ${i % 2 === 0 ? 'lg:pr-10' : 'lg:ml-auto lg:pl-10'}`}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="glass-dark rounded-2xl p-5 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${
                      edu.status === 'Current'
                        ? 'bg-green-500/15 text-green-400 border border-green-500/20'
                        : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                    }`}>
                      {edu.status}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold text-sm mt-0.5">{edu.institution}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1.5 mb-3 text-xs text-gray-500">
                  <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />{edu.duration}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />{edu.location}</div>
                  <div className="flex items-center gap-2 text-green-400 font-semibold"><Award className="w-3.5 h-3.5" />{edu.grade}</div>
                </div>

                <ul className="space-y-1">
                  {edu.highlights.map((item, j) => (
                    <li key={j} className="text-xs text-gray-500 flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Test scores */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-14"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Test Scores & Performance</h3>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {testScores.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="glass-dark rounded-2xl p-6 text-center hover:border-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-3 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold mb-1">{t.test}</h4>
              <div className="text-2xl font-bold gradient-text mb-1">{t.score}</div>
              <p className="text-gray-600 text-xs mb-1">{t.date}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{t.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default Education;
