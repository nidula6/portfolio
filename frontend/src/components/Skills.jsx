import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaPhp,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiRedis,
  SiHtml5,
  SiCss3,
  SiC,
  SiJenkins,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'React', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
        { name: 'Python', icon: FaPython, color: 'text-blue-400' },
        { name: 'PHP', icon: FaPhp, color: 'text-purple-400' },
        { name: 'C', icon: SiC, color: 'text-blue-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
        { name: 'Jenkins', icon: SiJenkins, color: 'text-red-500' },
        { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      ],
    },
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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 font-mono">
            <span className="text-green-400">{'<'}</span>Skills & <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span><span className="text-green-400">{' />'}</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-mono text-sm">
            // Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-6 text-center font-mono">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="flex items-center space-x-4 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-all duration-200 group"
                    >
                      <skill.icon className={`text-3xl ${skill.color}`} />
                      <span className="text-gray-300 font-medium font-mono text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
