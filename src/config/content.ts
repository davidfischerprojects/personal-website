/**
 * Central content configuration for the personal website.
 * Update this file with your brand information, services, and links.
 * This serves as the single source of truth for all content displayed on the site.
 */

export const brandConfig = {
  // Personal Info
  name: "David Fischer",
  brandName: "FISCHER PROJECTS",
  title: "Fractional BD & GTM Services",
  tagline: "Helping Technical Teams Turn Complex Innovation into Market Wins",
  email: "david@fischerprojects.com",
  location: "Remote, World Wide",

  // Social & Web Links
  links: {
    currentWebsite: "https://www.fischerprojects.com/",
    linkedin: "https://www.linkedin.com/in/davidfischer-bd",
    github: "", // Add if applicable
    twitter: "", // Add if applicable
  },

  // Services
  services: [
    {
      title: "Fractional Business Development & GTM Strategy",
      description: "Develop and execute practical customer acquisition plans, GTM strategies, and growth playbooks.",
      icon: "TrendingUp",
    },
    {
      title: "Technical Pre-Sales & Product Framing",
      description: "Translate complex technical capabilities into use-case-driven messaging and customer-centric positioning.",
      icon: "Code",
    },
    {
      title: "Customer Discovery & Market Feedback Loops",
      description: "Identify root customer pain points, validate solutions, and feed learnings into product and engineering teams.",
      icon: "Users",
    },
    {
      title: "Deal Structuring & Strategic Sales Support",
      description: "Navigate enterprise sales cycles, lead pilots and demos, and help close strategic accounts.",
      icon: "Handshake",
    },
  ],

  // About Section
  about: {
    headline: "Engineer-turned-BD Leader",
    description: "I bridge the gap between engineering and the market—translating deep tech into customer wins. With a background in electrical engineering and 10+ years in sales, business development, and GTM, I help early and growth-stage companies shape strategy, win pilots, and land key accounts.",
    highlights: [
      "Built and led Swift Navigation's global automotive BD function from the ground up across North America, Europe, and Asia",
      "Closed major OEMs including Tesla, BMW, and Toyota at director and VP level",
      "Owned Swift's first major production program win — volume leader in the global GNSS market",
      "10+ years spanning electrical engineering, field applications, product management, and global BD",
      "Technical background: Analog Field Applications Engineer at Texas Instruments and Research Assistant at NASA-JPL",
      "Cross-functional operator across sales, BD, product, and field engineering"
    ],
  },

  // Projects / Portfolio
  projects: [
    {
      title: "",
      description: "",
      tags: [],
      link: "",
      image: "",
    },
  ],

  // Skills
  skills: [
    {
      category: "",
      items: [
        // e.g., { name: "Project Management", proficiency: 90 }
      ],
    },
  ],

  // Testimonials (optional)
  testimonials: [
    {
      quote: "",
      author: "",
      role: "",
      company: "",
    },
  ],
};

export type BrandConfig = typeof brandConfig;
