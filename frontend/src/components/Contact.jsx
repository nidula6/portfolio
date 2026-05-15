import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaDownload } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import emailjs from 'emailjs-com';
import { generateCVPDF } from '../utils/cvGenerator';

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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-3">
            Let's Connect
          </h2>
          <p className="text-center text-indigo-300 mb-12 max-w-2xl mx-auto">
            Open to discussing business opportunities, digital strategy initiatives, and collaboration. I'm always interested in exploring how I can help optimize processes and drive business value.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-8 text-sm">
                Whether you have a specific project in mind or just want to explore opportunities, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center border border-indigo-500/30">
                    <FaEnvelope className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a
                      href="mailto:nidulajayawardana@gmail.com"
                      className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                    >
                      nidulajayawardana@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center border border-indigo-500/30">
                    <HiLocationMarker className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400 text-sm">Gampaha, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-white font-medium mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/nidula6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-400 transition-all duration-200"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/nidula-jayawardhana-4861a824b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-400 transition-all duration-200"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <button
                  onClick={generateCVPDF}
                  className="w-full px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaDownload size={18} /> Download Resume
                </button>
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
                  <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
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
