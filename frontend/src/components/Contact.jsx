import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_psp8p6l',
    'template_cu32pv6',
    formData,
    'br2EQFEpdnTAdlkSe'
  )
  .then((result) => {
      console.log('Email sent!', result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
  })
  .catch((error) => {
      console.error('Email error:', error);
      alert('Failed to send message. Please try again.');
  });
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 font-mono">
            <span className="text-green-400">{'<'}</span>Get In <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Touch</span><span className="text-green-400">{' />'}</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-mono text-sm">
            // Let's collaborate on something amazing
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 font-mono">Contact Information</h3>
              <p className="text-gray-400 mb-8 font-mono text-sm">
                // Always open to new opportunities and collaborations
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 font-mono">Email</h4>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200 font-mono text-sm"
                    >
                      nidulajayawardana@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <HiLocationMarker className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 font-mono">Location</h4>
                    <p className="text-gray-400 font-mono text-sm">Gampaha, Sri lanka</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-white font-medium mb-4 font-mono">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/nidula6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-slate-700 transition-all duration-200"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/nidula-jayawardhana-4861a824b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-slate-700 transition-all duration-200"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  
                    
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 font-mono text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors duration-200 font-mono"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 font-mono text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors duration-200 font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 font-mono text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors duration-200 resize-none font-mono"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-black rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-200 transform hover:scale-105 font-mono"
                >
                  send_message()
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
