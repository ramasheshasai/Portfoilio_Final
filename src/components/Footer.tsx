import React from 'react';
import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Rama Shesha Sai</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Former Product Management Intern | Full-Stack Developer | Research Enthusiast
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Building innovative solutions and exploring cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Research', href: '#research' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Me</h4>
            <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <p className="text-gray-400 text-sm sm:text-base break-all">ramasheshasai_s@srmap.edu.in</p>
              <p className="text-gray-400 text-sm sm:text-base">+91 90140-02564</p>
              <p className="text-gray-400 text-sm sm:text-base">Vijayawada, Andhra Pradesh</p>
            </div>
            
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://github.com/ramasheshasai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramasheshasai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://leetcode.com/u/S_RAMA_SHESHA_SAI/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors duration-200"
                aria-label="LeetCode"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 flex flex-col sm:flex-row items-center justify-center text-xs sm:text-sm">
            © {currentYear} Satuluri Rama Shesha Sai. Made with 
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 text-red-500" />
            and lots of code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;