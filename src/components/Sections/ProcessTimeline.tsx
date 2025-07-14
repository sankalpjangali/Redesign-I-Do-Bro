import React from 'react'
import { CheckCircle, Clock, FileText, Users, Award, Home } from 'lucide-react'

const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Initial Consultation",
      description: "Free 30-minute consultation to assess your needs and determine the best program for you.",
      duration: "Day 1",
      details: [
        "Eligibility assessment",
        "Program recommendations", 
        "Investment requirements review",
        "Timeline discussion"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Document Preparation",
      description: "We guide you through gathering and preparing all required documentation.",
      duration: "Week 1-2",
      details: [
        "Document checklist provided",
        "Apostille and translation services",
        "Background checks coordination",
        "Investment proof preparation"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Application Submission",
      description: "Your complete application is reviewed and submitted to the relevant authorities.",
      duration: "Week 3",
      details: [
        "Final document review",
        "Application form completion",
        "Fee payment processing",
        "Official submission"
      ]
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Government Review",
      description: "Authorities review your application while we monitor progress and provide updates.",
      duration: "Month 2-6",
      details: [
        "Application tracking",
        "Status updates provided",
        "Additional document requests",
        "Communication with authorities"
      ]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Approval & Investment",
      description: "Upon approval, complete your investment and finalize all requirements.",
      duration: "Month 6-8",
      details: [
        "Approval notification",
        "Investment completion",
        "Biometric data collection",
        "Final compliance checks"
      ]
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Residency/Citizenship",
      description: "Receive your residency permit or citizenship certificate and enjoy your new status.",
      duration: "Month 8-12",
      details: [
        "Document issuance",
        "Travel document preparation",
        "Relocation assistance",
        "Ongoing support services"
      ]
    }
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-in" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Path to Citizenship
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our proven 6-step process ensures a smooth journey from initial consultation 
            to receiving your new citizenship or residency status.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                  {step.icon}
                </div>

                {/* Content */}
                <div data-aos="fade-up" className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    {/* Mobile Icon */}
                    <div className="lg:hidden flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                        {step.icon}
                      </div>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    {/* Desktop Duration */}
                    <div className="hidden lg:block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                      {step.duration}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Image */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <img
              src="/images/citizenship/process-timeline.jpg"
              alt="Citizenship Process Timeline"
              className="rounded-2xl shadow-2xl max-w-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Every case is unique, and timelines may vary based on the specific program and individual circumstances. 
            Our team provides regular updates throughout your journey.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
