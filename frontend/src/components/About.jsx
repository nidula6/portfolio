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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-3">
            About Me
          </h2>
          <p className="text-center text-indigo-300 mb-12 max-w-3xl mx-auto text-lg">
            Data-driven analyst with a passion for solving complex business problems through strategic thinking and digital innovation.
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
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur-2xl opacity-20"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300">
                    <div className="mb-6 pb-6 border-b border-slate-700">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-3">Strategic Business Analyst</h3>
                      <p className="text-gray-300 leading-relaxed">
                        I transform complex business challenges into actionable insights and scalable digital solutions. My approach combines rigorous market research, process optimization expertise, and financial acumen to drive measurable business impact.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/80 transition-all">
                        <span className="text-indigo-400 text-2xl font-bold">✓</span>
                        <div>
                          <p className="text-indigo-300 font-semibold text-sm mb-1">Requirements & Process Analysis</p>
                          <p className="text-gray-400 text-xs">Comprehensive documentation, stakeholder alignment, workflow optimization</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/80 transition-all">
                        <span className="text-blue-400 text-2xl font-bold">✓</span>
                        <div>
                          <p className="text-blue-300 font-semibold text-sm mb-1">Financial & Market Analysis</p>
                          <p className="text-gray-400 text-xs">Feasibility studies, ROI modeling, competitive benchmarking, growth forecasting</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/80 transition-all">
                        <span className="text-teal-400 text-2xl font-bold">✓</span>
                        <div>
                          <p className="text-teal-300 font-semibold text-sm mb-1">Digital Platform Strategy</p>
                          <p className="text-gray-400 text-xs">User journey design, MVP scoping, platform architecture, market positioning</p>
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
                <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-400/30 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-indigo-300 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>Current Focus
                  </h4>
                  <p className="text-white font-semibold mb-2">Business Analyst</p>
                  <p className="text-indigo-300 font-semibold mb-3">Fishifox Pvt Ltd</p>
                  <p className="text-gray-300 text-sm">Leading digital platform strategy, conducting market research, and building business cases for product initiatives.</p>
                </div>

                {/* Expertise Areas */}
                <div className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 border border-blue-400/30 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-blue-300 mb-3 flex items-center">
                    <span className="text-2xl mr-3">⚡</span>Core Expertise
                  </h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>✓ Enterprise Process Optimization</p>
                    <p>✓ Financial Modeling & ROI Analysis</p>
                    <p>✓ Market Research & Competitive Intelligence</p>
                    <p>✓ User Journey & Workflow Design</p>
                    <p>✓ Data Analytics & Insights</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-400/50 rounded-lg p-4 text-center hover:border-indigo-300 transition-all">
                    <p className="text-indigo-300 text-2xl font-bold">7+</p>
                    <p className="text-gray-300 text-xs mt-1 font-medium">Case Studies</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 border border-blue-400/50 rounded-lg p-4 text-center hover:border-blue-300 transition-all">
                    <p className="text-blue-300 text-2xl font-bold">Multi-Tech</p>
                    <p className="text-gray-300 text-xs mt-1 font-medium">Full Stack</p>
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
