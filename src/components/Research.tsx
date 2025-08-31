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
    <section id="research" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Research Work</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-2">
            Exploring innovative solutions in energy harvesting, sustainable technology, and medical imaging.
          </p>
        </div>

        {/* Responsive layout for research papers */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4 sm:p-6 lg:p-8"
            >
              <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-blue-600 text-white rounded-lg sm:rounded-xl mr-3 sm:mr-4 lg:mr-6 flex-shrink-0">
                  {paper.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">{paper.title}</h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">{paper.institution}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">{paper.description}</p>

              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600 flex-shrink-0" /> Highlights
              </h4>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 space-y-1 leading-relaxed">
                {paper.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-600 flex-shrink-0" /> Skills
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {paper.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-white text-gray-700 rounded-full text-xs sm:text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Research Interests */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-lg mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Sustainable Technology</h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Exploring renewable energy solutions and sustainable engineering practices
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-lg mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">IoT Applications</h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Developing innovative solutions for Internet of Things and smart systems
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 text-purple-600 rounded-lg mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Academic Excellence</h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Committed to rigorous research methodology and peer-reviewed publications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
