import ScrambleText from './ScrambleText';
import React from 'react';
import { FileText, Award, Users, Lightbulb, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const researchPapers = [
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Centralised and Federated Learning',
    institution: 'SRM University, AP · Sept 2025 – Jan 2026',
    description:
      'An accepted peer-reviewed research paper comparing centralized and federated learning architectures, analyzing trade-offs in scalability, data privacy, communication efficiency, and real-world deployment in distributed systems.',
    highlights: [
      'Accepted and published among peer-reviewed academic submissions',
      'Experimental evaluation of centralized vs federated learning models',
      'Emphasis on privacy-preserving learning and distributed intelligence',
    ],
    skills: ['Federated Learning', 'Machine Learning', 'Research Methodology', 'Data Analysis'],
    accent: 'from-blue-500/10 border-blue-500/20',
    iconBg: 'bg-blue-500/20 text-blue-400',
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: 'MRI Denoising: A Filter Comparison Study',
    institution: 'Team Project · 2025',
    description:
      'Comparative study on MRI brain image noise removal using Median, NLM, and Adaptive Median filters. Evaluated with PSNR & SSIM — Adaptive Median excelled under high noise, while NLM preserved fine details at low noise.',
    highlights: [
      'Implemented Python-based filtering algorithms',
      'Adaptive Median best at high noise densities',
      'NLM preserved fine structures most effectively',
    ],
    skills: ['Python', 'Medical Imaging', 'Signal Processing', 'Team Collaboration'],
    accent: 'from-purple-500/10 border-purple-500/20',
    iconBg: 'bg-purple-500/20 text-purple-400',
  },
];

const interests = [
  { icon: <Brain className="w-5 h-5" />, title: 'AI & ML', desc: 'Exploring machine learning and deep learning engineering practices', color: 'text-blue-400 bg-blue-500/10' },
  { icon: <Award className="w-5 h-5" />, title: 'Research Acceptance', desc: 'Paper approved and published in peer-reviewed journals', color: 'text-purple-400 bg-purple-500/10' },
  { icon: <Users className="w-5 h-5" />, title: 'Academic Excellence', desc: 'Committed to rigorous research methodology and peer review', color: 'text-teal-400 bg-teal-500/10' },
];

const Research = () => (
  <section id="research" className="py-16 sm:py-20 lg:py-24 bg-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3"><ScrambleText text="Research Work" /></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Exploring distributed intelligence, privacy-preserving learning, and medical imaging.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        {researchPapers.map((paper, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`border bg-gradient-to-br ${paper.accent} to-transparent rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-xl ${paper.iconBg} flex-shrink-0`}>{paper.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight mb-1">{paper.title}</h3>
                <p className="text-blue-400 font-medium text-sm">{paper.institution}</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">{paper.description}</p>

            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-green-400" /> Highlights
              </h4>
              <ul className="space-y-1">
                {paper.highlights.map((h, j) => (
                  <li key={j} className="text-xs text-gray-500 flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {paper.skills.map((s, j) => (
                <span key={j} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-3 sm:gap-4"
      >
        {interests.map((item, i) => (
          <div key={i} className="glass-dark rounded-xl p-5 text-center hover:border-white/20 transition-colors">
            <div className={`w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center ${item.color}`}>
              {item.icon}
            </div>
            <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default Research;
