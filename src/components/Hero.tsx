import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Satuluri Rama Shesha Sai
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Product Management Intern @Flam | Hackathon Winner @BITS-Hyderabad | 
            4th Year CSE SRM AP - CGPA 9.12
          </p>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            Final-year Computer Science Engineering student with expertise in product management, 
            full-stack development, and research. Passionate about building scalable, user-focused 
            solutions and exploring innovative approaches in tech.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <a
              href="https://github.com/ramasheshasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ramasheshasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://leetcode.com/u/S_RAMA_SHESHA_SAI/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              aria-label="LeetCode Profile"
            >
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:satuluriramasheshasai@gmail.com"
              className="p-2 sm:p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 px-4">
            <div className="flex items-center justify-center">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
              ramasheshasai_s@srmap.edu.in
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
              +91 90140-02564
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
