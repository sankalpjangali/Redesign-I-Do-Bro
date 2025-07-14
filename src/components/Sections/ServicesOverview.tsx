import React from 'react'
import { MapPin, DollarSign, Clock, Users, ArrowRight } from 'lucide-react'

const ServicesOverview: React.FC = () => {
  const programs = [
    {
      country: "Portugal",
      program: "Golden Visa Program",
      investment: "€280,000",
      timeline: "12-18 months",
      benefits: ["EU residency", "Schengen access", "Path to citizenship"],
      image: "/images/citizenship/legal-documents.png",
      popular: true
    },
    {
      country: "Spain",
      program: "Investor Visa",
      investment: "€500,000",
      timeline: "6-12 months",
      benefits: ["EU residency", "Family inclusion", "Business opportunities"],
      image: "/images/citizenship/consultation-office.webp",
      popular: false
    },
    {
      country: "Greece",
      program: "Golden Visa",
      investment: "€250,000",
      timeline: "8-12 months",
      benefits: ["EU residency", "Rental income", "Low cost of living"],
      image: "/images/citizenship/passport-collection.jpg",
      popular: false
    },
    {
      country: "Malta",
      program: "Citizenship Program",
      investment: "€690,000",
      timeline: "36 months",
      benefits: ["EU citizenship", "Visa-free travel", "Tax advantages"],
      image: "/images/citizenship/success-story.jpg",
      popular: true
    },
    {
      country: "Cyprus",
      program: "Investment Program",
      investment: "€300,000",
      timeline: "6-9 months",
      benefits: ["EU residency", "Business hub", "Quality lifestyle"],
      image: "/images/citizenship/team-member-1.jpg",
      popular: false
    },
    {
      country: "Turkey",
      program: "Citizenship by Investment",
      investment: "$400,000",
      timeline: "3-6 months",
      benefits: ["Turkish citizenship", "Strategic location", "Growing economy"],
      image: "/images/citizenship/team-member-2.jpg",
      popular: false
    }
  ]

  return (
    <section  id="services" className=" overflow-hidden py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-in" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Citizenship & Residency Programs
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our carefully curated selection of citizenship and residency programs 
            designed to meet your unique needs and investment preferences.
          </p>
        </div>

        {/* Programs Grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={`${program.country} ${program.program}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {program.popular && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program.country}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {program.program}
                  </p>
                </div>

                {/* Key Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-900">Min. Investment:</span>
                    <span className="ml-2 text-gray-600">{program.investment}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">Timeline:</span>
                    <span className="ml-2 text-gray-600">{program.timeline}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Don't see the program you're looking for? We offer customized solutions for your specific needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule Personal Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
