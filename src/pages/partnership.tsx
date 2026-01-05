// CMYK(82, 96, 7, 0)

// RGB(0,154,160)

// 009a3c


import React, { useState, useEffect} from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  Building, 
  Heart,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle,
  Target,
  Lightbulb,
  Handshake
} from 'lucide-react';
// Types for our data
interface PartnershipInfo {
  partnership_models: Array<{
    name: string;
    description: string;
    link_to_model?: string;
    implied_model_characteristics?: string;
  }>;
  benefits: string[];
  partner_testimonials: Array<{
    author: string;
    title: string;
    quote: string;
  }>;
  contact_information: Array<{
    type: string;
    email?: string;
    phone?: string;
  }>;
}
interface PartnershipModel {
  partnership_model_information: {
    title: string;
    methodology_framework: {
      name: string;
      purpose: string;
      components: string[];
      core_belief: string;
      alliance_benefits: string[];
    };
    offerings: {
      target_audience: string;
      services: Array<{
        category: string;
        details: string[];
      }>;
    };
  };
  impact_statistics: {
    countries: number;
    states: number;
    projects: string;
    individuals_reached: string;
  };
}
interface Project {
  project_name: string;
  partner: string;
  timeline: string;
  project_details: string;
  idobro_role: string;
  outcomes: string;
}
interface Testimonial {
  quote: string;
  speaker_name: string;
  speaker_title: string;
}
interface Partner {
  name: string;
  categories: string[];
  description?: string;
}
const PartnershipPage: React.FC = () => {
  const [partnershipInfo, setPartnershipInfo] = useState<PartnershipInfo | null>(null);
  const [partnershipModel, setPartnershipModel] = useState<PartnershipModel | null>(null);
  const [projects, setProjects] = useState<Project[]>([
    {
    "project_name": "Sustainable Communities Initiative",
    "partner": "GreenEarth Foundation",
    "timeline": "2022 - 2024",
    "project_details": "A multi-stakeholder program aimed at building sustainable housing and promoting renewable energy adoption in semi-urban regions.",
    "idobro_role": "Designed community engagement strategy, facilitated training workshops, and monitored sustainability metrics.",
    "outcomes": "200 eco-friendly homes built, 500 families trained in renewable energy usage, 30% reduction in local carbon footprint."
  },
  {
    "project_name": "Digital Literacy for Women",
    "partner": "TechForAll Pvt. Ltd.",
    "timeline": "2021 - 2023",
    "project_details": "A grassroots initiative to empower women in rural areas with digital literacy skills to access education and employment opportunities.",
    "idobro_role": "Developed curriculum, coordinated trainers, and managed on-ground operations.",
    "outcomes": "Over 3,000 women trained, 40% gained employment or started businesses using digital tools."
  }
  ]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
    quote: "This service exceeded all my expectations. Truly outstanding!",
    speaker_name: "Aarav Mehta",
    speaker_title: "Founder, Mehta Solutions"
  },
  {
    quote: "An essential tool for our daily operations. Highly recommended.",
    speaker_name: "Sneha Rao",
    speaker_title: "COO, NextGen Corp"
  },
  {
    quote: "Their team is professional, responsive, and incredibly skilled.",
    speaker_name: "Rohan Sharma",
    speaker_title: "CTO, Innovatech"
  },
  {
    quote: "Our productivity improved by 40% after adopting their platform.",
    speaker_name: "Priya Desai",
    speaker_title: "Product Manager, VisionSoft"
  }
  ]);
  const [partners, setPartners] = useState<Partner[]>([]);
  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load partnership info
        const url='https://redesign-i-do-bro.onrender.com/';
        const infoResponse = await fetch('/data/idobro_partnership_info.json');
        const infoData = await infoResponse.json();
        setPartnershipInfo(infoData);
        // Load partnership model
        const modelResponse = await fetch('/data/idobro_partnership_model.json');
        const modelData = await modelResponse.json();
        setPartnershipModel(modelData);
        // Load projects
        const projectsResponse = await fetch(`${url}/partnership_success`);
        console.log(projectsResponse);
        const projectsData = await projectsResponse.json();
        setProjects(projectsData.key_partnership_projects || []);
        // Load testimonials
        const testimonialsResponse = await fetch(`${url}/partners_voice`);
        const testimonialsData = await testimonialsResponse.json();
        setTestimonials(testimonialsData.testimonials || []);
        // Load partners
        const partnersResponse = await fetch(`${url}/partners`);
        const partnersData = await partnersResponse.json();
        setPartners(partnersData.partners || []);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection partnershipModel={partnershipModel} />
      
      {/* Partnership Model Section */}
      <PartnershipModelSection partnershipModel={partnershipModel} />
      
      {/* Case Studies Section */}
      <CaseStudiesSection projects={projects} />
      
      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} partnershipInfo={partnershipInfo} />
      
      {/* Partners Gallery */}
      <PartnersGallerySection partners={partners} />
      
      {/* Contact Section */}
      <ContactSection partnershipInfo={partnershipInfo} />
    </div>
  );
};
// Hero Section Component
const HeroSection: React.FC<{ partnershipModel: PartnershipModel | null }> = ({ partnershipModel }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const impactStats = [
    { icon: Globe, value: "7", label: "Countries", color: "text-green-600" },
    { icon: Building, value: "22", label: "Indian States", color: "text-green-600" },
    { icon: Users, value: "150+", label: "Projects", color: "text-purple-600" },
    { icon: TrendingUp, value: "540+", label: "Institutions", color: "text-red-600" },
    { icon: Heart, value: "650,000+", label: "Individuals Reached", color: "text-pink-600" },
    { icon: Award, value: "100+", label: "Organizations Partnered", color: "text-indigo-600" }
  ];
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dhs64xefe/image/upload/v1757680204/partnership_atc70a.png" 
          alt="Partnership" 
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-green-900/70 to-slate-800/80"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block">
              Partnership
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Resource optimisation and scaling impact
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <button className="group bg-gradient-to-r from-green-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Explore Partnership Opportunities
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};
// Partnership Model Section Component
const PartnershipModelSection: React.FC<{ partnershipModel: PartnershipModel | null }> = ({ partnershipModel }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  if (!partnershipModel) return null;
  const { methodology_framework, offerings } = partnershipModel.partnership_model_information;
  const modelFeatures = [
    {
      icon: Target,
      title: "Idobro Landscaping Tool",
      description: methodology_framework.purpose,
      color: "bg-blue-50 text-green-600 border-blue-200"
    },
    { 
      icon: Users,
      title: "Ecosystem Model", 
      description: "Helps identify challenges and capabilities required around a specific issue or community.",
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      icon: Lightbulb,
      title: "Program Planner Assistance",
      description: "Helps identify potential partners and their motivations for collaboration.",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      icon: Handshake,
      title: "Market-based Solutions",
      description: "Identifies win-win propositions for all stakeholder groups.",
      color: "bg-orange-50 text-orange-600 border-orange-200"
    }
  ];
  return (
    <div className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Partnership <span className="text-green-600">Methodology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {methodology_framework.core_belief}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {modelFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-xl border-2 ${feature.color} hover:shadow-lg transition-all duration-300`}
            >
              <feature.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Offerings for {offerings.target_audience}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="text-center"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.category}</h4>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center justify-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
// Case Studies Section Component
// Updated Case Studies Section with better loading handling
const CaseStudiesSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!projects || projects.length === 0) {
    return (
      <div className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900">Loading Projects...</h2>
      </div>
    );
  }

  const featuredProjects = projects.slice(0, 6);
  return (
    <div className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partnership <span className="text-green-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our collaborative approach has created meaningful impact across diverse sectors and geographies.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.project_name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                <img 
                  src="/images/collaboration.jpg" 
                  alt={project.project_name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{project.partner}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {project.project_name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.project_details}
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </div>
  );
};
// Project Modal Component
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-bold text-gray-900">{project.project_name}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">Partner</h4>
            <p className="text-gray-700">{project.partner}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">Timeline</h4>
            <p className="text-gray-700">{project.timeline}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">Project Details</h4>
            <p className="text-gray-700">{project.project_details}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">Idobro's Role</h4>
            <p className="text-gray-700">{project.idobro_role}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">Outcomes</h4>
            <p className="text-gray-700">{project.outcomes}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
// Testimonials Section Component
const TestimonialsSection: React.FC<{ 
  testimonials: Testimonial[]; 
  partnershipInfo: PartnershipInfo | null; 
}> = ({ testimonials, partnershipInfo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // Combine testimonials from both sources
const allTestimonials: Testimonial[] = [
  ...testimonials,
  ...(partnershipInfo?.partner_testimonials.map(t => ({
    quote: t.quote,
    speaker_name: t.author,
    speaker_title: t.title
  })) || [])
];
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner <span className="text-green-600">Voices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our valued partners about their experience working with Idobro.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.speaker_name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl text-green-600 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.speaker_name}</p>
                <p className="text-sm text-gray-600">{testimonial.speaker_title}</p>
              </div>
            </motion.div>
          ))}
        </div> 
      </div>
    </div>
  );
};
// Partners Gallery Section Component
const PartnersGallerySection: React.FC<{ partners: Partner[] }> = ({ partners }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const additionalPartners = [
    "UNICEF", "British Council", "Hindustan Unilever Limited", 
    "Glenmark Foundation", "Tata Capital", "WeConnect International",
    "Kotak Education Foundation", "Adani Foundation", "Swedish Institute"
  ];
  return (
    <div className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted <span className="text-green-600">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations across corporate, government, academic, and NGO sectors.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center"
        >
          {additionalPartners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 text-center"
            >
              <div className="w-full h-16 bg-gradient-to-r from-green-100 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{partner.charAt(0)}</span>
              </div>
              <p className="text-sm font-medium text-gray-900">{partner}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to join our network of impactful partnerships?
          </p>
          <button className="bg-gradient-to-r from-green-100 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-200 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </div>
  );
};
// Contact Section Component
const ContactSection: React.FC<{ partnershipInfo: PartnershipInfo | null }> = ({ partnershipInfo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@idobro.com", "hema.ganachari@idobro.com"],
      color: "text-green-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["022-28513880"],
      color: "text-green-600"
    }
  ];
  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 to-blue-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create <span className="text-green-400">Impact Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to forge a partnership that drives systemic change? Get in touch with our team.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <div key={method.title} className="flex items-start space-x-4">
                <method.icon className={`w-8 h-8 ${method.color} mt-1`} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-gray-300">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Partnership Inquiry</h3>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Organization Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Partnership Type</option>
                  <option value="corporate">Corporate Partnership</option>
                  <option value="government">Government Partnership</option>
                  <option value="academic">Academic Partnership</option>
                  <option value="ngo">NGO Partnership</option>
                </select>
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your partnership vision..." 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-100 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Submit Partnership Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default PartnershipPage;