import React from 'react'
import { Shield, Clock, Users, Award, Globe, CheckCircle } from 'lucide-react'

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "100% Legal & Secure",
      description: "All our processes are fully compliant with international law and government regulations."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Fast Processing",
      description: "Streamlined application process with expedited review and approval timelines."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Team",
      description: "Experienced immigration lawyers and citizenship specialists guide you every step."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Proven Track Record",
      description: "98% success rate with over 1000 successful citizenship and residency applications."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Network",
      description: "Partnerships with government agencies and legal firms in 15+ countries worldwide."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "End-to-End Service",
      description: "Complete support from initial consultation to final citizenship certificate delivery."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose idobro for Your Citizenship Journey?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We combine legal expertise, proven processes, and personalized service to make your 
            path to citizenship as smooth and successful as possible.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted by Families Worldwide
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence and client satisfaction has made us the preferred 
                choice for individuals and families seeking second citizenship and residency solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Expert Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Client Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Confidentiality</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/citizenship/trust-badges.jpg"
                alt="Trust and Security"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
