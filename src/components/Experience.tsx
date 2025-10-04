import React from "react";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Product Management Intern",
      company: "Flam",
      location: "Bengaluru, Karnataka, India",
      duration: "June 2025 - Sept 2025",
      type: "On-site • Paid Internship",
      description:
        "Working on high-impact projects like Fandom Video, Royal Stag Campaign, Prism Interactive, and the Payments System.",
      achievements: [
        "Authored & refined PRDs, crafted intuitive user flows, and developed detailed user personas",
        "Led user testing efforts and collaborated with frontend and backend teams for fixes and enhancements",
        "Revamped Help Center structure including Privacy Policy and Terms & Conditions",
        "Researched & analyzed payment gateways and competitor strategies",
        "Collaborated across design, tech, and marketing teams for cohesive user experiences",
      ],
      skills: ["SQL", "Agile", "Product Management", "Figma", "Jira"],
    },
    {
      title: "React.js Developer Intern",
      company: "Celebal Technologies",
      location: "Remote",
      duration: "June 2025 - August 2025",
      type: "Remote • Internship",
      description:
        "Developed a responsive Service Desk Application using React.js with secure authentication, admin features, and real-time API integration.",
      achievements: [
        "Designed and developed a responsive Service Desk Application with usability and accessibility focus",
        "Implemented secure authentication for personalized user access and data protection",
        "Built admin features to assign, update, and close tickets with real-time status visibility",
        "Integrated frontend components with backend APIs for smooth user flows",
      ],
      skills: ["React.js", "API Integration", "UI/UX", "Authentication"],
    },
    {
      title: "Web Developer Intern",
      company: "Edunet Foundation",
      location: "Remote",
      duration: "June 2024 - July 2024",
      type: "Remote • Internship",
      description:
        "Developed comprehensive digital portfolio and established Git-based collaborative workflows.",
      achievements: [
        "Created a portfolio of 5 responsive web pages",
        "Emphasized user-centric design across devices",
        "Established Git workflows, improving team efficiency by 40%",
        "Enhanced code maintenance and collaboration by 25%",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-2">
            Internships and professional roles where I applied technical and
            management skills to deliver impact.
          </p>
        </div>

        {/* Responsive layout */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-4 sm:p-6 lg:p-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">{exp.company}</p>
                </div>
                <div className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium self-start sm:self-center">
                  {exp.type}
                </div>
              </div>

              {/* Meta info */}
              <div className="space-y-1 sm:space-y-2 mb-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                  {exp.duration}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                  {exp.location}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">{exp.description}</p>

              {/* Achievements */}
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600 flex-shrink-0" /> Key
                Achievements
              </h4>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 space-y-1 leading-relaxed">
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>

              {/* Skills */}
              <div>
                <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                  Skills Used
                </h5>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-white shadow-sm border border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
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
