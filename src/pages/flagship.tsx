import React, { useEffect, useRef, useState } from 'react';

const FlagshipInitiativesPage: React.FC = () => {
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

  const initiatives = [
    {
      tag: 'Circular Economy',
      tagColor: 'bg-purple-100 text-purple-700',
      title: 'KORU Centre for Systems Innovation',
      subtitle: 'Building Future Systems Thinkers',
      description: 'A pioneering educational initiative empowering the next generation of systems thinkers, innovators, and change-makers through experiential learning, cross-sectoral problem-solving, and collaborative impact. Targeted after the Milan-Accord for new beginnings, KORU helps youth generate stories of impact leaders.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      stats: [
        { value: '500+', label: 'Students', icon: '👥' },
        { value: '20+', label: 'Institutions', icon: '🏛️' },
        { value: '50+', label: 'Projects', icon: '📋' }
      ],
      features: [
        'Systems thinking workshops',
        'Innovation design curriculum',
        'Leadership development programs',
        'Real-life learning projects',
        'Network with knowledge creation'
      ],
      buttonText: 'Learn More',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700'
    },
    {
      tag: 'Flagship Initiative',
      tagColor: 'bg-green-100 text-green-700',
      title: 'Circular Economy - Go! Go! Go!u',
      subtitle: 'Closing the Loop on Waste',
      description: 'A comprehensive circular economy initiative that promotes repair, reuse, and recycling. Go! Go! Go!u engages community members to convert waste into value through decentralized micro-entrepreneurship, creating sustainable green jobs.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop',
      stats: [
        { value: '1000+', label: 'Households', icon: '🏠' },
        { value: '200+', label: 'Entrepreneurs', icon: '💼' },
        { value: '15+', label: 'Tons Recycled', icon: '♻️' }
      ],
      features: [
        'Community waste collection',
        'Repair center directory',
        'Community awareness campaigns',
        'Micro-business development',
        'Mission-driven programs'
      ],
      buttonText: 'Learn More',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      tag: 'People-centered',
      tagColor: 'bg-blue-100 text-blue-700',
      title: 'RISE World Summit',
      subtitle: 'Global Platform for Impact Leaders',
      description: 'An annual, global convening bringing together social impact leaders, entrepreneurs, corporates, and policymakers from around the world to address SDG solutions, WSGE initiatives, funding opportunities, and collective collaboration agendas.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      stats: [
        { value: '84+', label: 'Countries', icon: '🌍' },
        { value: '10,000+', label: 'Participants', icon: '👥' },
        { value: '12', label: 'Editions', icon: '📅' }
      ],
      features: [
        'Global convening platform',
        'Partnership ecosystem network',
        'Networking and workshops',
        'Knowledge exchange and impact learning track'
      ],
      buttonText: 'Learn More',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            visibleElements.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-animate
          data-index="0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flagship Initiatives
          </h1>
          <p className="text-lg text-gray-600">
            Signature programs that demonstrate our commitment to systems-level<br />
            change and innovation
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                visibleElements.has(index + 1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              data-index={index + 1}
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''} bg-white rounded-2xl p-8 shadow-sm`}>
                  <span className={`inline-block px-3 py-1 ${initiative.tagColor} rounded-full text-xs font-medium mb-4`}>
                    {initiative.tag}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {initiative.title}
                  </h2>
                  <p className="text-blue-600 font-medium mb-4">
                    {initiative.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {initiative.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-200">
                    {initiative.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl mb-1">{stat.icon}</div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">KEY FEATURES</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {initiative.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xs text-gray-600">
                          <span className="text-green-500 mr-2 mt-0.5">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <button className={`px-6 py-2 ${initiative.buttonColor} text-white rounded-full text-sm font-medium transition-colors`}>
                    {initiative.buttonText} →
                  </button>
                </div>

                {/* Image Side */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            visibleElements.has(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-animate
          data-index="10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Want to Be Part of Our Flagship Programs?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us in creating systems-level change through innovative programs<br />
            that empower communities and drive sustainable impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg">
              Get Involved →
            </button>
            <button className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Explore All Programs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Idobro Impact Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FlagshipInitiativesPage;