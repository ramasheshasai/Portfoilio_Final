import React from 'react';
import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Rama Shesha Sai</h3>
            <p className="text-gray-400 mb-4">
              Product Management Intern | Full-Stack Developer | Research Enthusiast
            </p>
            <p className="text-gray-400 text-sm">
              Building innovative solutions and exploring cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-2 mb-6">
              <p className="text-gray-400">ramasheshasai_s@srmap.edu.in</p>
              <p className="text-gray-400">+91 90140-02564</p>
              <p className="text-gray-400">Vijayawada, Andhra Pradesh</p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/ramasheshasai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramasheshasai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/S_RAMA_SHESHA_SAI/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Satuluri Rama Shesha Sai. Made with 
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            and lots of code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;