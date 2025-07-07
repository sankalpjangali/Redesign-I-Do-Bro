import React from 'react'
import { Linkedin, Mail, Phone, Award, BookOpen, Globe } from 'lucide-react'

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Elena Martinez",
      role: "Senior Immigration Attorney",
      specialization: "EU Citizenship & Golden Visa Programs",
      image: "/images/citizenship/team-member-1.jpg",
      experience: "15+ years",
      languages: ["English", "Spanish", "Portuguese"],
      qualifications: [
        "LL.M. International Law, Oxford University",
        "Licensed Immigration Attorney (EU)",
        "Member, International Bar Association"
      ],
      bio: "Elena specializes in European citizenship and investment immigration programs. She has successfully guided over 500 families through complex citizenship applications across multiple EU jurisdictions.",
      contact: {
        email: "elena@idobro.com",
        linkedin: "#"
      }
    },
    {
      name: "David Thompson",
      role: "Head of Client Relations",
      specialization: "Investment Immigration & Due Diligence",
      image: "/images/citizenship/team-member-2.jpg",
      experience: "12+ years",
      languages: ["English", "French", "German"],
      qualifications: [
        "MBA Finance, London Business School",
        "Certified Investment Advisor",
        "Former Banking Executive"
      ],
      bio: "David brings extensive financial services experience to help clients navigate investment requirements and optimize their citizenship investment strategies for maximum returns.",
      contact: {
        email: "david@idobro.com",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Sarah Chen",
      role: "Legal Director",
      specialization: "International Law & Compliance",
      image: "/images/citizenship/success-story.jpg",
      experience: "18+ years",
      languages: ["English", "Mandarin", "Japanese"],
      qualifications: [
        "PhD International Law, Harvard Law",
        "Former UN Legal Advisor",
        "Published Author on Immigration Law"
      ],
      bio: "Dr. Chen oversees all legal compliance matters and has authored numerous publications on international immigration law. She ensures all our processes meet the highest legal standards.",
      contact: {
        email: "sarah@idobro.com",
        linkedin: "#"
      }
    }
  ]

  const stats = [
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "Professional Certifications",
      value: "25+",
      description: "Across our team"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Years Combined Experience",
      value: "50+",
      description: "In immigration law"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Languages Spoken",
      value: "12+",
      description: "To serve global clients"
    }
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our team of experienced immigration attorneys and advisors are dedicated to 
            making your citizenship journey successful and stress-free.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.title}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row gap-8 p-8 bg-gray-50 rounded-2xl ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/3">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-600 font-medium">
                    {member.specialization}
                  </p>
                </div>

                {/* Experience & Languages */}
                <div className="flex flex-wrap gap-6">
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Experience:</span>
                    <span className="ml-2 text-sm text-gray-600">{member.experience}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Languages:</span>
                    <span className="ml-2 text-sm text-gray-600">{member.languages.join(', ')}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-700 leading-relaxed">
                  {member.bio}
                </p>

                {/* Qualifications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Qualifications:</h4>
                  <ul className="space-y-2">
                    {member.qualifications.map((qualification, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                        {qualification}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <a
                    href={`mailto:${member.contact.email}`}
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">Contact</span>
                  </a>
                  <a
                    href={member.contact.linkedin}
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">
            Work with Our Expert Team
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get personalized guidance from our experienced immigration attorneys and advisors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </a>
            <a
              href="mailto:info@idobro.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
