import { FaFireAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm flex items-center font-mono">
              <span className="text-green-400 mr-2">{'<'}</span>
             Portfolio  #{' '}
              <span className="text-green-400 ml-1 font-medium">Nidula_Jayawardhana</span>
              <span className="text-green-400 ml-2">{'/>'}</span>
            </p>
          </div>
          <div className="text-gray-400 text-sm font-mono">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
