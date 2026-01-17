import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology - Computer Science Engineering",
      institution: "SRM University, AP",
      location: "Amaravati, Andhra Pradesh",
      duration: "October 2022 - 2026",
      grade: "CGPA: 9.17",
      status: "Current",
      highlights: [
        "Member of Environment & Arts Clubs",
        "Organizer of Earth Day Rally 2023",
        "Volunteer for Aloha 2023",
        "Consistent academic excellence (CGPA: 9.12)"
      ]
    },
    {
      degree: "Intermediate - MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Chaitanya College of Education",
      location: "Andhra Pradesh",
      duration: "2020 - 2022",
      grade: "Percentage: 96.4%",
      status: "Completed",
      highlights: [
        "Strong foundation in STEM subjects",
        "Focused preparation for competitive exams",
        "Outstanding academic performance (96.4%)"
      ]
    },
    {
      degree: "Secondary Education - CBSE",
      institution: "Sri Chaitanya International Olympiad School",
      location: "Andhra Pradesh",
      duration: "2018 - 2020",
      grade: "Percentage: 87.4%",
      status: "Completed",
      highlights: [
        "Well-rounded academic development",
        "Active participation in school activities",
        "Solid foundation for higher studies (87.4%)"
      ]
    }
  ];

  const testScores = [
    {
      test: "EAPCET",
      score: "Rank: 4056",
      date: "June 2022",
      description: "Engineering entrance examination for Andhra Pradesh"
    },
    {
      test: "SGPA (Latest Semester)",
      score: "9.714",
      date: "January 2026",
      description: "Semester Grade Point Average"
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-2">
            My academic journey showcasing consistent excellence and active involvement.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 transform lg:-translate-x-px h-full w-0.5 bg-blue-200"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-8 sm:mb-10 lg:mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>

              {/* Content Card */}
              <div className={`ml-10 sm:ml-16 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                    <div className="flex-1">
                      <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 ${
                        edu.status === 'Current' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">{edu.degree}</h3>
                      <h4 className="text-sm sm:text-base lg:text-lg text-blue-600 font-semibold mb-1 sm:mb-2">{edu.institution}</h4>
                    </div>
                    <div className="p-2 sm:p-3 bg-blue-100 text-blue-600 rounded-lg sm:ml-4 self-start">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center text-green-600 font-semibold text-xs sm:text-sm">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span>{edu.grade}</span>
                    </div>
                  </div>

                  {/* Activities & Achievements merged */}
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Activities & Achievements:</h5>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1 leading-relaxed">
                      {edu.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Test Scores */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Test Scores & Academic Performance
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {testScores.map((test, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{test.test}</h4>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{test.score}</div>
                <p className="text-gray-500 text-xs sm:text-sm mb-2">{test.date}</p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{test.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
