import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ========================================
  // BUSINESS ANALYST CASE STUDIES
  // ========================================
  const caseStudies = [
    {
      title: 'YMe.lk – AI-Powered SME Digitalization Platform',
      description:
        'Led comprehensive market analysis and business model design for AI-powered platform targeting SME digitalization. Developed 3-tier subscription pricing model with feature differentiation. Built financial projections for 10K+ DAU with detailed break-even analysis. Created user conversion funnels and growth forecasting models for investor presentations.',
      impact: 'Enabled structured go-to-market strategy and investor communications',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
      tags: ['Business Modeling', 'Financial Analysis', 'Pricing Strategy', 'Growth Forecasting', 'AI Platform'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'ROUTELY – Smart Courier Marketplace',
      description:
        'Conducted comprehensive logistics market analysis identifying last-mile delivery pain points and market opportunities. Designed end-to-end operational workflows covering booking, driver onboarding, route optimization, and payment settlement. Performed competitive benchmarking against 5+ platforms. Created detailed business proposal and feasibility assessment.',
      impact: 'Delivered market-validated business model with operational roadmap',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
      tags: ['Process Modeling', 'Market Analysis', 'Competitive Benchmarking', 'Operations Design'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Elderly Care Outsourcing Platform – MVP',
      description:
        'Scoped and designed MVP feature set for caregiver marketplace addressing underserved elderly care sector. Designed intelligent matching algorithms with preference filtering and compatibility scoring. Produced detailed user journey maps for caregiver and client personas. Developed comprehensive platform architecture and requirements documentation.',
      impact: 'Defined clear MVP scope with user-centric workflows reducing development risk',
      image: 'https://images.unsplash.com/photo-1576091160399-88f08d3c5556?w=800&auto=format&fit=crop',
      tags: ['Healthcare Analysis', 'User Journey Design', 'MVP Scoping', 'Requirements Analysis'],
      github: '#',
      demo: '#',
      featured: true,
    },
  ];

  // ========================================
  // SOFTWARE DEVELOPMENT PROJECTS
  // ========================================
  const devProjects = [
    {
      title: 'tech_Pulse – University News Mobile App',
      description:
        'Developed mobile application delivering real-time university news and updates to students and staff. Integrated Firebase Realtime Database for instant content synchronization across devices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
      tags: ['Java', 'Android Studio', 'Firebase'],
      github: 'https://github.com/nidula6/Tech_Pulse.git',
      demo: '#',
      featured: true,
    },
    {
      title: 'Learning Management System',
      description:
        'Built MERN-stack web system for class management, attendance tracking, performance analytics, and communication. Implemented role-based access control and interactive data visualizations.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Material UI', 'Redux'],
      github: 'https://github.com/nidula6/LMS-New.git',
      demo: '#',
      featured: true,
    },
    {
      title: 'Library Management System',
      description:
        'Developed web application for book and member management with borrowing transactions. Features include secure authentication, fine tracking, and efficient inventory management.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/nidula6/Library_System.git',
      demo: '#',
      featured: false,
    },
    {
      title: 'Olly – Online Clothing Shop',
      description:
        'E-commerce platform for women\'s fashion with secure payments, advanced filtering, and responsive design. Admin dashboard includes real-time sales tracking, inventory management, and order analytics.',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop',
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/cycotechnolgies/Online-Clothing-Shop.git',
      demo: '#',
      featured: true,
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
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-3">
            Case Studies & Projects
          </h2>
          <p className="text-center text-indigo-300 mb-12 max-w-3xl mx-auto">
            Strategic business analysis initiatives and technical implementations demonstrating market-driven product development and platform optimization.
          </p>

          {/* Business Analysis Case Studies Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px bg-gradient-to-r from-transparent to-indigo-400 flex-1"></div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>📊</span> Business Analysis Case Studies
              </h3>
              <div className="h-px bg-gradient-to-l from-transparent to-indigo-400 flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-indigo-500/50 hover:border-indigo-400 transition-all duration-300 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      CASE STUDY
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-xs font-semibold px-3 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 flex-1">
                      {project.description}
                    </p>
                    <div className="mb-4 p-3 bg-indigo-500/10 border border-indigo-400/30 rounded-lg">
                      <p className="text-indigo-300 text-xs font-semibold">
                        💡 Impact: <span className="text-gray-300 font-normal">{project.impact}</span>
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-indigo-400/20 text-indigo-300 px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Software Development Projects Section */}
          <div className="mt-20 pt-12 border-t border-slate-700">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px bg-gradient-to-r from-transparent to-blue-400 flex-1"></div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>💻</span> Technical Development
              </h3>
              <div className="h-px bg-gradient-to-l from-transparent to-blue-400 flex-1"></div>
            </div>
            <p className="text-gray-400 text-center mb-10 text-sm">Full-stack engineering projects demonstrating technical versatility and implementation capabilities</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col"
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
                      <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-slate-700/50 text-blue-300 px-2.5 py-1 rounded"
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
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                      >
                        <FaGithub size={18} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-400/30 rounded-xl"
          >
            <h4 className="text-xl font-bold text-white mb-3">Ready to collaborate?</h4>
            <p className="text-gray-300 mb-6">Let's discuss how I can help optimize your business processes or develop data-driven solutions.</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-200 transform hover:scale-105"
            >
              <span>Get In Touch</span>
              <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
