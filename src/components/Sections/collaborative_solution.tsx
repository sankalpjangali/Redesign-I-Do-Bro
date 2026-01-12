import React, { useEffect, useRef, useState } from 'react';
import { RefreshCw, Ban, Target, ArrowRight } from 'lucide-react';

const CollaborativeSolutions: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div 
          id="header"
          data-animate
          className={`mb-16 transition-all duration-800 ${
            isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Challenge: Complex<br />
            Problems Need <span className="text-indigo-600">Collaborative</span><br />
            <span className="text-indigo-600">Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Development work often struggles with fragmented efforts. Programs
            work in silos. Resources spread thin. Impact stays linear. Communities
            rarely gain true ownership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Challenge Cards */}
          <div className="space-y-6">
            {/* Fragmented Solutions */}
            <div 
              id="card1"
              data-animate
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-700 ${
                isVisible('card1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fragmented Solutions</h3>
              <p className="text-gray-600">
                Programmes work in silos, stakeholders rarely collaborate.
              </p>
            </div>

            {/* Low-Risk Solutions */}
            <div 
              id="card2"
              data-animate
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-700 ${
                isVisible('card2') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Ban className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Low-Risk Solutions</h3>
              <p className="text-gray-600">
                Programmes adopt standard solutions with low risk for experimentation.
              </p>
            </div>

            {/* Diluted Resources */}
            <div 
              id="card3"
              data-animate
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-700 ${
                isVisible('card3') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Diluted Resources</h3>
              <p className="text-gray-600">
                Efforts are duplicated, resources spread thin.
              </p>
            </div>

            {/* Linear Impact */}
            <div 
              id="card4"
              data-animate
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-700 ${
                isVisible('card4') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Linear Impact</h3>
              <p className="text-gray-600">
                Impact stays linear, not systemic. Communities rarely gain ownership.
              </p>
            </div>
          </div>

          {/* Right Column - Visual Diagrams */}
          <div className="space-y-8">
            {/* Fragmentation Visual */}
            <div 
              id="visual1"
              data-animate
              className={`bg-indigo-50 rounded-2xl p-12 h-80 flex flex-col items-center justify-center transition-all duration-700 ${
                isVisible('visual1') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-sm text-gray-600 mb-6">Fragmentation</p>
              <div className="flex gap-3 mb-12">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 bg-pink-200 rounded-lg transition-all duration-500 ${
                      isVisible('visual1') ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ transitionDelay: `${300 + i * 50}ms` }}
                  ></div>
                ))}
              </div>
              
              {/* Arrow pointing down */}
              <div className="relative mb-12">
                <ArrowRight className="w-12 h-12 text-gray-300 rotate-90" />
              </div>

              {/* Center circle */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-dashed border-indigo-200 flex items-center justify-center">
                  <div className="w-20 h-20 bg-indigo-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Systems Thinking Visual */}
            <div 
              id="visual2"
              data-animate
              className={`bg-indigo-50 rounded-2xl p-12 h-80 flex flex-col items-center justify-end transition-all duration-700 ${
                isVisible('visual2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-12 h-12 bg-green-500 rounded-lg transform hover:scale-110 transition-all duration-500 ${
                      isVisible('visual2') ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ transitionDelay: `${500 + i * 50}ms` }}
                  ></div>
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-700">Systems Thinking</p>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        {/* <div 
          id="cta"
          data-animate
          className={`mt-12 transition-all duration-700 ${
            isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-lg hover:gap-4 transition-all group"
          >
            Discover how we solve these challenges
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CollaborativeSolutions;