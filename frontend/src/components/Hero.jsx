import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import Profile from '../assets/profile.jpg';
import { generateCVPDF } from '../utils/cvGenerator';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements - Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl top-20 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center gap-10">
          {/* Centered Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-indigo-400/40 shadow-2xl shadow-indigo-500/30 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
          >
            <img src={Profile} alt="Profile avatar" className="w-full h-full object-cover" />
          </motion.div>

          {/* Centered text, social, CTAs */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Nidula
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-2xl md:text-3xl text-indigo-400 mb-3 font-semibold tracking-wide">
                Business Analyst | Strategic Digital Platform Designer
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                Transforming complex business challenges into scalable digital solutions. Specializing in enterprise process optimization, market-driven product strategy, and data-informed decision making.
              </p>
              <div className="flex justify-center gap-3 mb-8 flex-wrap">
                <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-sm text-indigo-300">Process Optimization</span>
                <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-sm text-indigo-300">Data Analytics</span>
                <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-sm text-indigo-300">Product Strategy</span>
                <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-sm text-indigo-300">Business Intelligence</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center space-x-6 mb-8"
            >
              <a
                href="https://github.com/nidula6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://linkedin.com/in/nidula-jayawardhana-4861a824b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="mailto:your.nidulajayawardana@gmail.com"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <FaEnvelope size={32} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-200 transform hover:scale-105"
              >
                View Case Studies
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-indigo-400 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                Start a Conversation
              </button>
              <button
                onClick={generateCVPDF}
                className="px-8 py-3 border-2 border-teal-400 text-teal-300 font-semibold rounded-lg hover:bg-teal-400 hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
              >
                <FaDownload size={16} /> Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-green-400 transition-colors duration-200 animate-bounce"
        >
          <HiArrowDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
