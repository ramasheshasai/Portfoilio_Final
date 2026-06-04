import React from 'react';
import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="text-xl font-bold gradient-text mb-3">Rama Shesha Sai</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Former Product Management Intern · Full-Stack Developer · Research Enthusiast
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Building innovative solutions at the intersection of technology and product.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About',      href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects',   href: '#projects' },
                { name: 'Skills',     href: '#skills' },
                { name: 'Research',   href: '#research' },
                { name: 'Contact',    href: '#contact' },
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
            <div className="space-y-1.5 mb-5">
              <p className="text-gray-500 text-sm">satuluriramasheshasai@gmail.com</p>
              <p className="text-gray-500 text-sm">+91 90140-02564</p>
              <p className="text-gray-500 text-sm">Vijayawada, Andhra Pradesh</p>
            </div>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/ramasheshasai', icon: <Github className="w-4 h-4" />, label: 'GitHub', hover: 'hover:text-white hover:bg-white/10' },
                { href: 'https://www.linkedin.com/in/ramasheshasai', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', hover: 'hover:text-blue-400 hover:bg-blue-500/10' },
                { href: 'https://leetcode.com/u/S_RAMA_SHESHA_SAI/', icon: <ExternalLink className="w-4 h-4" />, label: 'LeetCode', hover: 'hover:text-orange-400 hover:bg-orange-500/10' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`p-2 rounded-lg glass-dark text-gray-500 transition-all ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm italic mb-1">
            "Built with curiosity, deployed with passion."
          </p>
          <p className="text-gray-700 text-xs flex items-center justify-center gap-1 mt-3">
            © {year} Satuluri Rama Shesha Sai. Made with <Heart className="w-3 h-3 text-red-500" /> and lots of code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
