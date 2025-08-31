import React from 'react';
import { Code, Globe, Wrench, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "C++", level: 90 },
        { name: "C", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8 text-green-600" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "PHP", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="w-8 h-8 text-purple-600" />,
      skills: [
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Flask", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Jira", level: 80 }
      ]
    },
    {
      title: "Technical Skills",
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      skills: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "Object-Oriented Programming", level: 85 },
        { name: "Database Design", level: 80 },
        { name: "System Design", level: 75 },
        { name: "Git/Version Control", level: 85 }
      ]
    },
    {
      title: "Product & Management",
      icon: <Users className="w-8 h-8 text-teal-600" />,
      skills: [
        { name: "Product Management", level: 85 },
        { name: "Agile Methodologies", level: 80 },
        { name: "User Experience Design", level: 75 },
        { name: "Project Management", level: 80 },
        { name: "Team Leadership", level: 75 }
      ]
    }
  ];

  const certifications = [
    {
      title: "BITS Pilani Hackathon Winner",
      issuer: "BITS Pilani, Hyderabad",
      date: "March 2025",
      description: "Winner at TechXcelerate for Cloudinary AI-based MERN project"
    },
    {
      title: "Hack SRM Finalist",
      issuer: "SRM University, AP",
      date: "February 2025",
      description: "Finalist in university-level hackathon competition"
    },
    {
      title: "Python Programming",
      issuer: "SWAYAM Platform",
      date: "2024",
      description: "Scored 76% in comprehensive Python programming course"
    },
    {
      title: "E-Business",
      issuer: "SWAYAM Platform",
      date: "2024",
      description: "Scored 75% in e-business fundamentals course"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-2">
            A comprehensive overview of my technical skills, tools, and certifications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gray-50 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-xs sm:text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-1.5 sm:h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow"
              >
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {cert.title}
                </h4>
                <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">{cert.issuer}</p>
                <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">{cert.date}</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LeetCode Stats */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Competitive Programming</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">1434</div>
              <div className="text-orange-100 text-sm sm:text-base">LeetCode Rating</div>
            </div>
            <div className="w-16 h-px sm:w-px sm:h-16 bg-orange-300"></div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">4056</div>
              <div className="text-orange-100 text-sm sm:text-base">EAPCET Rank</div>
            </div>
          </div>
          <a
            href="https://leetcode.com/u/S_RAMA_SHESHA_SAI/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white text-orange-600 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors"
          >
            View LeetCode Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
