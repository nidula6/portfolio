import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 font-mono">
            <span className="text-green-400">{'<'}</span>About <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Me</span><span className="text-green-400">{' />'}</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl blur-xl opacity-20"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <div className="flex items-start space-x-3 mb-3">
                  <span className="text-green-400 font-mono text-sm">1</span>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    <span className="text-cyan-400">class</span> <span className="text-yellow-300">Developer</span> {'{'} 
                  </p>
                </div>
                <div className="flex items-start space-x-3 mb-3 ml-6">
                  <span className="text-green-400 font-mono text-sm">2</span>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    <span className="text-cyan-400">constructor</span>() {'{'}
                  </p>
                </div>
                <div className="flex items-start space-x-3 mb-3 ml-12">
                  <span className="text-green-400 font-mono text-sm">3</span>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    <span className="text-purple-400">this</span>.<span className="text-yellow-300">passion</span> = <span className="text-orange-400">"Full Stack Development"</span>;
                  </p>
                </div>
                <div className="flex items-start space-x-3 mb-3 ml-12">
                  <span className="text-green-400 font-mono text-sm">4</span>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    <span className="text-purple-400">this</span>.<span className="text-yellow-300">skills</span> = [<span className="text-orange-400">"Frontend"</span>, <span className="text-orange-400">"Backend"</span>, <span className="text-orange-400">"DevOps"</span>];
                  </p>
                </div>
                <div className="flex items-start space-x-3 mb-3 ml-12">
                  <span className="text-green-400 font-mono text-sm">5</span>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    <span className="text-purple-400">this</span>.<span className="text-yellow-300">mission</span> = <span className="text-orange-400">"Build scalable solutions"</span>;
                  </p>
                </div>
                <div className="flex items-start space-x-3 mb-3 ml-6">
                  <span className="text-green-400 font-mono text-sm">6</span>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">{'}'}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-mono text-sm">7</span>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">{'}'}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
