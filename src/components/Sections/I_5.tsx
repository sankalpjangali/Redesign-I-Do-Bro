import React, { useEffect, useRef, useState } from 'react';
import { Search, Link, MessageSquare, Sparkles, Star, ArrowRight } from 'lucide-react';

const MultiplierModel: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = (id: string) => visibleElements.has(id);

  const steps = [
    {
      id: 'step1',
      number: '01',
      icon: Search,
      title: 'INFORM',
      description: 'Establish purpose, define problems, map stakeholders',
      items: ['Research', 'Context mapping', 'Stakeholder analysis'],
      timeline: 'Week 1-2',
      color: 'indigo'
    },
    {
      id: 'step2',
      number: '02',
      icon: Link,
      title: 'INTERFACE',
      description: 'Build channels for collaboration and structured communication',
      items: ['Communication systems', 'Governance setup', 'Platform creation'],
      timeline: 'Week 2-3',
      color: 'indigo'
    },
    {
      id: 'step3',
      number: '03',
      icon: MessageSquare,
      title: 'INTERACT',
      description: 'Facilitate dialogue, co-creation, and trust-building',
      items: ['Workshops', 'Dialogues', 'Co-design processes'],
      timeline: 'Week 3-6',
      color: 'indigo'
    },
    {
      id: 'step4',
      number: '04',
      icon: Sparkles,
      title: 'INTEGRATE',
      description: 'Align strategies, resources, and implement coordinated solutions',
      items: ['Strategy alignment', 'Resource coordination', 'Action plans'],
      timeline: 'Week 6-12',
      color: 'indigo'
    },
    {
      id: 'step5',
      number: '05',
      icon: Star,
      title: 'IMPACT',
      description: 'Measure outcomes, ensure sustainability, and long-term ownership',
      items: ['M&E', 'Sustainability planning', 'Impact measurement'],
      timeline: 'Ongoing',
      color: 'indigo'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          id="header"
          data-animate
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The I*5 Multiplier Model
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Systems Execution Framework — A 5-step process that turns ecosystems into
            scalable, measurable impact.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Desktop Arrow Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  <div
                    id={step.id}
                    data-animate
                    className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-700 h-full ${
                      isVisible(step.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-indigo-600">{step.number}</span>
                      <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-indigo-600" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Items List */}
                    <ul className="space-y-2 mb-6">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Timeline */}
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-indigo-600">{step.timeline}</span>
                    </div>
                  </div>

                  {/* Arrow (Desktop only, except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-28 -right-4 z-10 items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <ArrowRight className="w-4 h-4 text-indigo-600" />
                      </div>
                    </div>
                  )}

                  {/* Arrow (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <ArrowRight className="w-4 h-4 text-indigo-600 rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          id="cta"
          data-animate
          className={`mt-16 text-center transition-all duration-800 ${
            isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
            Learn More About Our Framework
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiplierModel;