import ScrambleText from './ScrambleText';
import React, { useState } from 'react';
import { Github, Database, Globe, Code, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  BookBazarThumb, ReadmeForgeThumb, NewsThumb, TaskFlowThumb,
  ProdigyPMThumb, DevSyncThumb, ProdigyAnalysisThumb,
  ChronicleTeardownThumb, NetflixSDThumb, GoogleAnalyticsSDThumb, YouTubeSDThumb,
} from './ProjectThumbnails';

const NotionIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="currentColor">
    <path d="M18.3 22.4c2-.8 4.2-1.2 6.4-1.1l45.3 2.6c3.2.2 5.7 2.8 5.9 6l2.5 45.1c.3 5.6-3.9 10.4-9.4 10.7l-45.1 2.5c-5.6.3-10.4-3.9-10.7-9.4L10.7 33.7c-.3-5.6 3.9-10.4 9.4-10.7zM36 37h6.8l8.5 18.9h.2L60 37h6.4v29.3h-5.3V46.2h-.2L50.4 66h-4.6L41.5 46h-.2v20.3H36V37z" />
  </svg>
);

// 3D tilt wrapper
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springCfg = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springCfg);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springCfg);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width  - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
};

const categories = ['Full Stack', 'Tech Stack', 'Product Analysis', 'System Design'];

