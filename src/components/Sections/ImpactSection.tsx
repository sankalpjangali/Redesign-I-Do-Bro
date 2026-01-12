import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Award, TrendingUp, Users, Globe } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const successStories = [
    {
      title: "RISE Values Framework Impact",
      category: "Citizenship",
      description: "Transforming educational institutions through values-based learning, reaching over 250,000 students across multiple states.",
      image: "",
      stats: [
        { label: "Students Impacted", value: "58K+" },
        { label: "Educational Institutions", value: "540+" },
        { label: "States Covered", value: "22" }
      ],
      outcomes: [
        "Enhanced civic awareness among students",
        "Improved critical thinking skills",
        "Stronger community engagement",
        "Development of leadership qualities"
      ],
      partner: "Swedish Institute & Educational Institutions"
    },
    {
      title: "Women's Social Entrepreneurship Program",
      category: "Entrepreneurship",
      description: "Empowering women entrepreneurs through comprehensive support, mentorship, and market access programs.",
      image: "https://res.cloudinary.com/dhs64xefe/image/upload/v1757680220/entrtepreneurship_avr4al.png",
      stats: [
        { label: "Women Entrepreneurs ", value: "1500+" },
        { label: "Women Entrepreneurs Mentored", value: "200+" },
        { label: "Sales Facilitated", value: "$7M+" }
      ],
      outcomes: [
        "Increased women's economic participation",
        "Sustainable business creation",
        "Community economic development",
        "Enhanced financial independence"
      ],
      partner: "British Council & Local Partners"
    },
    {
      title: "COVID-19 Community Response",
      category: "Partnership",
      description: "Rapid response initiative supporting vulnerable communities during the pandemic through collaborative partnerships.",
      image: "/images/impact/community-success.png",
      stats: [
        { label: "Lives Reached", value: "500K+" },
        { label: "Community Partners", value: "50+" },
        { label: "Response Days", value: "180+" }
      ],
      outcomes: [
        "Essential supplies distribution",
        "Healthcare access facilitation",
        "Digital literacy programs",
        "Mental health support services"
      ],
      partner: "Multiple Government & NGO Partners"
    }
  ];

  const impactMetrics = [
    {
      category: "Education & Awareness",
      icon: Users,
      color: "purple",
      metrics: [
        { label: "Students Sensitized", value: "58,000+", change: "+25%" },
        { label: "Educational Events", value: "500+", change: "+40%" },
        { label: "Teacher Training Sessions", value: "1,200+", change: "+35%" }
      ]
    },
    {
      category: "Economic Empowerment",
      icon: TrendingUp,
      color: "blue",
      metrics: [
        { label: "Entrepreneurs Supported", value: "1,550+" },
        { label: "Sales Generated", value: "$7M+" },
        { label: "Exhibition Days", value: "850+" }
      ]
    },
    {
      category: "Community Development",
      icon: Globe,
      color: "green",
      metrics: [
        { label: "Communities Reached", value: "1,000+", change: "+50%" },
        { label: "Projects (Total)", value: "150+", change: "+60%" },
        { label: "Beneficiaries", value: "33,500", change: "+35%" }
      ]
    }
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[currentStoryIndex];

  return (
    <section id="impact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Success Stories Carousel */}
        {/* <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Success Stories</h3>
                <p className="text-blue-100">Real impact, real change, real people</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevStory}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextStory}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div>
              <img
                src={currentStory.image}
                alt={currentStory.title}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div>
              <div className="text-sm font-semibold text-blue-600 mb-2">
                {currentStory.category} Solution
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {currentStory.title}
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {currentStory.description}
              </p>

              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {currentStory.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3">Key Outcomes:</h5>
                <ul className="space-y-2">
                  {currentStory.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Partner: {currentStory.partner}
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Read Full Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          
          <div className="flex justify-center space-x-2 pb-6">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStoryIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentStoryIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div  data-aos= 'fade-up'data-aos-duration="1000" className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Create Impact Together?</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our network of partners and changemakers who are driving sustainable 
            social impact across communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200" onClick={() => window.location.href='https://res.cloudinary.com/dhs64xefe/image/upload/v1754927184/idobro3_jvopmq.pdf'}>
              Download Impact Report
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200" onClick={() => window.location.href='/contact'}>
              Partner with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
