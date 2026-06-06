import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home',       href: '#home',       id: 'home' },
  { name: 'About',      href: '#about',      id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects',   href: '#projects',   id: 'projects' },
  { name: 'Skills',     href: '#skills',     id: 'skills' },
  { name: 'Research',   href: '#research',   id: 'research' },
  { name: 'Contact',    href: '#contact',    id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <a href="#home" className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text">
            Rama Shesha Sai
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm lg:text-base font-medium transition-colors duration-300 group ${
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-white/10">
            <nav className="flex flex-col space-y-1">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 px-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
