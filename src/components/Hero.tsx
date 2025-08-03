import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Satuluri Rama Shesha Sai"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Satuluri Rama Shesha Sai
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Product Management Intern @Flam | Hackathon Winner @BITS-Hyderabad | 
            4th Year CSE SRM AP - CGPA 9.12
          </p>
          
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Final-year Computer Science Engineering student with expertise in product management, 
            full-stack development, and research. Passionate about building scalable, user-focused 
            solutions and exploring innovative approaches in tech.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-semibold"
            >
              Contact Me
            </a>
            <a
              href="/Resume_Rama_Shesha_Sai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 font-semibold"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ramasheshasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ramasheshasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/S_RAMA_SHESHA_SAI/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
            <a
              href="mailto:ramasheshasai_s@srmap.edu.in"
              className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              ramasheshasai_s@srmap.edu.in
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +91 90140-02564
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;