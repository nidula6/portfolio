import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

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
        <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl top-20 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-20 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">{'<'}</span>Hi, I'm{' '}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Nidula jayawardhana
              </span>
              <span className="text-green-400">{' />'}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-green-400 mb-6 font-mono">
              {'>'} Full Stack Developer_
            </p>
            <div className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-mono">
              <p className="mb-2">
                <span className="text-cyan-400">const</span> <span className="text-yellow-300">passion</span> = <span className="text-orange-400">"building scalable web apps"</span>;
              </p>
              <p>
                <span className="text-cyan-400">const</span> <span className="text-yellow-300">focus</span> = <span className="text-orange-400">"clean code & innovation"</span>;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
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
            className="flex justify-center space-x-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-mono rounded font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-200 transform hover:scale-105"
            >
              view_projects()
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-green-400 text-green-400 font-mono rounded font-medium hover:bg-green-400 hover:text-black transition-all duration-200 transform hover:scale-105"
            >
              contact_me()
            </button>
          </motion.div>
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
