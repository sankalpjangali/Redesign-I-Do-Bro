import React from 'react'
import { MessageCircle, Users, Target, ArrowRight } from 'lucide-react'

const HeroSectionContact: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build <span className="text-blue-600">Social Impact</span> Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partner with idobro to create meaningful change through citizenship, entrepreneurship, 
              and strategic partnerships. Our team is ready to collaborate on your next social impact initiative.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100" data-aos="fade-up">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto" >
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500K+</h3>
              <p className="text-gray-600">Individuals Impacted</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100" data-aos="fade-up">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 mx-auto">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Countries Reached</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100" data-aos="fade-up">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 mx-auto">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24hrs</h3>
              <p className="text-gray-600">Response Time</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact-forms" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact-methods" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Explore Contact Options
            </a>
          </div>

          {/* Quick Contact Note */}
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg inline-block">
            <p className="text-amber-800 text-sm font-medium">
              💡 <strong>Quick Start:</strong> For immediate assistance, call us at 
              <a href="tel:02228513880" className="text-amber-900 underline ml-1">022-28513880</a>
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-16">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto">
            <img 
              data-aos="fade-down"
              src="/images/contact/contact-hero.jpg" 
              alt="Professional team collaboration" 
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionContact
