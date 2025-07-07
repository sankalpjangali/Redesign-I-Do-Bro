import React from 'react';
import { Download, ExternalLink, FileText, Video, BookOpen, Award } from 'lucide-react';

const ResourcesSection: React.FC = () => {
  const resources = [
    {
      category: "Impact Reports",
      icon: FileText,
      color: "blue",
      items: [
        {
          title: "Decade of Impact Report 2024",
          description: "Comprehensive overview of our 12-year journey and measurable impact across communities.",
          type: "PDF",
          size: "2.5 MB",
          downloadUrl: "#"
        },
        {
          title: "Annual Impact Report 2023",
          description: "Detailed analysis of our programs, partnerships, and community outcomes for 2023.",
          type: "PDF",
          size: "1.8 MB",
          downloadUrl: "#"
        },
        {
          title: "COVID-19 Response Report",
          description: "Documentation of our rapid response initiatives during the pandemic.",
          type: "PDF",
          size: "1.2 MB",
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Program Materials",
      icon: BookOpen,
      color: "purple",
      items: [
        {
          title: "RISE Values Framework Guide",
          description: "Complete methodology and implementation guide for our citizenship education program.",
          type: "PDF",
          size: "3.1 MB",
          downloadUrl: "#"
        },
        {
          title: "Entrepreneurship Toolkit",
          description: "Resources and templates for supporting women entrepreneurs and startups.",
          type: "PDF",
          size: "2.2 MB",
          downloadUrl: "#"
        },
        {
          title: "Partnership Playbook",
          description: "Framework for building effective cross-sector partnerships for social impact.",
          type: "PDF",
          size: "1.9 MB",
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Media & Videos",
      icon: Video,
      color: "green",
      items: [
        {
          title: "12 Years of Inclusive Impact",
          description: "Documentary showcasing our journey and the communities we've impacted.",
          type: "Video",
          size: "Watch",
          downloadUrl: "#",
          isVideo: true
        },
        {
          title: "Media Toolkit",
          description: "Logos, brand guidelines, and media resources for partners and press.",
          type: "ZIP",
          size: "5.2 MB",
          downloadUrl: "#"
        },
        {
          title: "Success Stories Collection",
          description: "Video testimonials and case studies from our program participants.",
          type: "Video",
          size: "Watch",
          downloadUrl: "#",
          isVideo: true
        }
      ]
    }
  ];

  const certifications = [
    {
      title: "UN Global Compact Member",
      description: "Committed to sustainable development goals and responsible business practices.",
      icon: Award
    },
    {
      title: "ISO 9001:2015 Certified",
      description: "Quality management system certification for consistent service delivery.",
      icon: Award
    },
    {
      title: "Social Impact Award 2023",
      description: "Recognized for outstanding contribution to community development.",
      icon: Award
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resources &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Knowledge Hub
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of reports, toolkits, and resources 
            to learn more about our methodology and replicate our impact in your community.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="space-y-12 mb-20">
          {resources.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className={`bg-${category.color}-100 rounded-full p-3 mr-4`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-gray-900 text-lg leading-tight">
                          {item.title}
                        </h4>
                        <div className={`text-xs font-semibold px-2 py-1 rounded-full bg-${category.color}-100 text-${category.color}-600`}>
                          {item.type}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{item.size}</span>
                        <a
                          href={item.downloadUrl}
                          className={`flex items-center text-${category.color}-600 hover:text-${category.color}-700 font-medium text-sm transition-colors duration-200`}
                        >
                          {item.isVideo ? (
                            <>
                              Watch <ExternalLink className="ml-2 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Download <Download className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Recognition */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Certifications & Recognition
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter & Updates */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on our programs, 
              new resources, and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-white focus:bg-white/30"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
