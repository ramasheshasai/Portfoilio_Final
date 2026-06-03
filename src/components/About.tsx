import React from 'react';
import { Award, Users, Code, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: <Award className="w-7 h-7 text-blue-400" />,
    title: 'Hackathon Winner',
    description: 'Winner at BITS-Hyderabad @TechXcelerate for Cloudinary AI-based MERN project',
    color: 'from-blue-500/10 to-blue-600/5 border-blue-500/20',
  },
  {
    icon: <Users className="w-7 h-7 text-purple-400" />,
    title: 'Product Management',
    description: 'Former PM Intern at Flam, led AR-powered user experiences and PRD workflows',
    color: 'from-purple-500/10 to-purple-600/5 border-purple-500/20',
  },
  {
    icon: <Code className="w-7 h-7 text-teal-400" />,
    title: 'Full-Stack Developer',
    description: 'Proficient in MERN stack, PHP, and modern web technologies',
    color: 'from-teal-500/10 to-teal-600/5 border-teal-500/20',
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-orange-400" />,
    title: 'Research Enthusiast',
    description: 'Published research on Federated Learning and MRI denoising techniques',
    color: 'from-orange-500/10 to-orange-600/5 border-orange-500/20',
  },
];

const stats = [
  { value: '9.17', label: 'CGPA',               color: 'text-blue-400' },
  { value: '1434', label: 'LeetCode Rating',    color: 'text-purple-400' },
  { value: '1000+', label: 'LinkedIn Connects', color: 'text-teal-400' },
  { value: '3',     label: 'Internships',       color: 'text-orange-400' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => (
  <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#0d0d0d]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5">
            Passionate About Innovation & Technology
          </h3>
          <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            <p>
              I'm <strong className="text-white">Satuluri Rama Shesha Sai</strong>, a final-year
              Computer Science Engineering student at <strong className="text-white">SRM University-AP</strong> with
              a CGPA of <strong className="text-blue-400">9.17</strong>. I blend technical depth with product
              thinking and cross-functional collaboration.
            </p>
            <p>
              Skilled in <strong className="text-white">C, C++, Python, HTML, CSS, and JavaScript</strong>,
              with a strong foundation in DSA. My work spans full-stack web apps to ML research,
              reflecting both versatility and curiosity.
            </p>
            <p>
              I thrive in fast-paced environments and love turning ideas into impact. Actively seeking
              opportunities to <strong className="text-white">build, learn, and innovate</strong>.
            </p>
          </div>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`p-5 rounded-xl border bg-gradient-to-br ${h.color} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="mb-3">{h.icon}</div>
              <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{h.title}</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            className="glass-dark rounded-xl p-5 text-center hover:border-white/20 transition-colors"
          >
            <div className={`text-2xl sm:text-3xl font-bold mb-1 ${s.color}`}>{s.value}</div>
            <div className="text-gray-500 text-xs sm:text-sm">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default About;
