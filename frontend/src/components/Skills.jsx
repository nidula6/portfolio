import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaChartLine,
  FaDatabase,
  FaUsers,
  FaFileAlt,
  FaChartBar,
  FaLightbulb,
  FaSearch,
  FaProjectDiagram,
} from 'react-icons/fa';
import {
  SiExpress,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const baSkills = [
    { name: 'Process Modeling', icon: FaProjectDiagram, color: 'text-green-400', bg: 'bg-green-500/10' },
    { name: 'Requirements Analysis', icon: FaFileAlt, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { name: 'User Journey Mapping', icon: FaUsers, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'Financial Modeling', icon: FaChartBar, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { name: 'Market Research', icon: FaSearch, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { name: 'Growth Forecasting', icon: FaChartLine, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  const devSkills = [
    { name: 'MERN Stack', icon: FaReact, color: 'text-cyan-400' },
    { name: 'SQL Databases', icon: FaDatabase, color: 'text-blue-400' },
    { name: 'API Development', icon: SiExpress, color: 'text-gray-400' },
    { name: 'Docker & CI/CD', icon: FaDocker, color: 'text-blue-500' },
    { name: 'Git & GitHub', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'Node.js & Express', icon: FaNodeJs, color: 'text-green-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main BA Skills Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 font-mono">
              <span className="text-green-400">{'<'}</span>Business Analysis<span className="text-green-400">{' />'}</span>
            </h2>
            <p className="text-gray-400 text-center mb-4 max-w-2xl mx-auto font-mono text-sm">
              // Core Competencies & Strategic Skills
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-12 rounded-full"></div>

            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
              {baSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${skill.bg} border border-slate-700 hover:border-green-400/50 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 group cursor-pointer`}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <skill.icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform`} />
                    <h3 className={`font-semibold text-white group-hover:${skill.color} transition-colors`}>{skill.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 p-8 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/30 rounded-xl backdrop-blur-sm"
            >
              <h4 className="text-lg font-bold text-green-300 mb-4 flex items-center">
                <span className="text-2xl mr-3">⭐</span> Business Analyst Expertise
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <p>✓ Stakeholder requirement gathering & documentation</p>
                <p>✓ Cost-benefit analysis & ROI modeling</p>
                <p>✓ Business process improvement & optimization</p>
                <p>✓ Competitive benchmarking & market positioning</p>
                <p>✓ Data-driven decision making & insights</p>
                <p>✓ Strategic planning & implementation roadmaps</p>
              </div>
            </motion.div>
          </div>

          {/* Alternative Skills Section */}
          <div className="border-t border-slate-700 pt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-400 mb-4 font-mono">
              <span className="text-cyan-400">{'<'}</span>Also Skilled In<span className="text-cyan-400">{' />'}</span>
            </h3>
            <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto font-mono text-xs">
              // Software Development & Full-Stack Technologies
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {devSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-800/40 border border-slate-700 hover:border-cyan-500/50 rounded-lg p-4 text-center transition-all duration-300 group"
                >
                  <skill.icon className={`text-3xl ${skill.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <p className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
