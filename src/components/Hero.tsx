import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-16 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants}>
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-accent-600 mb-4">
            Fractional BD & GTM Strategy
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-800 mb-6">
            David <span className="gradient-text">Fischer</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Helping technical teams turn complex innovation into market wins. I bridge the gap between 
            engineering and the market — translating deep tech into customer wins, strategic deals, and revenue growth.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:david@fischerprojects.com"
            className="btn-primary"
          >
            Get In Touch
          </a>
          <a
            href="#services"
            className="btn-secondary"
          >
            View Services
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/davidfischer-bd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent-600 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:david@fischerprojects.com"
            className="text-gray-500 hover:text-accent-600 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="text-gray-400 hover:text-accent-600 transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
