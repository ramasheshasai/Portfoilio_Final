import React from 'react';
import { Award, Users, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Hackathon Winner",
      description: "Winner at BITS-Hyderabad @TechXcelerate for Cloudinary AI-based MERN project"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Product Management",
      description: "Currently working as PM Intern at Flam, leading AR-powered user experiences"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Full-Stack Developer",
      description: "Proficient in MERN stack, PHP, and various modern web technologies"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: "Research Enthusiast",
      description: "Published research on Acoustic Energy Harvesting at SRM Research Day"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Passionate About Innovation & Technology
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                I'm Satuluri Rama Shesha Sai, a final-year Computer Science Engineering student at 
                SRM University-AP, with a strong CGPA of 9.12. Currently working as a Product Management 
                Intern at Flam, I bring a well-rounded background in software development, research, 
                and cross-functional collaboration.
              </p>
              <p>
                With proficiency in C, C++, Python, HTML, CSS, JavaScript, and a solid grounding in 
                Data Structures and Algorithms, I enjoy building scalable, user-focused solutions and 
                exploring innovative approaches in tech. My projects range from full-stack web applications 
                to energy harvesting research, reflecting both technical versatility and creative thinking.
              </p>
              <p>
                I thrive in fast-paced, learning-intensive environments and enjoy collaborating with 
                multidisciplinary teams to bring impactful ideas to life. With over 500+ connections 
                and growing engagement on platforms like LinkedIn, I'm actively exploring new opportunities 
                to contribute, learn, and innovate.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="mb-3 sm:mb-4">{highlight.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          <div className="p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-xl">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">9.17</div>
            <div className="text-gray-600 text-xs sm:text-sm lg:text-base">CGPA</div>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-xl">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">1434</div>
            <div className="text-gray-600 text-xs sm:text-sm lg:text-base">LeetCode Rating</div>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-xl">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">1000+</div>
            <div className="text-gray-600 text-xs sm:text-sm lg:text-base">LinkedIn Connections</div>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-xl">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">1 yr+</div>
            <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Intern Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
