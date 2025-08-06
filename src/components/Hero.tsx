import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-400"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-800"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up hover-lift">
            Satuluri Rama Shesha Sai
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200 hover-tilt">
            Product Management Intern @Flam | Hackathon Winner @BITS-Hyderabad | 
            4th Year CSE SRM AP - CGPA 9.12
          </p>
          
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-400 hover-lift">
            Final-year Computer Science Engineering student with expertise in product management, 
            full-stack development, and research. Passionate about building scalable, user-focused 
            solutions and exploring innovative approaches in tech.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up animation-delay-600 perspective-1000">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl animate-glow hover-tilt"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover-tilt"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center space-x-6 animate-slide-up animation-delay-800 perspective-1000">
            <a
              href="https://github.com/ramasheshasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover-tilt animate-float"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ramasheshasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover-tilt animate-float animation-delay-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/S_RAMA_SHESHA_SAI/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover-tilt animate-float animation-delay-400"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
            <a
              href="mailto:ramasheshasai_s@srmap.edu.in"
              className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover-tilt animate-float animation-delay-600"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600 animate-slide-up animation-delay-1000 hover-lift">
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