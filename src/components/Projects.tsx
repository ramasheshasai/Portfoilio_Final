import React, { useState } from "react";
import { Github, Database, Globe, Code } from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Full Stack");

  const categories = ["Full Stack", "Tech Stack", "Product Analysis", "Universal"];

  const projects = [
    {
      title: "DevSync-Arena",
      description:
        "A real-time collaborative code editor enabling multiple users to code simultaneously with seamless synchronization.",
      longDescription:
        "Designed and built a real-time collaborative code editor to enhance teamwork and enable multiple users to code simultaneously. Focused on solving instant synchronization and communication in shared coding environments. Engineered with React, Node.js, Express, and Socket.IO using room-based architecture for scalability. Integrated CodeMirror, responsive UI, and WebSocket-powered live updates for smooth collaboration.",
      technologies: ["React", "Node.js", "Express", "Socket.IO", "CodeMirror", "WebSocket"],
      features: [
        "Real-time collaborative coding",
        "Room-based scalable architecture",
        "WebSocket-powered instant updates",
        "CodeMirror editor integration",
        "Responsive and user-friendly interface",
      ],
      github: "https://github.com/ramasheshasai/DevSync-Arena",
      icon: <Code className="w-8 h-8" />,
      category: "Full Stack",
    },
    {
      title: "BookBazar",
      description:
        "A comprehensive book shopping cart system with admin panel for inventory management and user-friendly shopping experience.",
      longDescription:
        "Architected a responsive book commerce system using PHP and MySQL, integrating 21 modular pages and 5 normalized tables. Features admin-tier control over 10+ listings and streamlined inventory operations.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Responsive design across mobile, tablet, and desktop",
        "Admin panel for book management",
        "Secure user authentication",
        "Shopping cart functionality",
        "Order management system",
      ],
      github: "https://github.com/ramasheshasai/book_bazar",
      icon: <Database className="w-8 h-8" />,
      category: "Full Stack",
    },
    {
      title: "News Website",
      description:
        "Real-time news web application built with React.js, featuring multiple categories and responsive design.",
      longDescription:
        "Developed a real-time news web application using React, showcasing 7 news categories with 20 articles each, leveraging modular component architecture and React hooks.",
      technologies: ["React.js", "HTML", "CSS", "NewsAPI", "Bootstrap"],
      features: [
        "7 different news categories",
        "Real-time news updates via NewsAPI",
        "Responsive Bootstrap design",
        "Optimized state management",
        "Fast loading times",
      ],
      github: "https://github.com/ramasheshasai/news_website",
      icon: <Globe className="w-8 h-8" />,
      category: "Tech Stack",
    },
    {
      title: "TaskFlow - To Do List",
      description:
        "A modern to-do list app built with React, TypeScript, and Tailwind CSS, featuring task management, filtering, and real-time statistics.",
      longDescription:
        "Developed TaskFlow, a feature-rich to-do list application leveraging React with TypeScript and styled using Tailwind CSS. Focused on delivering smooth task management, filtering, sorting, and real-time statistics without any backend dependency. Implemented localStorage for persistent data, ensuring tasks remain saved across sessions. Designed with glass-morphism UI, animations, and responsive layouts for a polished user experience.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Lucide React",
        "Vite",
        "localStorage"
      ],
      features: [
        "Add, edit, delete, and complete tasks",
        "Filter by all, active, or completed tasks",
        "Sort by date, alphabetical, or priority",
        "Persistent storage with localStorage",
        "Glass-morphism design and responsive UI"
      ],
      github: "https://github.com/ramasheshasai/To-Do-List_deployed",
      icon: <Code className="w-8 h-8" />,
      category: "Tech Stack",
    },

    {
      title: "Weekday Engine",
      description:
        "Multi-platform date-to-weekday calculation engine with advanced algorithms for leap year validation.",
      longDescription:
        "Engineered a robust date-to-day-of-week calculation engine across Python (Flask), Java (Swing), and C++ platforms with advanced leap year validation and century computation.",
      technologies: ["C++", "Java", "Python", "Flask", "Swing"],
      features: [
        "Cross-platform compatibility",
        "Advanced leap year algorithms",
        "Century and month code computation",
        "Rigorous input validation",
        "Mathematical heuristics for edge cases",
      ],
      github: "https://github.com/ramasheshasai/Weekday-Engine",
      icon: <Code className="w-8 h-8" />,
      category: "Universal",
    },
    {
      title: "ProdigyPM ",
      description:
        "A unified platform streamlining PRD and persona creation for product managers with automated templates and workflow integration.",
      longDescription:
        "Developed a full-stack Product Management Platform using React, Node.js, Express, and MongoDB to automate PRD creation and persona generation. Designed an intuitive dashboard with predefined templates and auto-generation logic, cutting documentation effort by 60% and enhancing cross-team productivity.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      features: [
        "Automated PRD and persona generation",
        "Predefined templates for structured documentation",
        "Dashboard for managing documents",
        "Full-stack architecture with REST APIs",
        "Improved cross-team productivity by 60%"
      ],
      github: "https://github.com/ramasheshasai/Working_Prd_Make",
      icon: <Code className="w-8 h-8" />,
      category: "Full Stack",
    },
    {
      title: "Prodigy PM",
      description:
        "A unified platform streamlining PRD and persona creation for product managers with automated templates and workflow integration.",
      longDescription:
        "Developed a full-stack Product Management Platform using React, Node.js, Express, and MongoDB to automate PRD creation and persona generation. Designed an intuitive dashboard with predefined templates and auto-generation logic, cutting documentation effort by 60% and enhancing cross-team productivity.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      features: [
        "Automated PRD and persona generation",
        "Predefined templates for structured documentation",
        "Dashboard for managing documents",
        "Full-stack architecture with REST APIs",
        "Improved cross-team productivity by 60%"
      ],
      github: "https://github.com/ramasheshasai/Working_Prd_Make",
      icon: <Code className="w-8 h-8" />,
      category: "Product Analysis",
    },

    {
      title: "Chronicle Product TearDown",
      description:
        "A product analysis teardown of Chronicle (AI presentation tool) highlighting pain points and future improvements.",
      longDescription:
        "Performed a structured teardown under The Product Folks challenge, analyzing Chronicle’s user flow, friction points, and proposed AI Cursor for Slides as a next-phase solution.",
      technologies: ["Product Analysis", "UX Research", "Competitive Benchmarking"],
      features: [
        "Mapped user journey and friction points",
        "Defined next-phase innovation",
        "Competitive market analysis",
        "Clear value proposition documentation",
      ],
      github: "https://github.com/ramasheshasai/product_teardown",
      icon: <Globe className="w-8 h-8" />,
      category: "Product Analysis",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-2">
            Here are some of my featured projects that showcase my technical
            skills and problem-solving abilities.
          </p>
        </div>

        {/* Category Nav */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-xs sm:text-sm lg:text-base ${activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-4 sm:p-6 relative">
                {/* Project Header */}
                <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-blue-100 text-blue-600 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    {project.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="flex">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects CTA */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <a
            href="https://github.com/ramasheshasai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
