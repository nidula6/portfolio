import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 font-mono">
            <span className="text-green-400">{'<'}</span>About <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Me</span><span className="text-green-400">{' />'}</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-mono text-sm">
            // Business Analyst | Digital Strategist | Data-Driven Analyst
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Column - Main Summary */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl blur-2xl opacity-20"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300">
                    <div className="mb-6 pb-6 border-b border-slate-700">
                      <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-3">Analytical & Strategic Thinker</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Business Analyst and Digital Product Strategist transforming complex business challenges into scalable digital solutions. Combining full-stack development expertise with business-oriented analytical thinking.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/80 transition-all">
                        <span className="text-green-400 text-2xl font-bold">✓</span>
                        <div>
                          <p className="text-green-300 font-semibold text-sm mb-1">Business Analysis & Strategy</p>
                          <p className="text-gray-400 text-xs">Process modeling, requirement gathering, workflow documentation</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/80 transition-all">
                        <span className="text-cyan-400 text-2xl font-bold">✓</span>
                        <div>
                          <p className="text-cyan-300 font-semibold text-sm mb-1">Financial & Operational Analysis</p>
                          <p className="text-gray-400 text-xs">Cost modeling, break-even analysis, growth forecasting, ROI evaluation</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/80 transition-all">
                        <span className="text-blue-400 text-2xl font-bold">✓</span>
                        <div>
                          <p className="text-blue-300 font-semibold text-sm mb-1">Digital Platform Strategy</p>
                          <p className="text-gray-400 text-xs">Market research, competitive analysis, user journey mapping</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Current Role & Key Facts */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Current Role */}
                <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-400/30 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-green-300 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>Current Role
                  </h4>
                  <p className="text-white font-semibold mb-2">Business Analyst Intern</p>
                  <p className="text-cyan-300 font-semibold mb-3">@ Fishifox Pvt Ltd</p>
                  <p className="text-gray-300 text-sm">Supporting digital product strategy, market research, and feasibility assessments across platform initiatives.</p>
                </div>

                {/* Education */}
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-cyan-300 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🎓</span>Education
                  </h4>
                  <p className="text-white font-semibold mb-1">BSc (Hons) Information & Communication Technology</p>
                  <p className="text-gray-400 text-sm">University of Colombo • Expected 2027</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-green-400 transition-all">
                    <p className="text-green-400 text-2xl font-bold">3</p>
                    <p className="text-gray-400 text-xs mt-1">BA Projects</p>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-cyan-400 transition-all">
                    <p className="text-cyan-400 text-2xl font-bold">4</p>
                    <p className="text-gray-400 text-xs mt-1">Dev Projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
