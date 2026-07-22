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
  FaTable,
  FaCalculator,
  FaMicrosoft,
} from 'react-icons/fa';
import {
  SiTableau,
  SiPython,
  SiPostgresql,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreBASkills = [
    { name: 'Requirements Analysis', icon: FaFileAlt, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { name: 'Process Optimization', icon: FaProjectDiagram, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'Financial Modeling', icon: FaCalculator, color: 'text-teal-400', bg: 'bg-teal-500/10' },
    { name: 'Market Research', icon: FaSearch, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { name: 'User Journey Design', icon: FaUsers, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'ROI & Feasibility', icon: FaChartLine, color: 'text-teal-400', bg: 'bg-teal-500/10' },
  ];

  const baTools = [
    { name: 'SQL', icon: FaDatabase, color: 'text-blue-500', desc: 'Data querying' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-600', desc: 'Data analysis' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-indigo-600', desc: 'Databases' },
  ];

  const methodologies = [
    { name: 'Agile/Scrum', desc: 'Sprint planning & execution' },
    { name: 'BPMN', desc: 'Process mapping & modeling' },
    { name: 'User Story Mapping', desc: 'Feature prioritization' },
    { name: 'Stakeholder Analysis', desc: 'Requirement validation' },
    { name: 'Data Analysis', desc: 'Statistical insights' },
    { name: 'Competitive Analysis', desc: 'Market positioning' },
  ];

  const devSkills = [
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'SQL', icon: FaDatabase, color: 'text-blue-400' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-600' },
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
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-3">
            Skills & Competencies
          </h2>
          <p className="text-center text-indigo-300 mb-12 max-w-3xl mx-auto">
            Strategic business analysis capabilities combined with technical proficiency to drive data-informed decisions.
          </p>

          {/* Core BA Skills Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <span>🎯</span> Core Business Analysis Skills
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
              {coreBASkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`${skill.bg} border border-slate-700 hover:border-indigo-400/70 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 group cursor-pointer`}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <skill.icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors">{skill.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Business Tools & Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <span>🛠️</span> Business Intelligence & Analytics Tools
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
              {baTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-slate-800/60 border border-slate-700 hover:border-blue-400/70 rounded-xl p-6 transition-all duration-300 group text-center"
                >
                  <tool.icon className={`text-4xl ${tool.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <p className="text-white font-semibold text-sm mb-1">{tool.name}</p>
                  <p className="text-gray-400 text-xs">{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Methodologies */}
          <div className="mb-16 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-400/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span>📋</span> Methodologies & Frameworks
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {methodologies.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-800/50 border border-indigo-400/30 hover:border-indigo-300/60 rounded-lg p-4 transition-all"
                >
                  <p className="text-indigo-300 font-semibold text-sm mb-1">✓ {method.name}</p>
                  <p className="text-gray-400 text-xs">{method.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="border-t border-slate-700 pt-12">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <span>💻</span> Technical Proficiency
            </h3>
            <p className="text-gray-400 text-center mb-8 text-sm">Full-stack development capabilities for rapid prototyping and technical validation</p>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {devSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 rounded-lg p-4 text-center transition-all duration-300 group"
                >
                  <skill.icon className={`text-3xl ${skill.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <p className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors font-medium">{skill.name}</p>
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
