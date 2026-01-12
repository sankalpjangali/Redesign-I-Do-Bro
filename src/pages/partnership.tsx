import React from 'react';
import { Users, Building2, Lightbulb, Globe2, Briefcase, Building, Award, Network } from 'lucide-react';

const PartnershipPage: React.FC = () => {
  const stats = [
    { value: '540+', label: 'Partners' },
    { value: '52', label: 'Countries' },
    { value: '2M+', label: 'People Reached' },
    { value: '10K+', label: 'Projects Completed' }
  ];

  const pecoModel = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partners',
      description: 'Pioneering collaborations with diverse stakeholders',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Enterprises',
      description: 'Sustainable innovation and scalable business models',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Communities',
      description: 'Community-led solutions and grassroots empowerment',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: 'Organizations',
      description: 'Multi-stakeholder partnerships for systemic impact',
      color: 'bg-cyan-50 text-cyan-600'
    }
  ];

  const partnershipModels = [
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: 'Corporate CSR Partnerships',
      description: 'Strategic CSR integration for meaningful, sustainable social impact',
      features: [
        'Impact assessment and reporting',
        'CSR strategy development',
        'Employee engagement programs',
        'Sustainability initiatives',
        'Brand transformation and storytelling'
      ]
    },
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: 'Government Collaborations',
      description: 'Public-private partnerships for scaled programs, policy advocacy',
      features: [
        'Policy advocacy',
        'Program implementation support',
        'Capacity building initiatives',
        'Research and evaluation',
        'Evidence-based solutions'
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Foundation Partnerships',
      description: 'Long-term strategic alliances for deep, sustained impact in focus areas',
      features: [
        'Strategic grant partnerships',
        'Co-designed programs',
        'Impact measurement',
        'Capacity building',
        'Knowledge sharing'
      ]
    },
    {
      icon: <Network className="w-8 h-8 text-teal-600" />,
      title: 'International Agency Collaborations',
      description: 'Partnerships with multilateral and bilateral organizations for global scale',
      features: [
        'Technical cooperation',
        'Multi-country programs',
        'Cross-border learning',
        'Regional collaboration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-indigo-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PECO System Model */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The PECO System Model
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We build collaborative, value-based ecosystems by bringing together four key actors
            working interdependently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pecoModel.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className={`${item.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 text-center">
          <p className="text-indigo-900 text-sm md:text-base">
            <span className="font-semibold">Powered by:</span> B2C Values, Measurable, Inclusive, Sustainable, Tech-friendly, and Inclusive through Creativity, Entrepreneurship, and Partnership
          </p>
        </div>
      </div>

      {/* Partnership Models */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Models
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work with diverse stakeholders to create collaborative impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipModels.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    {model.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              UN SDGs Alignment
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            MANAHECOnet: A Partnership Success Story
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            A transformative partnership between government, private sector, and civil society that brought together 100+ organizations across government, corporate, academic, and society, and collaborates in person, remotely, virtually, and async to drive systemic change and sustainable development.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600 text-sm">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2M+</div>
              <div className="text-gray-600 text-sm">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5</div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">UN</div>
              <div className="text-gray-600 text-sm">Recognition</div>
            </div>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Read Full Case Study
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Impact Together?
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Join our network of partners working towards sustainable development and social impact
          </p>
          <button className="bg-white text-indigo-900 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;