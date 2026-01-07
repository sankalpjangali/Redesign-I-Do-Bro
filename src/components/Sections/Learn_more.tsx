import React, { useEffect, useState } from 'react';
import { Building2, Users, BookOpen, Award, Rocket, Target, TrendingUp, Globe, Code, Lightbulb } from 'lucide-react';

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface OrganizationData {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  stats: StatItem[];
  programs: string[];
  ctaText: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

interface ProgramProps {
  title: string;
  delay: number;
  primaryColor: string;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  users: Users,
  bookOpen: BookOpen,
  award: Award,
  rocket: Rocket,
  target: Target,
  trendingUp: TrendingUp,
  globe: Globe,
  code: Code,
  lightbulb: Lightbulb,
  building: Building2,
};

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, delay }) => {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={delay}
      className="flex flex-col items-center text-white"
    >
      <div className="mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
};

const ProgramItem: React.FC<ProgramProps> = ({ title, delay, primaryColor }) => {
  return (
    <div 
      data-aos="fade-right" 
      data-aos-delay={delay}
      className="transition-all duration-300 px-6 py-4 rounded-lg mb-3 cursor-pointer"
      style={{
        backgroundColor: `${primaryColor}10`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${primaryColor}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `${primaryColor}10`;
      }}
    >
      <p className="text-gray-700">{title}</p>
    </div>
  );
};

// Predefined organization data
const organizationTemplates: { [key: string]: OrganizationData } = {
  koru: {
    name: 'KORU Centre for Systems Innovation',
    tagline: 'Building Future Systems Thinkers',
    description: 'A learning and innovation hub co-shaping the next generation of social impact leaders through systems thinking and collaborative design.',
    logo: 'building',
    primaryColor: '#7c3aed',
    secondaryColor: '#6366f1',
    stats: [
      { icon: 'users', value: '500+', label: 'Research Fellows' },
      { icon: 'bookOpen', value: '20+', label: 'Learning Modules' },
      { icon: 'award', value: '50+', label: 'Organizations' }
    ],
    programs: [
      'Systems thinking workshops',
      'Ecosystem design curriculum',
      'Leadership development programs',
      'Peer learning networks',
      'Research and knowledge creation'
    ],
    ctaText: 'Join KORU Programs'
  },
  techstart: {
    name: 'TechStart Innovation Hub',
    tagline: 'Empowering Tomorrow\'s Tech Leaders',
    description: 'A cutting-edge technology incubator fostering innovation and entrepreneurship in the digital age through mentorship and resources.',
    logo: 'rocket',
    primaryColor: '#0ea5e9',
    secondaryColor: '#06b6d4',
    stats: [
      { icon: 'rocket', value: '200+', label: 'Startups Launched' },
      { icon: 'code', value: '50+', label: 'Tech Workshops' },
      { icon: 'target', value: '95%', label: 'Success Rate' }
    ],
    programs: [
      'Startup accelerator programs',
      'Technical mentorship sessions',
      'Investor networking events',
      'Product development workshops',
      'Market strategy consulting'
    ],
    ctaText: 'Launch Your Startup'
  },
  greenearth: {
    name: 'GreenEarth Sustainability Institute',
    tagline: 'Creating a Sustainable Future',
    description: 'Leading environmental research and education center dedicated to building sustainable communities and combating climate change.',
    logo: 'globe',
    primaryColor: '#10b981',
    secondaryColor: '#059669',
    stats: [
      { icon: 'globe', value: '1000+', label: 'Projects Completed' },
      { icon: 'users', value: '75+', label: 'Partner Organizations' },
      { icon: 'trendingUp', value: '30%', label: 'Carbon Reduction' }
    ],
    programs: [
      'Climate action initiatives',
      'Sustainable agriculture training',
      'Renewable energy projects',
      'Environmental policy advocacy',
      'Community awareness campaigns'
    ],
    ctaText: 'Join the Movement'
  }
};

export default function DynamicLandingPage() {
  const [currentOrg, setCurrentOrg] = useState<string>('koru');
  const [data, setData] = useState<OrganizationData>(organizationTemplates.koru);

  useEffect(() => {
    setData(organizationTemplates[currentOrg]);
  }, [currentOrg]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data]);

  const getIcon = (iconName: string, size: number = 32) => {
    const IconComponent = iconMap[iconName] || Building2;
    return <IconComponent size={size} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        [data-aos="fade-up"].aos-animate {
          transform: translateY(0);
        }
        
        [data-aos="fade-right"] {
          transform: translateX(-30px);
        }
        
        [data-aos="fade-right"].aos-animate {
          transform: translateX(0);
        }
        
        [data-aos="zoom-in"] {
          transform: scale(0.9);
        }
        
        [data-aos="zoom-in"].aos-animate {
          transform: scale(1);
        }
      `}</style>

      {/* Organization Switcher */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex justify-center gap-4 flex-wrap">
          {Object.keys(organizationTemplates).map((org) => (
            <button
              key={org}
              onClick={() => setCurrentOrg(org)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                currentOrg === org
                  ? 'text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={{
                backgroundColor: currentOrg === org ? organizationTemplates[org].primaryColor : undefined
              }}
            >
              {organizationTemplates[org].name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div 
          data-aos="zoom-in"
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-colors duration-500"
          style={{ backgroundColor: `${data.primaryColor}20` }}
        >
          <div style={{ color: data.primaryColor }}>
            {getIcon(data.logo)}
          </div>
        </div>
        
        <h1 
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          {data.name}
        </h1>
        
        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="font-medium mb-4 transition-colors duration-500"
          style={{ color: data.primaryColor }}
        >
          {data.tagline}
        </p>
        
        <p 
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          {data.description}
        </p>
      </header>

      {/* Stats Section */}
      <section 
        className="py-12 transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${data.primaryColor}, ${data.secondaryColor})`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {data.stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={getIcon(stat.icon)}
                value={stat.value}
                label={stat.label}
                delay={(index + 1) * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 
          data-aos="fade-up"
          className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left"
        >
          Programs Offered
        </h2>
        
        <div className="max-w-2xl mx-auto md:mx-0">
          {data.programs.map((program, index) => (
            <ProgramItem
              key={index}
              title={program}
              delay={index * 100}
              primaryColor={data.primaryColor}
            />
          ))}
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-center mt-12"
        >
          <button 
            className="text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: data.primaryColor
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = data.secondaryColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = data.primaryColor;
            }}
          >
            {data.ctaText} →
          </button>
        </div>
      </section>
    </div>
  );
}