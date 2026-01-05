import React from "react";
import { useState, useEffect } from "react";
import { Target, Eye, Heart, Award, MapPin, Users, Globe, Building } from "lucide-react";

const YearDifference = () => {
  const startDate = new Date("2009-09-01");
  const now = new Date();

  let yearsDiff = now.getFullYear() - startDate.getFullYear();

  if (now.getMonth() < 8) {
    yearsDiff--;
  }
  return yearsDiff;
};

const AboutSection: React.FC = () => {
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
    <section id="our-story" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero About Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Transforming Lives Through
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Human-Centric Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our world faces complex problems that require a paradigm shift in
              mind-set and action. There is a critical need to broad base
              participation and contribution if we are to accelerate the pace of
              development and "leave no one behind". New age solutions will be
              compelled to be future-ready and hence, consider eco-system wide
              consequences while being contextualised to local requirements.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Our Mission</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Build value-based ecosystems through stakeholder engagement for Purpose, Profit and Peace 
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Our Vision</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    A Shared World driven by the RISE values - Responsible, Inclusive, Sustainable and Eco(system) friendly
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative pb-8 sm:pb-12 lg:pb-16">
              <img
                src="/images/about/meet.png"
                alt="Global team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{YearDifference()}+</div>
                <div className="text-xs sm:text-sm">Years of Inclusive Impact</div>
              </div>
            </div>
          </div>
        </div>

        {/* PECO-SYSTEM Framework */}
{/* PECO-SYSTEM Framework */}
<div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 lg:mb-16 max-w-5xl mx-auto shadow-sm">
  <div className="text-center mb-8 lg:mb-12">
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
      The PECO-SYSTEM Framework
    </h3>
    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
      Our holistic approach integrates People, Environment, Community, and Organization 
      to create sustainable impact ecosystems.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
    <div className="text-center max-w-xs">
      <div className="bg-purple-100 rounded-full p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
        <Heart className="h-7 w-7 sm:h-9 sm:w-9 text-purple-600" />
      </div>
      <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Partners</h4>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        Emphasizing collaboration across sectors—government, corporations, NGOs, academia, and local communities.
      </p>
    </div>

    <div className="text-center max-w-xs">
      <div className="bg-green-100 rounded-full p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
        <Globe className="h-7 w-7 sm:h-9 sm:w-9 text-green-600" />
      </div>
      <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Entrepreneurs</h4>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        Supporting social and green enterprises, including women entrepreneurs.
      </p>
    </div>

    <div className="text-center max-w-xs">
      <div className="bg-blue-100 rounded-full p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
        <Users className="h-7 w-7 sm:h-9 sm:w-9 text-blue-600" />
      </div>
      <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Citizens</h4>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        Fostering individual participation and ownership in creating a better world.
      </p>
    </div>
  </div>
</div>


        {/* Impact Metrics Dashboard */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-center">
            Our Impact at a Glance
          </h3>
          
          {/* Top Row - 2 Columns */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8 max-w-4xl mx-auto">
            <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-3">
                {metrics.countries}
              </div>
              <div className="text-gray-700 text-sm sm:text-base lg:text-lg font-semibold">
                Countries Reached
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-600 mb-3">
                {metrics.states}
              </div>
              <div className="text-gray-700 text-sm sm:text-base lg:text-lg font-semibold">
                Indian States
              </div>
            </div>
          </div>
          
          {/* Middle Row - 2 Columns */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8 max-w-4xl mx-auto">
            <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-600 mb-3">
                {formatNumber(metrics.entrepreneurs)}+
              </div>
              <div className="text-gray-700 text-sm sm:text-base lg:text-lg font-semibold">
                Entrepreneurs Supported
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-600 mb-3">
                {formatNumber(metrics.students)}+
              </div>
              <div className="text-gray-700 text-sm sm:text-base lg:text-lg font-semibold">
                Students in RISE Program
              </div>
            </div>
          </div>
          
          {/* Bottom - Full Width Centered */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 sm:p-10 lg:p-12 border border-orange-100 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-orange-600 mb-3 sm:mb-4">
                {formatNumber(metrics.individuals)}+
              </div>
              <div className="text-gray-800 text-base sm:text-lg lg:text-xl font-semibold">
                Lives Impacted During COVID-19
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;