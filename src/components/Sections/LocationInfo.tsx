import React from 'react'
import { MapPin, Clock, Phone, Mail, Navigation, Car, Train, Plane } from 'lucide-react'

const LocationInfo: React.FC = () => {
  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Public Holidays", hours: "Closed" }
  ]

  const transportOptions = [
    {
      icon: Train,
      title: "By Train",
      description: "Nearest railway station: Mumbai Central (15 min drive)",
      color: "blue"
    },
    {
      icon: Plane,
      title: "By Air",
      description: "Mumbai Airport (45 min drive)",
      color: "green"
    },
    {
      icon: Car,
      title: "By Car",
      description: "Ample parking available on-site",
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      green: "bg-green-50 text-green-600 border-green-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-blue-600">Office</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We welcome you to visit our office in Mumbai. Schedule an appointment or drop by during our business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Information */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">idobro Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mumbai, Maharashtra<br />
                    India<br />
                    <span className="text-sm text-gray-500">Exact address provided upon appointment confirmation</span>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:02228513880"
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
                <a 
                  href="mailto:info@idobro.com"
                  className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div data-aos="fade-up-right" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
              </div>
              
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> We recommend scheduling appointments in advance to ensure our team is available to meet with you.
                </p>
              </div>
            </div>

            {/* Transportation */}
            <div data-aos="fade-up" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Navigation className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">How to Reach Us</h3>
              </div>
              
              <div className="space-y-4">
                {transportOptions.map((option, index) => {
                  const IconComponent = option.icon
                  const colorClasses = getColorClasses(option.color)
                  
                  return (
                    <div key={index} className={`p-4 rounded-lg border-2 ${colorClasses}`}>
                      <div className="flex items-start space-x-3">
                        <IconComponent className="w-5 h-5 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">{option.title}</h4>
                          <p className="text-sm opacity-80">{option.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Map and Visual */}
          <div className="space-y-8" >
            {/* Office Image */}
            <div data-aos="fade-left" className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/images/contact/office-building.jpg" 
                alt="idobro office building" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Office Space</h3>
                <p className="text-gray-600">
                  Our contemporary office in Mumbai provides a collaborative environment where 
                  innovation meets social impact. Equipped with modern amenities and meeting facilities.
                </p>
              </div>
            </div>

            {/* Schedule Visit Card */}
            <div data-aos="fade-up-left" className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Schedule a Visit</h3>
              <p className="mb-6 opacity-90">
                Want to meet our team in person? We'd love to show you around our office 
                and discuss how we can work together to create meaningful social impact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Free consultation available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Meet our expert team</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Tour our facilities</span>
                </div>
              </div>
              
              <a 
                href="mailto:info@idobro.com?subject=Office Visit Request"
                className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Appointment
              </a>
            </div>

            {/* Contact Summary */}
            <div data-aos="fade-up" className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact Reference</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">General Inquiries:</span>
                  <a href="mailto:info@idobro.com" className="text-blue-600 hover:underline">
                    info@idobro.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Entrepreneurship:</span>
                  <a href="mailto:hema.ganachari@idobro.com" className="text-blue-600 hover:underline">
                    hema.ganachari@idobro.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <a href="tel:02228513880" className="text-blue-600 hover:underline">
                    022-28513880
                  </a>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Response time: Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationInfo
