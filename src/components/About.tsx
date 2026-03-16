import { motion } from 'framer-motion';
import { Briefcase, Globe, Award, GraduationCap } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Briefcase, label: '10+ Years', description: 'BD, Sales & Engineering' },
    { icon: Globe, label: 'Global Reach', description: 'NA, Europe & Asia' },
    { icon: Award, label: 'Major Brand Experience', description: 'Tesla, BMW, Toyota' },
    { icon: GraduationCap, label: 'B.S. EE', description: 'North Dakota State' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/IMG_8988_Original.jpg"
                  alt="David Fischer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('bg-gradient-to-br', 'from-primary-600', 'to-primary-800', 'flex', 'items-center', 'justify-center');
                      parent.innerHTML = '<span class="text-white text-6xl md:text-7xl font-bold">DF</span>';
                    }
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-200 rounded-full opacity-30"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-30"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary-800 mb-4">
                Engineer-Turned-BD Leader
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I bridge the gap between engineering and the market — translating deep tech into customer wins. 
                With a background in electrical engineering and 10+ years in sales, business development, and GTM, 
                I help early and growth-stage companies shape strategy, win pilots, and land key accounts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                My value lies in understanding both sides: what makes a product technically strong and what makes 
                it commercially viable. I've led global BD teams, closed major OEMs like Tesla, and worked across 
                robotics, mobility, and software-enabled hardware.
              </p>
              <p className="text-gray-500 leading-relaxed italic">
                When not closing deals, I'm a sponsored pro kitesurfer — pushing performance at the world's most 
                iconic spots and collaborating with leading gear brands worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                  <stat.icon className="w-5 h-5 text-accent-600 mb-2" />
                  <h4 className="font-semibold text-primary-800 text-sm">{stat.label}</h4>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
