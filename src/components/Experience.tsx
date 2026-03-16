import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
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

  const experiences = [
    {
      period: "May 2023 — Present",
      title: "Fractional BD & GTM Strategist",
      company: "Fischer Projects",
      summary: "Leading fractional BD and GTM engagements for technical and deep-tech companies. Helping early and growth-stage teams shape go-to-market strategy, win pilots, and land key accounts across robotics, mobility, and software-enabled hardware.",
      highlight: true,
    },
    {
      period: "2023 — Present",
      title: "Sponsored Pro Kitesurfer",
      company: "",
      summary: "Competing and collaborating with leading gear brands at the world's most iconic kite spots worldwide.",
      highlight: false,
    },
    {
      period: "2018 — 2023",
      title: "WW Manager, Automotive Business Development",
      company: "Swift Navigation",
      summary: "Built and led the global automotive BD function from the ground up. Owned Swift's first major production program win. Closed deals with Tesla, BMW, Toyota and other major OEMs across NA, Europe, and Asia.",
      highlight: false,
    },
    {
      period: "2017 — 2018",
      title: "Sales Executive, Robotics & Emerging Markets",
      company: "Swift Navigation",
      summary: "One of Swift's first dedicated sales hires (~30 employees). Opened and grew the Robotics sector, leading outreach, technical education, and early pilot design.",
      highlight: false,
    },
    {
      period: "2016 — 2017",
      title: "Product Manager",
      company: "Texas Instruments",
      summary: "Managed global positioning and sales strategy for sensing products. Supported global sales with messaging, pricing guidance, and training tools.",
      highlight: false,
    },
    {
      period: "2015 — 2016",
      title: "Technical Account Manager — Tesla Motors",
      company: "Texas Instruments",
      summary: "Led key account activities for Tesla across ADAS, infotainment, and energy. Central liaison between Tesla and TI engineering and procurement.",
      highlight: false,
    },
    {
      period: "2013 — 2015",
      title: "Analog Field Applications Engineer",
      company: "Texas Instruments",
      summary: "Supported a $35M OEM customer base across EV, storage, consumer, and industrial sectors. Secured key design wins in analog and power products.",
      highlight: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Career <span className="gradient-text">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1.5 mt-6 rounded-full border-2 border-accent-500 bg-white z-10"></div>

                <div className="md:w-1/2"></div>

                <div className={`md:w-1/2 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-white rounded-xl p-6 shadow-md border ${
                    exp.highlight ? 'border-accent-300 bg-accent-50' : 'border-gray-100'
                  } hover:shadow-lg transition-shadow duration-300`}>
                    <span className="text-xs font-semibold tracking-wider uppercase text-accent-600">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-semibold text-primary-800 mt-1">
                      {exp.title}
                    </h3>
                    {exp.company && (
                      <p className="text-sm font-medium text-primary-500 mb-2">{exp.company}</p>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            B.S. Electrical Engineering — North Dakota State University (2008 – 2012)
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