const projects = [
  {
    title: 'BookBazar',
    description: 'A comprehensive book shopping cart system with admin panel for inventory management.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: ['Responsive design', 'Admin panel', 'Secure authentication', 'Shopping cart'],
    github: 'https://github.com/ramasheshasai/book_bazar',
    icon: <Database className="w-6 h-6" />,
    category: 'Tech Stack',
    thumbnail: <BookBazarThumb />,
  },
  {
    title: 'ReadmeForge',
    description: 'GitHub README builder with real GitHub-style live preview, multiple templates, and instant Markdown export.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Markdown'],
    features: ['Real GitHub-accurate preview', 'Multiple templates', 'Instant export', 'Responsive UI'],
    github: 'https://github.com/ramasheshasai/ReadmeForge',
    live: 'https://git-hub-readme-generator-pi.vercel.app/',
    icon: <Code className="w-6 h-6" />,
    category: 'Full Stack',
    thumbnail: <ReadmeForgeThumb />,
  },
  {
    title: 'News Website',
    description: 'Real-time news web app built with React.js, featuring multiple categories and responsive design.',
    technologies: ['React.js', 'HTML', 'CSS', 'NewsAPI', 'Bootstrap'],
    features: ['7 news categories', 'Real-time updates', 'Responsive layout', 'Fast loading'],
    github: 'https://github.com/ramasheshasai/news_website',
    icon: <Globe className="w-6 h-6" />,
    category: 'Tech Stack',
    thumbnail: <NewsThumb />,
  },
  {
    title: 'TaskFlow',
    description: 'Feature-rich to-do app with task management, filtering, sorting, and real-time statistics.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'localStorage'],
    features: ['Add / edit / delete tasks', 'Filter & sort', 'Persistent storage', 'Glass-morphism UI'],
    github: 'https://github.com/ramasheshasai/To-Do-List_deployed',
    live: 'https://task-flow-ten.vercel.app/',
    icon: <Code className="w-6 h-6" />,
    category: 'Tech Stack',
    thumbnail: <TaskFlowThumb />,
  },
  {
    title: 'ProdigyPM',
    description: 'Unified platform streamlining PRD and persona creation for product managers with automated templates.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: ['Automated PRD generation', 'Persona builder', 'Document dashboard', 'REST APIs'],
    github: 'https://github.com/ramasheshasai/Working_Prd_Make',
    live: 'https://prodigy-pm.vercel.app/signup',
    icon: <Code className="w-6 h-6" />,
    category: 'Full Stack',
    thumbnail: <ProdigyPMThumb />,
  },
  {
    title: 'DevSync-Arena',
    description: 'Real-time collaborative code editor enabling multiple users to code simultaneously.',
    technologies: ['React', 'Node.js', 'Express', 'Socket.IO', 'CodeMirror'],
    features: ['Real-time collaboration', 'Room-based architecture', 'WebSocket updates', 'CodeMirror editor'],
    github: 'https://github.com/ramasheshasai/DevSync-Arena',
    icon: <Code className="w-6 h-6" />,
    category: 'Full Stack',
    thumbnail: <DevSyncThumb />,
  },
  {
    title: 'ProdigyPM — Product Analysis',
    description: 'Deep product analysis and teardown of ProdigyPM covering user flows, personas, and PRD strategy.',
    technologies: ['Product Management', 'User Research', 'Wireframing'],
    features: ['User journey mapping', 'Friction point analysis', 'PRD documentation', 'Persona creation'],
    github: 'https://github.com/ramasheshasai/Working_Prd_Make',
    live: 'https://prodigy-pm.vercel.app/signup',
    icon: <Code className="w-6 h-6" />,
    category: 'Product Analysis',
    thumbnail: <ProdigyAnalysisThumb />,
  },
  {
    title: 'Chronicle Product Teardown',
    description: 'Structured teardown of Chronicle (AI presentation tool) — user flows, friction points, and future vision.',
    technologies: ['Product Analysis', 'UX Research', 'Competitive Benchmarking'],
    features: ['User journey mapping', 'Pain point identification', 'Competitive analysis', 'Next-phase innovation'],
    github: 'https://github.com/ramasheshasai/product_teardown',
    icon: <Globe className="w-6 h-6" />,
    category: 'Product Analysis',
    thumbnail: <ChronicleTeardownThumb />,
  },
  {
    title: 'Netflix — System Design',
    description: 'End-to-end Netflix system design covering CDN strategy, microservices, caching, and streaming pipeline.',
    technologies: ['System Design', 'Microservices', 'CDN', 'Load Balancing', 'Caching'],
    features: ['Scalable architecture', 'Global CDN strategy', 'Fault tolerance', 'Detailed diagrams'],
    notion: 'https://www.notion.so/Netflix-2e092b8af6be8030800cc7409328a943?source=copy_link',
    icon: <Code className="w-6 h-6" />,
    category: 'System Design',
    thumbnail: <NetflixSDThumb />,
  },
  {
    title: 'Google Analytics — System Design',
    description: 'Deep-dive into Google Analytics architecture: event tracking, ingestion pipelines, and reporting.',
    technologies: ['System Design', 'Event Tracking', 'Data Pipelines', 'Stream Processing'],
    features: ['End-to-end analytics architecture', 'Event ingestion flow', 'Scalable storage', 'Real-time analytics'],
    notion: 'https://www.notion.so/Google-Analyatics-2f792b8af6be8046abc1c107a907ed06?source=copy_link',
    icon: <Code className="w-6 h-6" />,
    category: 'System Design',
    thumbnail: <GoogleAnalyticsSDThumb />,
  },
  {
    title: 'YouTube — System Design Notes',
    description: 'Structured learning notes from YouTube covering system design, backend architecture, and scalability patterns.',
    technologies: ['System Design', 'Backend Engineering', 'Scalability', 'Distributed Systems'],
    features: ['Well-structured notes', 'Simplified explanations', 'Interview-focused', 'Continuously updated'],
    notion: 'https://www.notion.so/Youtube-2e192b8af6be80689890ca2d635ec067?source=copy_link',
    icon: <Code className="w-6 h-6" />,
    category: 'System Design',
    thumbnail: <YouTubeSDThumb />,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Full Stack');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const filtered = projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3"><ScrambleText text="Projects & Blogs" /></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A showcase of my technical work, product thinking, and system design explorations.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setHoveredIndex(null); }}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass-dark text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <div
                key={project.title}
                className="transition-opacity duration-200"
                style={{ opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.35 : 1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <TiltCard className="glass-dark rounded-2xl p-5 hover:border-white/20 transition-colors duration-300 flex flex-col h-full">
                  {/* Thumbnail */}
                  {(project as any).thumbnail && (
                    <div className="aspect-video -mx-5 -mt-5 mb-4 rounded-t-2xl overflow-hidden">
                      {(project as any).thumbnail}
                    </div>
                  )}
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                      {project.icon}
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {project.features.slice(0, 3).map((f, j) => (
                      <li key={j} className="text-xs text-gray-500 flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((t, j) => (
                      <span key={j} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={(project as any).notion || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white text-xs font-medium transition-colors"
                    >
                      {(project as any).notion
                        ? <><NotionIcon className="w-3.5 h-3.5" /> Case Study</>
                        : <><Github className="w-3.5 h-3.5" /> Code</>}
                    </a>
                    {(project as any).live && (
                      <a
                        href={(project as any).live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 text-xs font-medium transition-opacity"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live
                      </a>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ramasheshasai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-dark border-white/20 text-gray-300 rounded-xl hover:text-white hover:bg-white/10 font-semibold text-sm transition-all"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
