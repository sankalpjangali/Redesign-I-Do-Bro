import React from 'react';
import { Users, TrendingUp, Handshake, ArrowRight, Heart, Building, Globe } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      id: 'citizenship',
      title: 'Citizenship',
      subtitle: 'Empowering Communities',
      description: 'Building stronger communities through values-based education, civic engagement, and social responsibility programs.',
      color: 'purple',
      gradientFrom: 'from-purple-600',
      gradientTo: 'to-purple-800',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      icon: Users,
      image: '/images/solutions/citizenship-education.jpg',
      features: [
        'Employee Volunteering Programs',
        'Cross-funtional Team Building ',
        'Student Teacher Workshops',
        'Community Engagement Initiatives'
      ],
      stats: {
        primary: '250K+',
        primaryLabel: 'Students Sensitized',
        secondary: '500+',
        secondaryLabel: 'Event Days'
      }
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurship',
      subtitle: 'Fostering Innovation',
      description: 'Supporting entrepreneurs with mentorship, funding access, market connections, and business development programs.',
      color: 'blue',
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-blue-800',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      icon: TrendingUp,
      image: '/images/solutions/entrepreneurship-startup.png',
      features: [
        'Linkage through exhibitions ,stalls',
        'Access to conference program and events',
        'Access to Idobros repository of knowledge',
        'One-onone mentoring sessions'
      ],
      stats: {
        primary: '5K+',
        primaryLabel: 'Entrepreneurs Supported',
        secondary: '$1M+',
        secondaryLabel: 'Sales Generated'
      }
    },
    {
      id: 'partnership',
      title: 'Partnership',
      subtitle: 'Building Alliances',
      description: 'Creating strategic partnerships that drive sustainable social impact through collaborative innovation and shared value creation.',
      color: 'green',
      gradientFrom: 'from-green-600',
      gradientTo: 'to-green-800',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      icon: Handshake,
      image: '/images/solutions/partnership-collaboration.jpg',
      features: [
        'Strategic Alliance Building',
        'Cross-sector Collaboration',
        'Impact Measurement',
        'Sustainable Development Goals'
      ],
      stats: {
        primary: '40+',
        primaryLabel: 'Global Partners',
        secondary: '7',
        secondaryLabel: 'Countries'
      }
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-green-600">
              Sustainable Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through our PECO-SYSTEM framework, we deliver comprehensive solutions that address 
            complex social challenges while creating sustainable value for all stakeholders.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 ">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={solution.id}
                data-aos="fade-in" // for fade-in
                className={`${solution.bgColor}  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${solution.borderColor}`}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradientFrom} ${solution.gradientTo} opacity-80`}></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`text-sm font-semibold ${solution.textColor} mb-2`}>
                    {solution.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Programs:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${solution.textColor.replace('text-', 'bg-')} mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${solution.textColor}`}>
                        {solution.stats.primary}
                      </div>
                      <div className="text-xs text-gray-500">
                        {solution.stats.primaryLabel}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${solution.textColor}`}>
                        {solution.stats.secondary}
                      </div>
                      <div className="text-xs text-gray-500">
                        {solution.stats.secondaryLabel}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${solution.gradientFrom} ${solution.gradientTo} text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* PECO-SYSTEM Framework */}
        <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The PECO-SYSTEM Framework
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our holistic approach integrates People, Environment, Community, and Organization 
              to create sustainable impact ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">People</h4>
              <p className="text-sm text-gray-600">
                Empowering individuals with skills, values, and opportunities
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Environment</h4>
              <p className="text-sm text-gray-600">
                Creating sustainable solutions for environmental challenges
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Community</h4>
              <p className="text-sm text-gray-600">
                Building resilient communities through collaboration
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Organization</h4>
              <p className="text-sm text-gray-600">
                Strengthening institutions for lasting impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
