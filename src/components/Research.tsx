import React from 'react';
import { FileText, Award, Users, Lightbulb, Download } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Work</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Exploring innovative solutions in energy harvesting and sustainable technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-600 text-white rounded-xl mr-6">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Acoustic Energy Harvesting
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    SRM University, AP • January 2025 - March 2025
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Conducted comprehensive research on converting ambient acoustic energy into electrical 
                  power using piezoelectric transducers. This innovative approach aims to power small-scale 
                  IoT devices and low-power electronics in noisy environments, contributing to sustainable 
                  energy solutions.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-green-600" />
                      Research Highlights
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Primary author and presenter at 9th Research Day, SRM-AP
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Successfully published among peer-reviewed entries
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Focus on sustainable IoT power solutions
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Innovative piezoelectric transducer applications
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-purple-600" />
                      Skills Demonstrated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Technical Writing",
                        "Research Methodology",
                        "Data Analysis",
                        "Presentation Skills",
                        "IoT Systems",
                        "Energy Systems",
                        "Piezoelectric Technology",
                        "Sustainable Engineering"
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-orange-600" />
                    Research Impact
                  </h4>
                  <p className="text-gray-700 mb-4">
                    This research contributes to the growing field of energy harvesting technologies, 
                    particularly in urban environments where acoustic energy is abundant. The work 
                    explores practical applications for powering sensor networks, wearable devices, 
                    and remote monitoring systems without traditional power sources.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-green-600" />
                      Peer-reviewed publication
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      Presented to academic community
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Lightbulb className="w-4 h-4 mr-2 text-purple-600" />
                      Innovative approach to sustainable energy
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  Download Research Paper
                </button>
                <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-semibold">
                  <FileText className="w-5 h-5 mr-2" />
                  View Presentation
                </button>
              </div>
            </div>
          </div>

          {/* Additional Research Interests */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Research;