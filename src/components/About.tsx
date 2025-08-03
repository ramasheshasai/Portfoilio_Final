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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate About Innovation & Technology
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">9.12</div>
            <div className="text-gray-600">CGPA</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">1434</div>
            <div className="text-gray-600">LeetCode Rating</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">LinkedIn Connections</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">2+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;