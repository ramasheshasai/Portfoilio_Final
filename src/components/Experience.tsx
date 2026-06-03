import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'FourKites',
    location: 'Chennai, Tamil Nadu, India',
    duration: 'March 2026 – Present',
    type: 'On-site · Internship',
    description: 'Working on observability, infrastructure, and product features for one of the world\'s leading supply chain visibility platforms.',
    achievements: [
      'Built 4 features for the FourKites chatbot and core platform, improving user workflows',
      'Instrumented services with OpenTelemetry (OTEL) for distributed tracing and metrics',
      'Containerized and deployed services using Docker and Kubernetes',
      'Set up monitoring and observability dashboards using SigNoz',
      'Automated CI/CD pipelines with Jenkins for faster and reliable deployments',
    ],
    skills: ['OpenTelemetry', 'Docker', 'Kubernetes', 'SigNoz', 'Jenkins'],
    accent: 'from-green-500/20 to-green-600/5 border-green-500/20',
    dot: 'bg-green-400',
  },
  {
    title: 'Product Management Intern',
    company: 'Flam',
    location: 'Bengaluru, Karnataka, India',
    duration: 'June 2025 – Sept 2025',
    type: 'On-site · Paid',
    description: 'Worked on high-impact projects: Fandom Video, Royal Stag Campaign, Prism Interactive, and the Payments System.',
    achievements: [
      'Authored & refined PRDs, crafted intuitive user flows, and developed detailed user personas',
      'Led user testing and collaborated with frontend and backend teams for fixes and enhancements',
      'Revamped Help Center structure including Privacy Policy and Terms & Conditions',
      'Researched & analyzed payment gateways and competitor strategies',
    ],
    skills: ['Product Management', 'SQL', 'Agile', 'Figma', 'Jira'],
    accent: 'from-blue-500/20 to-blue-600/5 border-blue-500/20',
    dot: 'bg-blue-500',
  },
  {
    title: 'React.js Developer Intern',
    company: 'Celebal Technologies',
    location: 'Remote',
    duration: 'June 2025 – August 2025',
    type: 'Remote · Internship',
    description: 'Developed a responsive Service Desk Application with secure authentication, admin features, and real-time API integration.',
    achievements: [
      'Designed and developed a responsive Service Desk Application',
      'Implemented secure authentication for personalized user access',
      'Built admin features to assign, update, and close tickets with real-time status',
      'Integrated frontend components with backend APIs for smooth user flows',
    ],
    skills: ['React.js', 'API Integration', 'UI/UX', 'Authentication'],
    accent: 'from-purple-500/20 to-purple-600/5 border-purple-500/20',
    dot: 'bg-purple-500',
  },
  {
    title: 'Web Developer Intern',
    company: 'Edunet Foundation',
    location: 'Remote',
    duration: 'June 2024 – July 2024',
    type: 'Remote · Internship',
    description: 'Developed a comprehensive digital portfolio and established Git-based collaborative workflows.',
    achievements: [
      'Created a portfolio of 5 responsive web pages',
      'Emphasized user-centric design across all devices',
      'Established Git workflows, improving team efficiency by 40%',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Responsive Design'],
    accent: 'from-teal-500/20 to-teal-600/5 border-teal-500/20',
    dot: 'bg-teal-500',
  },
];

const Experience = () => (
  <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Internships where I applied technical and product skills to deliver real impact.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-gradient-to-br ${exp.accent} border rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4 gap-2">
              <div>
                <h3 className="text-lg font-bold text-white leading-tight mb-1">{exp.title}</h3>
                <p className="text-blue-400 font-semibold text-sm">{exp.company}</p>
              </div>
              <span className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${exp.dot}`} />
            </div>

            {/* Meta */}
            <div className="space-y-1.5 mb-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                {exp.duration}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                {exp.location}
              </div>
              <span className="inline-block px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                {exp.type}
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-green-400" /> Key Achievements
              </h4>
              <ul className="space-y-1">
                {exp.achievements.map((a, j) => (
                  <li key={j} className="text-xs text-gray-500 flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((s, j) => (
                <span key={j} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Experience;
