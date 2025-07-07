import React from 'react'
import { Phone, Mail, MapPin, MessageSquare, Clock, Users, Briefcase, Newspaper } from 'lucide-react'

const ContactMethods: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "022-28513880",
      action: "Call Now",
      href: "tel:02228513880",
      color: "blue",
      availability: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: Mail,
      title: "General Inquiries",
      description: "For all general questions and information",
      contact: "info@idobro.com",
      action: "Send Email",
      href: "mailto:info@idobro.com",
      color: "green",
      availability: "24/7 - Response within 24 hours"
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship Programs",
      description: "Connect with our entrepreneurship expert",
      contact: "hema.ganachari@idobro.com",
      action: "Contact Specialist",
      href: "mailto:hema.ganachari@idobro.com",
      color: "purple",
      availability: "Mon-Fri, 10 AM - 5 PM IST"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant support via chat",
      contact: "Available on our website",
      action: "Start Chat",
      href: "https://www.idobro.com",
      color: "indigo",
      availability: "Mon-Fri, 9 AM - 6 PM IST"
    }
  ]

  const specializedContacts = [
    {
      icon: Users,
      title: "Partnership Opportunities",
      description: "Corporate collaborations and strategic partnerships",
      email: "info@idobro.com",
      color: "blue"
    },
    {
      icon: Newspaper,
      title: "Media & Press",
      description: "Press releases, interviews, and media inquiries",
      email: "info@idobro.com",
      color: "red"
    },
    {
      icon: MapPin,
      title: "Events & Workshops",
      description: "Information about our events and training programs",
      email: "info@idobro.com",
      color: "orange"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "bg-blue-100 text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        text: "text-blue-600"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "bg-green-100 text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        text: "text-green-600"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "bg-purple-100 text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        text: "text-purple-600"
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        icon: "bg-indigo-100 text-indigo-600",
        button: "bg-indigo-600 hover:bg-indigo-700",
        text: "text-indigo-600"
      },
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        icon: "bg-red-100 text-red-600",
        button: "bg-red-600 hover:bg-red-700",
        text: "text-red-600"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "bg-orange-100 text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        text: "text-orange-600"
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="contact-methods" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Multiple Ways to <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the communication method that works best for you. Our team is ready to assist across all channels.
          </p>
        </div>

        {/* Main Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            const colorClasses = getColorClasses(method.color)
            
            return (
              <div 
                data-aos="fade-up"
                key={index} 
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div   className={`${colorClasses.icon} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="mb-4">
                  <p className={`font-medium ${colorClasses.text}`}>{method.contact}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    {method.availability}
                  </div>
                </div>
                <a 
                  href={method.href}
                  className={`${colorClasses.button} inline-block w-full text-center text-white font-medium py-3 px-4 rounded-lg transition-colors`}
                >
                  {method.action}
                </a>
              </div>
            )
          })}
        </div>

        {/* Specialized Contact Cards */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Specialized Support Teams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializedContacts.map((contact, index) => {
              const IconComponent = contact.icon
              const colorClasses = getColorClasses(contact.color)
              
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`${colorClasses.icon} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h4>
                  <p className="text-gray-600 mb-3">{contact.description}</p>
                  <a 
                    href={`mailto:${contact.email}`}
                    className={`${colorClasses.text} hover:underline font-medium text-sm`}
                  >
                    {contact.email}
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick Response Promise */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium">
            <Clock className="w-5 h-5 mr-2" />
            We respond to all inquiries within 24 hours
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMethods
