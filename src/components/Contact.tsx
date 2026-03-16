import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "david@fischerprojects.com",
      href: "mailto:david@fischerprojects.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/davidfischer-bd",
      href: "https://www.linkedin.com/in/davidfischer-bd"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote, World Wide",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Let's <span className="gradient-text">Talk</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Looking for a fractional BD partner to help your technical team win strategic deals? 
            I'd love to hear about what you're building.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-4 mb-10">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-5 bg-white rounded-xl hover:shadow-md transition-all duration-200 border border-gray-100"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center border border-accent-100">
                  <info.icon className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{info.label}</p>
                  <p className="text-primary-800 font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <a
              href="mailto:david@fischerprojects.com"
              className="btn-primary text-lg px-10 py-4"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
