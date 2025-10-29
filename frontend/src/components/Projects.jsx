import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ========================================
  // ADD YOUR PROJECTS HERE
  // ========================================
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Built with modern technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://yourproject.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team workspaces, and project tracking. Features drag-and-drop interface and notification system.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/yourusername/taskapp',
      demo: 'https://yourproject.com',
      featured: true,
    },
    {
      title: 'AI Chat Application',
      description:
        'An intelligent chatbot application powered by AI with natural language processing, context awareness, and multi-language support.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop',
      tags: ['Python', 'React', 'OpenAI', 'Redis'],
      github: 'https://github.com/yourusername/aichat',
      demo: 'https://yourproject.com',
      featured: false,
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard with forecasts, interactive maps, and weather alerts. Features location-based services and historical data visualization.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
      tags: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
      github: 'https://github.com/yourusername/weather',
      demo: 'https://yourproject.com',
      featured: false,
    },
    {
      title: 'Social Media Analytics',
      description:
        'Analytics dashboard for social media platforms with real-time metrics, engagement tracking, and comprehensive reporting tools.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'D3.js'],
      github: 'https://github.com/yourusername/analytics',
      demo: 'https://yourproject.com',
      featured: false,
    },
    {
      title: 'Fitness Tracker',
      description:
        'A comprehensive fitness tracking application with workout plans, progress monitoring, nutrition logging, and goal setting features.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop',
      tags: ['React Native', 'Express', 'MySQL', 'AWS'],
      github: 'https://github.com/yourusername/fitness',
      demo: 'https://yourproject.com',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 font-mono">
            <span className="text-green-400">{'<'}</span>Featured <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Projects</span><span className="text-green-400">{' />'}</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-mono text-sm">
            // Some of my recent work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black text-xs font-semibold px-3 py-1 rounded font-mono">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-200 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 font-mono">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-slate-700/50 text-green-300 px-3 py-1 rounded font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-200 font-mono text-sm"
                    >
                      <FaGithub size={20} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-200 font-mono text-sm"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add More Projects CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Want to see more?</p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800 text-purple-400 rounded-full font-medium hover:bg-slate-700 transition-all duration-200 border border-slate-700 hover:border-purple-500"
            >
              <FaGithub size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
