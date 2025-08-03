import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology - Computer Science Engineering",
      institution: "SRM University, AP",
      location: "Amaravati, Andhra Pradesh",
      duration: "October 2022 - 2026",
      grade: "CGPA: 9.12",
      status: "Current",
      activities: [
        "Member of Environment Club",
        "Member of Arts Club",
        "Earth Day Rally Organizer (2023)",
        "Aloha 2023 Event Volunteer"
      ],
      achievements: [
        "Consistent academic excellence with 9.12 CGPA",
        "Active participation in extracurricular activities",
        "Leadership roles in environmental initiatives",
        "Strong involvement in college cultural events"
      ]
    },
    {
      degree: "Intermediate - MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Chaitanya College of Education",
      location: "Andhra Pradesh",
      duration: "2020 - 2022",
      grade: "Percentage: 96.4%",
      status: "Completed",
      activities: [
        "Focused on Science and Mathematics",
        "Preparation for competitive examinations",
        "Strong foundation in analytical thinking"
      ],
      achievements: [
        "Exceptional academic performance with 96.4%",
        "Strong foundation in STEM subjects",
        "Qualified for engineering entrance examinations"
      ]
    },
    {
      degree: "Secondary Education - CBSE",
      institution: "Sri Chaitanya International Olympiad School",
      location: "Andhra Pradesh",
      duration: "2018 - 2020",
      grade: "Percentage: 87.4%",
      status: "Completed",
      activities: [
        "All-round academic development",
        "Participation in various school activities",
        "Foundation in core subjects"
      ],
      achievements: [
        "Strong academic foundation with 87.4%",
        "Well-rounded education in multiple subjects",
        "Preparation for higher secondary education"
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
      score: "9.56",
      date: "May 2025",
      description: "Semester Grade Point Average"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic journey showcasing consistent excellence and active participation in various activities.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>

          {educationData.map((edu, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                        edu.status === 'Current' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-blue-600 font-semibold mb-2">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg ml-4">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.grade}</span>
                    </div>
                  </div>

                  {edu.activities && (
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Activities & Involvement:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {edu.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Test Scores */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Test Scores & Academic Performance
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testScores.map((test, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{test.test}</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">{test.score}</div>
                <p className="text-gray-500 text-sm mb-2">{test.date}</p>
                <p className="text-gray-600 text-sm">{test.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;