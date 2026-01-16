import React, { useEffect } from 'react';
import { Users, Briefcase, Handshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface StatCardProps {
  value: string;
  label: string;
}
  


const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="text-3xl font-bold text-teal-600 mb-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

interface VerticalSectionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  keyProgram: string;
  programName: string;
  focusAreas: string[];
  stats: { value: string; label: string }[];
  buttonText: string;
  buttonColor: string;
  link:string;
}

const VerticalSection: React.FC<VerticalSectionProps> = ({
  icon,
  title,
  subtitle,
  description,
  bgColor,
  keyProgram,
  programName,
  focusAreas,
  stats,
  buttonText,
  buttonColor,
  link
}) => {
  const navigate = useNavigate();
  return (
  <div className={`${bgColor} rounded-2xl p-8 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700`}>
    <div className="flex items-start gap-4 mb-6">
      <div className={`${bgColor === 'bg-teal-50' ? 'bg-teal-100' : bgColor === 'bg-purple-50' ? 'bg-purple-100' : 'bg-blue-100'} p-3 rounded-lg`}>
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>

    <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

    <div className="mb-6">
      <div className="text-sm font-semibold text-gray-500 mb-1">Key Program</div>
      <div className="text-lg font-bold text-gray-900">{keyProgram}</div>
      <div className="text-sm text-gray-600 mt-1">{programName}</div>
    </div>

    <div className="mb-6">
      <div className="text-sm font-semibold text-gray-500 mb-3">Focus Areas</div>
      <div className="flex flex-wrap gap-2">
        {focusAreas.map((area, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white rounded-full text-xs text-gray-700 border border-gray-200"
          >
            {area}
          </span>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-6">
      {stats.map((stat, idx) => (
        <StatCard key={idx} value={stat.value} label={stat.label} />
      ))}
    </div>

    <div className="mb-6">
      <div className="text-sm font-semibold text-gray-500 mb-2">Featured Success</div>
      <p className="text-sm text-gray-700 leading-relaxed">
        {bgColor === 'bg-teal-50' && 'UDID cards helped as environmental educators with invaluable software design in schools and communities.'}
        {bgColor === 'bg-purple-50' && 'Women entrepreneurs achieved 5x revenue growth through digital onboarding and resource-efficient cloud sales.'}
        {bgColor === 'bg-blue-50' && 'Women magazine ecosystem co-building 100+ organizations to reach 1 million people - via DCSN+ solution!'}
      </p>
    </div>

    <button  onClick={() => navigate(link)} className={`${buttonColor} text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity`}>
      {buttonText}
    </button>
  </div>
);
}

export default function ThreeVerticalsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const verticals = [
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      title: 'Citizenship',
      subtitle: 'Individual-Level Engagement',
      description: 'Building awareness and active participation in social and environmental causes. We empower individuals—especially youth—with customized challenges and become active citizens.',
      bgColor: 'bg-teal-50',
      keyProgram: 'SZE Citizenship',
      programName: '',
      focusAreas: [
        'Youth-led activism',
        'Environmental accountability',
        'Social community',
        'Digital presence',
        'Community leadership'
      ],

      stats: [
        { value: '250,000+', label: 'Active Citizens' },
        { value: '24', label: 'Cities' },
        { value: '50,000+', label: 'Youth Engaged' },
        { value: '22', label: 'States' }
      ],
      buttonText: 'Join Citizenship Programs →',
      buttonColor: 'bg-teal-600',
      link:"/citizenship"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      title: 'Entrepreneurship',
      subtitle: 'Organizational-Level Impact',
      description: 'Empowering organizations and social enterprises to create scalable solutions. Our ABCD Model helps startups connect ideas to marketplace impact.',
      bgColor: 'bg-purple-50',
      keyProgram: 'WSIG Entrepreneurship Development',
      programName: '',
      focusAreas: [
        'Women entrepreneurship',
        'Green sustainable business',
        'Social-led product',
        'Market-led scaling',
        'Funding guidance'
      ],
      stats: [
        { value: '1,000+', label: 'Enterprises Supported' },
        { value: 'Rs 7+ Cr', label: 'Revenue Generated' },
        { value: '850+', label: 'Women Entrepreneurs' },
        { value: '200+', label: 'Green Startups' }
      ],
      buttonText: 'Apply Entrepreneurship Support →',
      buttonColor: 'bg-purple-600',
      link:"/entrepreneurship"
    },
    {
      icon: <Handshake className="w-6 h-6 text-blue-600" />,
      title: 'Partnership',
      subtitle: 'Platform-Level Collaboration',
      description: 'Creating multi-stakeholder platforms where corporates, government, NGOs, communities, and youth align for collective impact. PNCO+ houses thinking guides and resources.',
      bgColor: 'bg-blue-50',
      keyProgram: 'M4IM/DCSN+ B2B MAUI Earnest',
      programName: '',
      focusAreas: [
        'Corporate CSR programs',
        'Government collaboration',
        'Ecosystem Initiatives',
        'Cross-sector partnerships'
      ],
      stats: [
        { value: '540+', label: 'Organizations' },
        { value: '52', label: 'Districts' },
        { value: '2M+', label: 'Lives Impacted' },
        { value: '10K+', label: 'Volunteers' }
      ],
      buttonText: 'Explore Partnership Models →',
      buttonColor: 'bg-blue-600',
      link:"/partnership"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Three Verticals</h1>
          <p className="text-gray-600 text-lg">
            Building systems, change at individual, organizational, and ecosystem levels
          </p>
        </div>

        {verticals.map((vertical, idx) => (
          <VerticalSection key={idx} {...vertical} />
        ))}
      </div>
    </div>
  );
}