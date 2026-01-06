import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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

    emailjs.send(
      'service_xpy338u',
      'template_srk0sff',
      formData,
      'WHHBszhEMM2BII21P'
    )
    .then((result) => {
      console.log('Email sent:', result.text);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "satuluriramasheshasai@gmail.com",
      link: "mailto:satuluriramasheshasai@gmail.com"
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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-2">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Let's Connect</h3>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start sm:items-center">
                  <div className="p-2 sm:p-3 bg-blue-100 text-blue-600 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-sm sm:text-base text-gray-600 hover:text-blue-600 break-all">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Follow Me</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 text-white rounded-lg ${social.color} hover:opacity-90 transition-opacity`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Section */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl text-white">
              <h4 className="text-base sm:text-lg font-semibold mb-2">Let's Build Something Amazing</h4>
              <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">
                I'm always excited to work on innovative projects and collaborate with talented teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <a
                  href="https://github.com/ramasheshasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ramasheshasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mt-8 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-sm sm:text-base transition-colors"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
