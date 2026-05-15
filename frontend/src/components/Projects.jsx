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
        'Designed a three-tier subscription model with feature differentiation and pricing strategy. Built scalable financial models projecting 10,000+ DAU with break-even timelines. Developed multi-stage user conversion funnels and growth forecasting models for investor presentations.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
      tags: ['Business Modeling', 'Financial Analysis', 'Pricing Strategy', 'Growth Forecasting', 'AI Platform'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'ROUTELY – Smart Courier Marketplace',
      description:
        'Conducted comprehensive logistics market analysis identifying last-mile delivery inefficiencies. Designed end-to-end operational workflows covering booking, driver onboarding, route matching, and payment settlement. Performed competitor benchmarking and created investor-facing business proposals.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
      tags: ['Process Modeling', 'Market Analysis', 'Competitive Benchmarking', 'Workflow Documentation'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Elderly Care Outsourcing Platform – MVP',
      description:
        'Scoped MVP feature set for caregiver marketplace targeting underserved elderly care sector. Designed caregiver-client matching workflows with preference filtering and compatibility scoring. Produced detailed user journey maps for three personas and platform architecture documentation.',
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
        'Developed a mobile application that delivers real-time university news and updates to students and staff. Integrated Firebase Realtime Database for instant content.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
      tags: ['Java', 'Android Studio', 'Firebase'],
      github: 'https://github.com/nidula6/Tech_Pulse.git',
      demo: '#',
      featured: true,
    },
    {
      title: 'Learning Management System',
      description:
        'Developed a MERN-based web system for managing classes, attendance, performance, and communication with role-based access and data visualization.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Material UI', 'Redux', 'Tailwind CSS'],
      github: 'https://github.com/nidula6/LMS-New.git',
      demo: '#',
      featured: true,
    },
    {
      title: 'Library_System – Library Management Web App',
      description:
        'Developed a web application to manage books, members, and borrowing transactions. Implemented secure user authentication, fine tracking, and efficient book and member management features.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/nidula6/Library_System.git',
      demo: '#',
      featured: false,
    },
    {
      title: 'Olly – Online Clothing Shop',
      description:
        'Developing an e-commerce web application for women\'s fashion with secure payments, size filters, and responsive design. Includes an admin dashboard for product, order, and user management, plus real-time sales tracking and inventory alerts.',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop',
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-2 font-mono">
            <span className="text-green-400">{'<'}</span>Case <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Studies</span><span className="text-green-400">{' />'}</span>
          </h2>
          <div className="flex justify-center mb-12">
            <span className="inline-block bg-gradient-to-r from-green-400 to-cyan-400 text-black text-xs font-bold px-4 py-1 rounded-full mb-4">
              ⭐ BUSINESS ANALYST EXPERTISE ⭐
            </span>
          </div>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-mono text-sm">
            // Strategic Business Analysis Projects & Digital Platform Initiatives
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {caseStudies.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-green-500/50 hover:border-green-400 transition-all duration-300 shadow-lg shadow-green-500/10 hover:shadow-green-500/20"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full font-mono">
                    BA PROJECT
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded font-mono">
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
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Software Development Projects Section */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 font-mono">
              <span className="text-green-400">{'<'}</span>Software <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Development</span><span className="text-green-400">{' />'}</span>
            </h3>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-mono text-sm">
              // Full-stack & Software Engineering Projects
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300"
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
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-xs font-semibold px-3 py-1 rounded font-mono">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200 font-mono">
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
                          className="text-xs bg-slate-700/50 text-cyan-300 px-3 py-1 rounded font-mono"
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
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 font-mono text-sm"
                      >
                        <FaGithub size={20} />
                        <span className="text-sm">Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Add More Projects CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Interested in collaborating or learning more?</p>
            <a
              href="#contact"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-black rounded-full font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-200"
            >
              <span>Let's Discuss Your Project</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
