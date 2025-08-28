import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Product Management Intern",
      company: "Flam",
      location: " On-Site Bengaluru, Karnataka, India",
      duration: "June 2025 - Present",
      type: "On-site-Paid-Intenship",
      description: "Working on high-impact projects like Fandom Video, Royal Stag Campaign, Prism Interactive, and the Payments System.",
      achievements: [
        "Authored & refined PRDs, crafted intuitive user flows, and developed detailed user personas",
        "Led user testing efforts and collaborated with frontend and backend teams for fixes and enhancements",
        "Revamped Help Center structure including Privacy Policy and Terms & Conditions",
        "Researched & analyzed payment gateways and competitor strategies",
        "Collaborated across design, tech, and marketing teams for cohesive user experiences"
      ],
      skills: ["SQL", "Agile Methodologies", "Product Management", "Figma", "Jira"]
    },
    {
      title: "React-Js Developer",
      company: "Celebal Technologies ",
      location: "Remote",
      duration: "June 2025 - MAugust 2025",
      type: "Remote-Internship",
      description: "Developed a responsive Service Desk Application using React.js with secure authentication, admin features, and real-time API integration.",
      achievements: [
         "Designed and developed a responsive Service Desk Application using modern web technologies with a strong focus on usability and accessibility.",
          " Implemented a secure authentication system to ensure personalized user access and data protection.",
        " Built admin-level features to assign, update, and close tickets with clear status visibility.",
          " Integrated frontend components with backend APIs to enable real-time updates and smooth user interaction flow."
      ],
      skills: ["Research", "Technical Writing", "IoT", "Energy Systems"]
    },
    {
      title: "Web Developer",
      company: "Edunet Foundation",
      location: "Remote",
      duration: "June 2024 - July 2024",
      type: "Internship",
      description: "Developed comprehensive digital portfolio and established Git-based collaborative workflows.",
      achievements: [
        "Developed comprehensive digital portfolio of 5 web pages",
        "Emphasized user-centric design and cross-device responsiveness",
        "Established standardized Git processes improving project management by 40%",
        "Enhanced code maintenance by 25% and improved team communication"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                </div>
                
                <div className="lg:ml-8 lg:text-right">
                  <div className="flex items-center text-gray-600 mb-2 lg:justify-end">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2 lg:justify-end">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Skills Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;