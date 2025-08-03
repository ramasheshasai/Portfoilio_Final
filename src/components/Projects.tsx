import React from 'react';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BookBazar",
      description: "A comprehensive book shopping cart system with admin panel for inventory management and user-friendly shopping experience.",
      longDescription: "Architected a responsive book commerce system using PHP and MySQL, integrating 21 modular pages and 5 normalized tables. Features admin-tier control over 10+ listings and streamlined inventory operations.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Responsive design across mobile, tablet, and desktop",
        "Admin panel for book management",
        "Secure user authentication",
        "Shopping cart functionality",
        "Order management system"
      ],
      github: "https://github.com/ramasheshasai",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "News Website",
      description: "Real-time news web application built with React.js, featuring multiple categories and responsive design.",
      longDescription: "Developed a real-time news web application using React, showcasing 7 news categories with 20 articles each, leveraging modular component architecture and React hooks.",
      technologies: ["React.js", "HTML", "CSS", "NewsAPI", "Bootstrap"],
      features: [
        "7 different news categories",
        "Real-time news updates via NewsAPI",
        "Responsive Bootstrap design",
        "Optimized state management",
        "Fast loading times"
      ],
      github: "https://github.com/ramasheshasai",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Weekday Engine",
      description: "Multi-platform date-to-weekday calculation engine with advanced algorithms for leap year validation.",
      longDescription: "Engineered a robust date-to-day-of-week calculation engine across Python (Flask), Java (Swing), and C++ platforms with advanced leap year validation and century computation.",
      technologies: ["C++", "Java", "Python", "Flask", "Swing"],
      features: [
        "Cross-platform compatibility",
        "Advanced leap year algorithms",
        "Century and month code computation",
        "Rigorous input validation",
        "Mathematical heuristics for edge cases"
      ],
      github: "https://github.com/ramasheshasai",
      icon: <Code className="w-8 h-8" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ramasheshasai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;