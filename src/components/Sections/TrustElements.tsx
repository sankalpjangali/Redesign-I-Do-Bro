import React from 'react'
import { Award, Globe, Users, TrendingUp, Star, Quote } from 'lucide-react'

const TrustElements: React.FC = () => {
  const impactStats = [
    {
      icon: Globe,
      number: "15+",
      label: "Countries Reached",
      description: "Global impact across multiple nations"
    },
    {
      icon: Users,
      number: "500K+",
      label: "Individuals Impacted",
      description: "Lives transformed through our programs"
    },
    {
      icon: TrendingUp,
      number: "100+",
      label: "Successful Projects",
      description: "Delivered with measurable outcomes"
    },
    {
      icon: Award,
      number: "50+",
      label: "Partner Organizations",
      description: "Trusted collaborations worldwide"
    }
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      title: "Director, Global Impact Foundation",
      company: "Fortune 500 Partner",
      quote: "idobro's approach to social impact is both innovative and sustainable. Their team's dedication to creating meaningful change is unparalleled.",
      rating: 5
    },
    {
      name: "Raj Patel",
      title: "Social Entrepreneur",
      company: "Impact Ventures",
      quote: "The entrepreneurship program at idobro gave me the tools and network I needed to scale my social enterprise. Highly recommended!",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      title: "CSR Head",
      company: "TechCorp Global",
      quote: "Working with idobro on our citizenship initiatives has been transformative. Their expertise and execution are exceptional.",
      rating: 5
    }
  ]

  const certifications = [
    "ISO 9001:2015 Certified",
    "UN Global Compact Signatory",
    "GuideStar Platinum Seal",
    "Better Business Bureau A+ Rating"
  ]

  const recognitions = [
    "Social Impact Organization of the Year 2023",
    "Excellence in Partnership Development",
    "Innovation in Entrepreneurship Programs",
    "Outstanding Corporate Social Impact"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-blue-600">Leaders Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. See why organizations choose idobro for their social impact initiatives.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</h4>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Partners Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-8">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Recognition */}
        <div data-aos="fade-up-right" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 text-green-600 mr-3" />
              Certifications & Compliance
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recognition */}
          <div data-aos="fade-up-left" className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Star className="w-6 h-6 text-blue-600 mr-3" />
              Awards & Recognition
            </h3>
            <ul className="space-y-3">
              {recognitions.map((recognition, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{recognition}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security and Privacy Assurance */}
        <div data-aos="fade-up" className="mt-16 bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Your Information is Safe with Us
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We maintain the highest standards of data protection and privacy. All communications are encrypted 
            and your information is never shared without explicit consent.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              SSL Encrypted
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Privacy Protected
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustElements
