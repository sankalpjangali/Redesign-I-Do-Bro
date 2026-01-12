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
     

        {/* PECO-SYSTEM Framework */}
{/* PECO-SYSTEM Framework */}
{/* <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 lg:mb-16 max-w-5xl mx-auto shadow-sm">
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
</div> */}


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