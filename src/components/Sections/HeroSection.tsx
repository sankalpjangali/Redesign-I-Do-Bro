import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [metrics, setMetrics] = useState({
    countries: 0,
    states: 0,
    entrepreneurs: 0,
    students: 0,
    individuals: 0
  });

  const finalMetrics = {
    countries: 7,
    states: 22,
    entrepreneurs: 1550,
    students: 120000,
    individuals: 1000000,
    // wsg_entrepreneurs_sale:7000000,
    // event_days:1800,
    // institution:40,
  
  };

  useEffect(() => {
    const animateCounter = (key: keyof typeof metrics, target: number, duration: number = 2000) => {
      const startTime = Date.now();
      const startValue = 0;
      
      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(startValue + (target - startValue) * progress);
        
        setMetrics(prev => ({ ...prev, [key]: currentValue }));
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    };

    // Start animations with slight delays
    setTimeout(() => animateCounter('countries', finalMetrics.countries), 200);
    setTimeout(() => animateCounter('states', finalMetrics.states), 400);
    setTimeout(() => animateCounter('entrepreneurs', finalMetrics.entrepreneurs), 600);
    setTimeout(() => animateCounter('students', finalMetrics.students), 800);
    setTimeout(() => animateCounter('individuals', finalMetrics.individuals), 1000);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dhs64xefe/image/upload/v1757831861/Website_Homepage_Images_25_vytt6j.png"
          alt="Community empowerment and social impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Partner for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Purpose, Profit & Peace
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Human-Centric Solutions through systems approach and people-powered innovations 
              to solve the world's most pressing challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12" onClick={() => window.location.href='/solutions'}>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              
            </div>

            {/* Partnership Tagline */}
            <div className="text-blue-200 text-lg font-medium">
              Empowering communities across 7 countries and 24 Indian states
            </div>
          </div>

          {/* Right Column - Impact Metrics Dashboard */}
          <div data-aos='fade-left' className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-white text-2xl font-bold mb-8 text-center">Our Impact at a Glance</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {metrics.countries}
                </div>
                <div className="text-white text-sm font-medium">
                  Countries Reached
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {metrics.states}
                </div>
                <div className="text-white text-sm font-medium">
                  Indian States
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {formatNumber(metrics.entrepreneurs)}+
                </div>
                <div className="text-white text-sm font-medium">
                  Entrepreneurs Supported
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {formatNumber(metrics.students)}+
                </div>
                <div className="text-white text-sm font-medium">
                  Students in RISE Program
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">
                {formatNumber(metrics.individuals)}+
              </div>
              <div className="text-white text-lg font-medium">
                Lives Impacted During COVID-19
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              {/* <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300" onClick={() => window.location.href='/about#impact'}>
                See Detailed Impact Report
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
