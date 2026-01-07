import React, { useEffect, useRef, useState } from 'react';

const OfferingsPage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div 
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              visibleElements.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            data-animate
            data-index="0"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Offerings</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Measuring and multiplying socio-environomic impact through comprehensive solutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-sm md:text-lg">
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                Inform
              </span>
              <span>→</span>
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                Interface
              </span>
              <span>→</span>
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                Interact
              </span>
              <span>→</span>
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                Integrate
              </span>
              <span>→</span>
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                Impact
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 container mx-auto px-6">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-animate
          data-index="1"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to create lasting impact across different dimensions of social development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden ${
                visibleElements.has(index + 2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              data-index={index + 2}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="p-8 relative z-10">
                <div className={`text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {program.title}
                </h3>
                
                <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                  {program.subtitle}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Three-Level Approach Section
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            data-animate
            data-index="5"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Three-Level Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systemic solutions designed at individual, organizational, and ecosystem levels
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${
                  visibleElements.has(index + 6) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                data-animate
                data-index={index + 6}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="md:flex items-center">
                  <div className={`md:w-1/3 bg-gradient-to-br ${approach.gradient} p-12 text-white flex flex-col justify-center items-center text-center`}>
                    <div className="text-7xl mb-4">{approach.icon}</div>
                    <h3 className="text-3xl font-bold mb-2">{approach.level}</h3>
                    <p className="text-lg opacity-90">{approach.target}</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* RISE Values Section
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has(9) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            data-animate
            data-index="9"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              RISE Values
            </h2>
            <p className="text-xl text-gray-600">
              The foundation of all our programs and partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { letter: 'R', word: 'Responsible', color: 'from-red-500 to-orange-500' },
              { letter: 'I', word: 'Inclusive', color: 'from-blue-500 to-indigo-500' },
              { letter: 'S', word: 'Sustainable', color: 'from-green-500 to-emerald-500' },
              { letter: 'E', word: 'Eco-friendly', color: 'from-teal-500 to-cyan-500' },
            ].map((value, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-700 ${
                  visibleElements.has(index + 10) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                data-animate
                data-index={index + 10}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white text-6xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {value.letter}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{value.word}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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

export default OfferingsPage;