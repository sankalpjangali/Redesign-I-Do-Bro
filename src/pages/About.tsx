import React from 'react';
import { Users, Briefcase, Handshake, Award, Globe, TrendingUp } from 'lucide-react';

const ImpactJourneyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex gap-4 mb-8">
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

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Measure and multiply the socio-environmental impact of<br />
          businesses, funds, and citizen action networks
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl">
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

        <div className="flex gap-12">
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
          <div className="flex items-start gap-8 mb-8">
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
              <div key={idx} className="ml-8 mb-8 flex gap-6">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">RISE Values: Our Core Philosophy</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Everything we do is guided by RISE: our core principles that ensure each action is 
            impactful, inclusive, sustainable, and environmentally coherent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Responsible</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Integrity and transparency are at the heart of our work. We maintain accountability and ethical rigor in all our actions. We commit fully to responsible management, ensuring fair treatment of all stakeholders and complete transparency in our operations. We actively report our progress in a consistent manner and welcome scrutiny.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We advocate for fair representation and participation. Our work ensures that marginalized voices are heard and that equity is central to everything we do. We work to lift up voices that need amplification, creating meaningful management ecosystems. We advocate for diverse perspectives and collaborative decision-making.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We believe in building for lasting change. Our work is intentionally structured to create value that is greater than short-term gains. We deploy systematic frameworks and long-term partnerships that endure beyond individual projects. We build capacity for communities to adapt and evolve with changing needs.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-friendly</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Environmental stewardship guides every stage of our work. We are committed to accountability for our impacts on climate, biodiversity and other environmental factors. We integrate environmental considerations into all our decisions. We promote regenerative practices that heal and restore our natural systems.
            </p>
          </div>
        </div>
      </div>

      {/* Three-Layer Approach Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Three-Layer Approach to Systemic Change
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We address complex global problems at three interconnected levels, creating 
              momentum for real systems change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-sm text-green-600 font-semibold mb-2">INDIVIDUAL LEVEL</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Citizenship</h3>
              <p className="text-gray-700 font-medium mb-3">
                Individual awareness + participation + engaged citizenship + action
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Example: RISE community members collaborate and engage in sustainability actions 
                (carbon footprint reduction, volunteerism, regenerative practices) and receive impact-first...
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-sm text-purple-600 font-semibold mb-2">ORGANIZATIONAL LEVEL</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Entrepreneurship</h3>
              <p className="text-gray-700 font-medium mb-3">
                Transparency and tech-first processes + sustained data-led action
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Example: Social enterprises use RISE Shared Measurement to analyze their work with 
                actionable data. They are equipped with collaborative, research-led strategy...
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm text-blue-600 font-semibold mb-2">ECOSYSTEM LEVEL</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-700 font-medium mb-3">
                Structures of aligned stakeholders create systemic change
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Example: Regional ecosystem partners (donors, accelerators, NGO networks, universities, 
                foundations, governments, etc.) bring systemic insights...
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm max-w-4xl mx-auto">
            These three layers reinforce each other. Engaged citizens support entrepreneurs. Entrepreneurs 
            inform investment. Partnerships enable scale. Together, they create systemic, sustained impact.
          </p>
        </div>
      </div>

      {/* Global Recognition Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Global Recognition & Validation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-sm text-purple-600 font-semibold mb-2">2018 AWARDED</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">UN DESA+ Promoting Finalist</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              UN DESA+ Best Practice Award finalist: Selected as a promising approach for SDG implementation 
              in 'Localizing in Action' category. Recognized for systematic and innovative approach...
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-sm text-purple-600 font-semibold mb-2">2020 AWARDED</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">World Benchmarking Alliance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              As part of a WBA grant to advancing the transformative framework for Corporate Human Rights 
              Benchmark metrics. Recognized for building integrated solutions...
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-sm text-purple-600 font-semibold mb-2">2021 MILESTONE</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Catalyst 2030</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Founding Member of Catalyst 2030. Led collaborative work across communities and impact 
              leaders. Actively engaged shared learning and resource mobilization...
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-sm text-purple-600 font-semibold mb-2">2022 PARTNERSHIP</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">International Partnerships</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Strategic partnerships with global institutions including UN Women, UNDP, UN Women, and 
              UNESCO. Collaborating for systemic impact...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactJourneyPage;