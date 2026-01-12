import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const IntegratedOfferings: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const offerings = [
    {
      id:1,
      icon: '📢',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      title: 'Amplification & Outreach',
      description: 'Audience-centric optimization, cause-led brand messaging, community engagement, stakeholder outreach, fundraising campaigns',
      whatWeDo: [
        'Digital storytelling & social media',
        'Community engagement programs',
        'Fundraising campaigns',
        'Stakeholder content creation'
      ],
      support: 'Enhanced messaging toolkit',
      buttonText: 'Elevate Engagement',
      buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
      delay: 'delay-0'
    },
    {
      id:2,
      icon: '🎓',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      title: 'Convening & Capacity Building',
      description: 'Multi-stakeholder events, bridging programs, workshops, facilitated dialogues, peer-to-peer learning, technical capacity building',
      whatWeDo: [
        'Capacity building for organisations',
        'Bridging programs & workshops',
        'Facilitated dialogues',
        'Leadership development'
      ],
      support: 'Partnership integration',
      buttonText: 'Inspire Convening',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
      delay: 'delay-100'
    },
    {
      id:3,
      icon: '🔬',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-teal-100',
      title: 'Evaluation & Research',
      description: 'Impact assessments, baseline/endline/midline studies, participatory analysis, social audit advisory, policy monitoring, MERL design, MEL system building',
      whatWeDo: [
        'Comprehensive impact assessments',
        'Participatory research & analysis',
        'M&E framework development',
        'Social audit advisory',
        'Data analysis & reporting'
      ],
      support: 'Evidence-driven decision-making',
      buttonText: 'Discover Insight',
      buttonColor: 'bg-teal-500 hover:bg-teal-600',
      delay: 'delay-200'
    },
    {
      id:4,
      icon: '💡',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      title: 'Strategy & Design',
      description: 'CSR strategy development, ecosystem mapping, alliance architecture, program design, inclusive governance, foundations, trust building',
      whatWeDo: [
        'CSR strategy & roadmap development',
        'Ecosystem mapping & alliance building',
        'Alliance building & facilitation',
        'Program design & operations',
        'Scaling & sustainability planning'
      ],
      support: 'Tailored strategic roadmaps',
      buttonText: 'Craft Strategy',
      buttonColor: 'bg-amber-500 hover:bg-amber-600',
      delay: 'delay-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Four Integrated Offerings
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Working cognately across all problems to enable system-wide impact and multiply impact
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`${offering.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${offering.delay}`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Icon */}
              <div className={`${offering.iconBg} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 hover:scale-110`}>
                {offering.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {offering.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {offering.description}
              </p>

              {/* What We Do Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                  What We Do
                </h3>
                <ul className="space-y-2">
                  {offering.whatWeDo.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Section */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">→</span>
                  <span className="text-sm text-gray-600 italic">{offering.support}</span>
                </div>
              </div>
              
              {/* Button */}
              <button
              onClick={() => navigate(`/offerings/${offering.id}`)}
                className={`${offering.buttonColor} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md`}
              >
                {offering.buttonText} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegratedOfferings;