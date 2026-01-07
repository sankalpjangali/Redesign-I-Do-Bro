import React from 'react';
import { useState,useEffect,useRef } from 'react';

const OfferingsSupportTable: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);
  
    useEffect(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setVisibleElements((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => observerRef.current?.observe(el));
  
      return () => observerRef.current?.disconnect();
    }, []);
  
    const programs = [
      {
        title: 'Idobro CLOUD',
        subtitle: 'Tools & Channels for Outreach and Communication',
        description: 'Leveraging digital platforms and communication strategies to amplify the reach and impact of social initiatives.',
        icon: '☁️',
        features: [
          'Digital marketing and social media management',
          'Content creation and curation',
          'Knowledge management systems',
          'Communication strategy development',
        ],
        color: 'from-blue-500 to-cyan-500',
      },
      {
        title: 'Idobro CIRCLE',
        subtitle: 'Events and Forums to bring the right stakeholders together',
        description: 'Creating platforms for meaningful dialogue, collaboration, and partnerships across sectors.',
        icon: '🔄',
        features: [
          'Multi-stakeholder convenings',
          'RISE World Summit facilitation',
          'Corporate engagement forums',
          'Community mobilization events',
        ],
        color: 'from-purple-500 to-pink-500',
      },
      {
        title: 'Idobro RISE',
        subtitle: 'Frameworks to design appropriate CSR projects and Development interventions',
        description: 'Implementing value-driven frameworks for responsible, inclusive, sustainable, and eco-friendly development.',
        icon: '📈',
        features: [
          'CSR strategy and implementation',
          'Impact measurement and evaluation',
          'RISE Framework application',
          'Sustainable development solutions',
        ],
        color: 'from-green-500 to-teal-500',
      },
    ];
  
    const approaches = [
      {
        level: 'Citizenship',
        target: 'Individual Level',
        description: 'Empowering individuals and students to become agents of positive change in their communities.',
        icon: '👤',
        gradient: 'from-orange-400 to-red-500',
      },
      {
        level: 'Entrepreneurship',
        target: 'Organization Level',
        description: 'Supporting Women, Social and Green Enterprises (WSGE) to start, sustain, and scale their impact.',
        icon: '🚀',
        gradient: 'from-indigo-500 to-purple-600',
      },
      {
        level: 'Partnership',
        target: 'Ecosystem Level',
        description: 'Facilitating collaborations across government, industry, academia, and civil society for systemic change.',
        icon: '🤝',
        gradient: 'from-emerald-500 to-green-600',
      },
    ];
  const tableData = [
    {
      offering: 'Amplification & Outreach',
      citizenship: 'Youth campaigns, awareness materials',
      entrepreneurship: 'Enterprise marketing, brand building',
      partnership: 'Campaign coordination, stakeholder communication'
    },
    {
      offering: 'Convening & Capacity Building',
      citizenship: 'Youth workshops, leadership training',
      entrepreneurship: 'Business training, mentorship',
      partnership: 'Multi-stakeholder events, ecosystem convening'
    },
    {
      offering: 'Evaluation & Research',
      citizenship: 'Behavior change tracking, impact assessment',
      entrepreneurship: 'Enterprise performance studies',
      partnership: 'Ecosystem health metrics'
    },
    {
      offering: 'Strategy & Design',
      citizenship: 'Program design, curriculum development',
      entrepreneurship: 'Business model development',
      partnership: 'Ecosystem architecture, alliance strategy'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Offerings Support Each Vertical
          </h1>
          <p className="text-lg text-gray-600">
            Every vertical uses integrated offerings to maximize impact
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-6 px-6 font-bold text-gray-900 text-lg">
                  Offering
                </th>
                <th className="text-left py-6 px-6">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">🌱</span>
                    <span className="font-bold text-gray-900 text-lg">Citizenship</span>
                  </div>
                </th>
                <th className="text-left py-6 px-6">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 text-xl">🚀</span>
                    <span className="font-bold text-gray-900 text-lg">Entrepreneurship</span>
                  </div>
                </th>
                <th className="text-left py-6 px-6">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 text-xl">🤝</span>
                    <span className="font-bold text-gray-900 text-lg">Partnership</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-6 px-6 font-semibold text-gray-900">
                    {row.offering}
                  </td>
                  <td className="py-6 px-6 text-gray-600">
                    {row.citizenship}
                  </td>
                  <td className="py-6 px-6 text-gray-600">
                    {row.entrepreneurship}
                  </td>
                  <td className="py-6 px-6 text-gray-600">
                    {row.partnership}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
            {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div 
          className={`container mx-auto px-6 text-center transition-all duration-1000 ${
            visibleElements.has(14) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-animate
          data-index="14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Impact?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to multiply opportunities and create sustainable solutions for people and planet
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get in Touch
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferingsSupportTable;