import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const sections = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'skills',     label: 'Skills' },
  { id: 'research',   label: 'Research' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
];

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = sections
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const match = sections.find(s => s.id === e.target.id);
            if (match) setActiveSection(match.label);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Section label chip */}
      {activeSection && (
        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-400 text-xs font-medium whitespace-nowrap">
          {activeSection}
        </div>
      )}

      {/* Arrow button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="p-3 sm:p-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:opacity-90 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default BackToTop;
