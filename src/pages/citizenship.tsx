import React from 'react';
import { Users, Calendar, Building2, CheckCircle } from 'lucide-react';

const CitizenshipProgram: React.FC = () => {
  const stats = [
    { number: '250,000+', label: 'Students Impacted' },
    { number: '24', label: 'Partner Countries' },
    { number: '50,000+', label: 'Teachers Developed' },
    { number: '22', label: 'Global Offices' }
  ];

  const citizenshipMeanings = [
    {
      title: 'Awareness',
      description: 'Understanding the problem and its systemic causes'
    },
    {
      title: 'Agency',
      description: 'Believing one has power and responsibility to act'
    },
    {
      title: 'Action',
      description: 'Taking steps to address challenges or transform systems'
    },
    {
      title: 'Advocacy',
      description: 'Influencing policy and catalyzing others'
    }
  ];

  const multiplierEffect = [
    { icon: '👤', label: 'Individual', color: 'bg-green-200' },
    { icon: '👥', label: 'Interpersonal', color: 'bg-green-300' },
    { icon: '🏛️', label: 'Institutional', color: 'bg-green-400' },
    { icon: '🌍', label: 'Systemic', color: 'bg-green-500' }
  ];

  const programs = [
    {
      icon: '🎓',
      title: 'In-School Programs',
      subtitle: 'Scalable, cost-effective citizenship education',
      features: [
        'Integration of citizenship themes with school curricula through mapping classroom activities',
        'Teacher training workshops',
        'Student project-based learning',
        'Leadership development'
      ],
      example: 'Example: Green School Program - 50,000 students across 1,000 schools in Kenya and Ghana'
    },
    {
      icon: '📚',
      title: 'Out-of-School Programs',
      subtitle: 'Skill-building for vulnerable populations',
      features: [
        'Community-based programs for out-of-school children, youth, and vulnerable adult populations',
        'Life skills training',
        'Leadership development',
        'Vocational training'
      ],
      example: 'Example: Adolescent Girls Program in conflict-affected areas of Mali providing literacy, numeracy, and life skills'
    },
    {
      icon: '📱',
      title: 'Online Programs',
      subtitle: 'Digital platforms for learning',
      features: [
        'Leveraging digital platforms to reach larger audiences with scalable solutions',
        'Interactive online modules',
        'Video-based learning',
        'Digital citizenship',
        'Mobile app development'
      ],
      example: 'Example: Climate Action App - Gamified learning experience reaching 100,000+ young people'
    },
    {
      icon: '📢',
      title: 'Community Campaigns',
      subtitle: 'Grassroots mobilization',
      features: [
        'Large-scale, issue-specific campaigns mobilizing entire communities around critical social issues',
        'Local-level engagement',
        'Community events and activities',
        'Peer-to-peer engagement',
        'Strategic advocacy campaigns'
      ],
      example: 'Example: Clean Water Campaign - reaching 500,000 households with hygiene and sanitation messaging'
    },
    {
      icon: '🔄',
      title: 'Behavior Change Initiatives',
      subtitle: 'Evidence-based interventions',
      features: [
        'Evidence-based behavioral design interventions designed to shift specific behaviors at scale',
        'Behavior-science-led strategy',
        'Targeted communications design',
        'Measurement and tracking'
      ],
      example: 'Example: Classroom Behavior Change - 10,000 teachers adopting positive reinforcement strategies'
    }
  ];

  const focusAreas = [
    {
      icon: '💊',
      title: 'Health & Hygiene',
      description: 'Promoting healthy behaviors and improved hygiene practices'
    },
    {
      icon: '♻️',
      title: 'Environment & Sustainability',
      description: 'Building awareness and action on environmental issues'
    },
    {
      icon: '💰',
      title: 'Entrepreneurship & Digital',
      description: 'Youth entrepreneurship, digital skills, financial literacy'
    },
    {
      icon: '👥',
      title: 'Community Leadership',
      description: 'Developing leadership and civic engagement skills'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RISE Citizenship Program</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Mean by Citizenship */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Mean by Citizenship</h2>
        <p className="text-gray-600 mb-4 max-w-3xl">
          Citizenship is not just about civic duty or legal status. It's about empowering individuals to become active, well-informed and engaged members and take action.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            {citizenshipMeanings.map((item, index) => (
              <div key={index} className="mb-6 flex items-start">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="font-semibold text-gray-900 mb-6">The Multiplier Effect</h3>
            <p className="text-sm text-gray-600 mb-6">
              When individuals become empowered changemakers, they influence a ripple effect from personal to systemic change.
            </p>
            <div className="flex items-center justify-between">
              {multiplierEffect.map((level, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full ${level.color} flex items-center justify-center text-xl mb-2`}>
                      {level.icon}
                    </div>
                    <span className="text-xs text-gray-700 text-center">{level.label}</span>
                  </div>
                  {index < multiplierEffect.length - 1 && (
                    <div className="text-green-400 text-2xl">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How We Engage Citizenship */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How We Engage Citizenship</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Five complementary programs that together address the full spectrum of citizenship development
          </p>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="text-4xl mr-4 flex-shrink-0">{program.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{program.subtitle}</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <ul className="space-y-2">
                        {program.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {program.features.slice(3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 mt-4">
                      <p className="text-sm text-gray-700">{program.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Focus Areas */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Focus Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-6 text-center hover:bg-green-100 transition-colors">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-sm text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitizenshipProgram;