import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "ramasheshasai_s@srmap.edu.in",
      link: "mailto:ramasheshasai_s@srmap.edu.in"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 90140-02564",
      link: "tel:+919014002564"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Vijayawada, Andhra Pradesh, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/ramasheshasai",
      color: "bg-gray-800"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/ramasheshasai",
      color: "bg-blue-600"
    },
    {
      name: "LeetCode",
      icon: <ExternalLink className="w-6 h-6" />,
      url: "https://leetcode.com/u/S_RAMA_SHESHA_SAI/",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-blue-600">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-white rounded-lg ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-2">Let's Build Something Amazing</h4>
              <p className="text-blue-100 mb-4">
                I'm always excited to work on innovative projects and collaborate with talented teams.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ramasheshasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ramasheshasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
