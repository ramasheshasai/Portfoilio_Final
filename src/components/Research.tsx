import React from 'react';
import { FileText, Award, Users, Lightbulb } from 'lucide-react';

const Research = () => {
  const researchPapers = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Acoustic Energy Harvesting",
      institution: "SRM University, AP • Jan 2025 - Mar 2025",
      description:
        "Research on converting ambient acoustic energy into electrical power using piezoelectric transducers, aimed at powering IoT devices and low-power electronics in noisy environments.",
      highlights: [
        "Primary author & presenter at 9th Research Day, SRM-AP",
        "Published among peer-reviewed entries",
        "Focus on sustainable IoT power solutions",
      ],
      skills: [
        "Technical Writing",
        "Research Methodology",
        "Data Analysis",
        "Presentation Skills",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "MRI Denoising: A Filter Comparison Study",
      institution: "Team Project • 2025",
      description:
        "Comparative study on MRI brain image noise removal using Median, NLM, and Adaptive Median filters. Evaluated with PSNR & SSIM; Adaptive Median excelled under high noise, while NLM preserved fine details at low noise.",
      highlights: [
        "Implemented Python-based filtering algorithms",
        "Adaptive Median best at high noise densities",
        "NLM preserved fine structures effectively",
      ],
      skills: [
        "Python Programming",
        "Medical Imaging",
        "Signal Processing",
        "Team Collaboration",
      ],
    },
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Work</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Exploring innovative solutions in energy harvesting, sustainable technology, and medical imaging.
          </p>
        </div>

        {/* 2-column layout for research papers */}
        <div className="grid md:grid-cols-2 gap-10">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-600 text-white rounded-xl mr-6">
                  {paper.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                  <p className="text-blue-600 font-semibold">{paper.institution}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{paper.description}</p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-green-600" /> Highlights
              </h4>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                {paper.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-600" /> Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {paper.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Research Interests */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Technology</h4>
            <p className="text-gray-600 text-sm">
              Exploring renewable energy solutions and sustainable engineering practices
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">IoT Applications</h4>
            <p className="text-gray-600 text-sm">
              Developing innovative solutions for Internet of Things and smart systems
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Academic Excellence</h4>
            <p className="text-gray-600 text-sm">
              Committed to rigorous research methodology and peer-reviewed publications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
