import ScrambleText from './ScrambleText';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, title: 'Email', value: 'satuluriramasheshasai@gmail.com', link: 'mailto:satuluriramasheshasai@gmail.com' },
  { icon: <Phone className="w-5 h-5" />, title: 'Phone', value: '+91 90140-02564', link: 'tel:+919014002564' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Location', value: 'Vijayawada, Andhra Pradesh', link: null },
];

const socialLinks = [
  { name: 'GitHub',   icon: <Github className="w-5 h-5" />,       url: 'https://github.com/ramasheshasai',                color: 'hover:text-white hover:border-white/30' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />,     url: 'https://www.linkedin.com/in/ramasheshasai',       color: 'hover:text-blue-400 hover:border-blue-400/30' },
  { name: 'LeetCode', icon: <ExternalLink className="w-5 h-5" />, url: 'https://leetcode.com/u/S_RAMA_SHESHA_SAI/',        color: 'hover:text-orange-400 hover:border-orange-400/30' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send('service_xpy338u', 'template_srk0sff', formData, 'WHHBszhEMM2BII21P')
      .then(() => {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Something went wrong. Please try again.'))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3"><ScrambleText text="Get In Touch" /></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Open to new opportunities, collaborations, or just a chat about tech and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{info.title}</p>
                    {info.link ? (
                      <a href={info.link} className="text-gray-300 text-sm hover:text-blue-400 transition-colors break-all">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm mb-3">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`p-3 glass-dark rounded-xl text-gray-400 transition-all hover:scale-110 ${s.color}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 p-6">
              <h4 className="text-white font-semibold mb-2">Let's Build Something Amazing</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Always excited to work on innovative projects and collaborate with talented teams.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/ramasheshasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ramasheshasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-lg hover:bg-blue-600/30 text-sm font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-dark rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange} required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange} required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required
                    rows={5} placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                >
                  {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
