import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold tracking-wide text-white mb-2">FISCHER PROJECTS</h3>
            <p className="text-gray-400 text-sm mb-4">
              Fractional BD & GTM Strategy for Technical Companies.
              Helping technical teams turn complex innovation into market wins.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/davidfischer-bd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:david@fischerprojects.com"
                className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Get In Touch</h4>
            <p className="text-gray-300 text-sm mb-3">
              Looking for a fractional BD partner to help your technical team win strategic deals?
            </p>
            <a
              href="mailto:david@fischerprojects.com"
              className="text-accent-400 hover:text-accent-300 transition-colors duration-200 text-sm"
            >
              david@fischerprojects.com
            </a>
          </motion.div>
        </div>

        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-sm mb-4 md:mb-0"
            >
              &copy; {currentYear} Fischer Projects. All rights reserved.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-500 hover:text-accent-400 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
              <span className="text-sm">Back to top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
