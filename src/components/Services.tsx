import { motion } from 'framer-motion';
import { TrendingUp, Presentation, Users, Target } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: TrendingUp,
      title: "Fractional BD & GTM Strategy",
      description: "Develop and execute practical customer acquisition plans, GTM strategies, and growth playbooks.",
      deliverables: ["Go-to-market planning", "Customer acquisition strategy", "Growth playbooks", "Market entry roadmaps"],
    },
    {
      icon: Presentation,
      title: "Technical Pre-Sales & Product Framing",
      description: "Translate complex technical capabilities into use-case-driven messaging and customer-centric positioning.",
      deliverables: ["Technical messaging", "Customer-centric positioning", "Demo narratives", "Sales collateral"],
    },
    {
      icon: Users,
      title: "Customer Discovery & Market Feedback",
      description: "Identify root customer pain points, validate solutions, and feed learnings into product and engineering teams.",
      deliverables: ["Customer interviews", "Pain point analysis", "Solution validation", "Product feedback loops"],
    },
    {
      icon: Target,
      title: "Deal Structuring & Strategic Sales",
      description: "Navigate enterprise sales cycles, lead pilots and demos, and help close strategic accounts.",
      deliverables: ["Enterprise deal support", "Pilot program design", "Strategic account closing", "Pricing strategy"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-primary-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I work with early- to mid-stage technology companies looking to bridge engineering 
            excellence with commercial traction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center border border-accent-100">
                  <service.icon className="w-6 h-6 text-accent-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full border border-primary-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <a
            href="mailto:david@fischerprojects.com"
            className="btn-primary"
          >
            Let's Discuss Your Needs
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
