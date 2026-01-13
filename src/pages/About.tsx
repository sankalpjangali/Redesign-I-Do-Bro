import React, { useEffect } from 'react';
import { Users, Briefcase, Handshake, Award, Globe, TrendingUp, Target } from 'lucide-react';

// Extend Window interface for AOS
declare global {
  interface Window {
    AOS?: {
      init: (options?: {
        duration?: number;
        easing?: string;
        once?: boolean;
        offset?: number;
      }) => void;
      refresh?: () => void;
    };
  }
}

const ImpactJourneyPage: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    const initAOS = () => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
      document.head.appendChild(style);

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
      script.onload = () => {
        if (window.AOS) {
          window.AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
          });
        }
      };
      document.body.appendChild(script);
    };

    initAOS();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
            >
              About Idobro Impact Solutions
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our mission, values, approach, and 16-year journey multiplying impact
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div 
          className="flex flex-wrap gap-4 mb-8"
          data-aos="fade-up"
        >
          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-md text-sm font-medium">
            Founded: 2009
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm">
            HQ: Bangalore, India
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm">
            Social Reach: 57 countries
          </button>
        </div>

        <h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Measure and multiply the socio-environmental impact of<br className="hidden md:block" />
          businesses, funds, and citizen action networks
        </h2>

        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-600 leading-relaxed mb-6 max-w-4xl">
            We've catalyzed systemic change through a three-layer approach that creates momentum for all. 
            We connect to stakeholder eco-systems and collaborations that benefit society and 
            the planet. Through our action-first/tech-enabled approach, we have built pioneering 
            measurement frameworks and mobilized over $1B to deliver impact at scale.
          </p>

          <p className="text-gray-600 leading-relaxed mb-12 max-w-4xl">
            Our unique approach combines proper tracking, community ownership, and impact creation 
            in every effort we undertake. We advance transparency across global efforts, ensuring 
            we deliver for isolated efforts-they impact coordinated, multi-stakeholder mobilization.
          </p>
        </div>

        <div 
          className="flex flex-wrap gap-8 md:gap-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">15 years of advisory</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">240+ individuals reached</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">72 cohorts active</span>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className="flex items-start gap-8 mb-12"
            data-aos="fade-right"
          >
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Journey</h2>
              <p className="text-gray-600">
                Over the years, we've grown our impact. Here are a few highlights in a multi-year journey.
              </p>
            </div>
          </div>

          <div className="relative ml-4 border-l-2 border-gray-300">
            {[
              { year: '2013', text: 'First international corporate partnership. Collaborated with...' },
              { year: '2015', text: 'RISE Shared Measurement launched – 1,000 entrepreneurs from...' },
              { year: '2018', text: 'UN SDG Results accelerated social work – 5800+ entrepreneurs measured impact...' },
              { year: '2021', text: 'World Economic Forum launched Report – Systems Analysis Methodology created...' },
              { year: '2024', text: 'International partnerships advanced – 240+ partnerships globally...' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="ml-8 mb-8 flex gap-6"
                data-aos="fade-left"
                data-aos-delay={idx * 100}
              >
                <div className="text-purple-700 font-bold text-lg w-16 flex-shrink-0">{item.year}</div>
                <div className="flex-1">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RISE Values Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            RISE Values: Our Core Philosophy
          </h2>
          <p 
            className="text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Everything we do is guided by RISE: our core principles that ensure each action is 
            impactful, inclusive, sustainable, and environmentally coherent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Users className="w-6 h-6 text-purple-600" />,
              bgColor: 'bg-purple-100',
              title: 'Responsible',
              text: 'Integrity and transparency are at the heart of our work. We maintain accountability and ethical rigor in all our actions. We commit fully to responsible management, ensuring fair treatment of all stakeholders and complete transparency in our operations. We actively report our progress in a consistent manner and welcome scrutiny.'
            },
            {
              icon: <Globe className="w-6 h-6 text-green-600" />,
              bgColor: 'bg-green-100',
              title: 'Inclusive',
              text: 'We advocate for fair representation and participation. Our work ensures that marginalized voices are heard and that equity is central to everything we do. We work to lift up voices that need amplification, creating meaningful management ecosystems. We advocate for diverse perspectives and collaborative decision-making.'
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
              bgColor: 'bg-blue-100',
              title: 'Sustainable',
              text: 'We believe in building for lasting change. Our work is intentionally structured to create value that is greater than short-term gains. We deploy systematic frameworks and long-term partnerships that endure beyond individual projects. We build capacity for communities to adapt and evolve with changing needs.'
            },
            {
              icon: <Award className="w-6 h-6 text-orange-600" />,
              bgColor: 'bg-orange-100',
              title: 'Eco-friendly',
              text: 'Environmental stewardship guides every stage of our work. We are committed to accountability for our impacts on climate, biodiversity and other environmental factors. We integrate environmental considerations into all our decisions. We promote regenerative practices that heal and restore our natural systems.'
            }
          ].map((value, idx) => (
            <div 
              key={idx}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Three-Layer Approach Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
            >
              Our Three-Layer Approach to Systemic Change
            </h2>
            <p 
              className="text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We address complex global problems at three interconnected levels, creating 
              momentum for real systems change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: <Users className="w-6 h-6 text-green-600" />,
                bgColor: 'bg-green-100',
                textColor: 'text-green-600',
                level: 'INDIVIDUAL LEVEL',
                title: 'Citizenship',
                subtitle: 'Individual awareness + participation + engaged citizenship + action',
                text: 'Example: RISE community members collaborate and engage in sustainability actions (carbon footprint reduction, volunteerism, regenerative practices) and receive impact-first...'
              },
              {
                icon: <Briefcase className="w-6 h-6 text-purple-600" />,
                bgColor: 'bg-purple-100',
                textColor: 'text-purple-600',
                level: 'ORGANIZATIONAL LEVEL',
                title: 'Entrepreneurship',
                subtitle: 'Transparency and tech-first processes + sustained data-led action',
                text: 'Example: Social enterprises use RISE Shared Measurement to analyze their work with actionable data. They are equipped with collaborative, research-led strategy...'
              },
              {
                icon: <Handshake className="w-6 h-6 text-blue-600" />,
                bgColor: 'bg-blue-100',
                textColor: 'text-blue-600',
                level: 'ECOSYSTEM LEVEL',
                title: 'Partnership',
                subtitle: 'Structures of aligned stakeholders create systemic change',
                text: 'Example: Regional ecosystem partners (donors, accelerators, NGO networks, universities, foundations, governments, etc.) bring systemic insights...'
              }
            ].map((layer, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className={`w-12 h-12 ${layer.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  {layer.icon}
                </div>
                <div className={`text-sm ${layer.textColor} font-semibold mb-2`}>{layer.level}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{layer.title}</h3>
                <p className="text-gray-700 font-medium mb-3">
                  {layer.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {layer.text}
                </p>
              </div>
            ))}
          </div>

          <p 
            className="text-center text-gray-600 text-sm max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            These three layers reinforce each other. Engaged citizens support entrepreneurs. Entrepreneurs 
            inform investment. Partnerships enable scale. Together, they create systemic, sustained impact.
          </p>
        </div>
      </div>

      {/* Global Recognition Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Global Recognition & Validation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Award className="w-6 h-6 text-purple-600" />,
              year: '2018 AWARDED',
              title: 'UN DESA+ Promoting Finalist',
              text: 'UN DESA+ Best Practice Award finalist: Selected as a promising approach for SDG implementation in "Localizing in Action" category. Recognized for systematic and innovative approach...'
            },
            {
              icon: <Globe className="w-6 h-6 text-purple-600" />,
              year: '2020 AWARDED',
              title: 'World Benchmarking Alliance',
              text: 'As part of a WBA grant to advancing the transformative framework for Corporate Human Rights Benchmark metrics. Recognized for building integrated solutions...'
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
              year: '2021 MILESTONE',
              title: 'Catalyst 2030',
              text: 'Founding Member of Catalyst 2030. Led collaborative work across communities and impact leaders. Actively engaged shared learning and resource mobilization...'
            },
            {
              icon: <Handshake className="w-6 h-6 text-purple-600" />,
              year: '2022 PARTNERSHIP',
              title: 'International Partnerships',
              text: 'Strategic partnerships with global institutions including UN Women, UNDP, UN Women, and UNESCO. Collaborating for systemic impact...'
            }
          ].map((recognition, idx) => (
            <div 
              key={idx}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {recognition.icon}
              </div>
              <div className="text-sm text-purple-600 font-semibold mb-2">{recognition.year}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{recognition.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {recognition.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactJourneyPage;