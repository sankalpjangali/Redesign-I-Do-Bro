import React, { useState, useEffect } from 'react'
import { ChevronDown, Users, TrendingUp, Award, Target, Lightbulb, Heart, Leaf, Network, BookOpen, MessageCircle, Star, ArrowRight, Play } from 'lucide-react'

interface ContentData {
  page_title: string
  hero_section: {
    title: string
    subtitle: string
    cta: string
  }
  impact_metrics: {
    enterprises_engaged: string
    entrepreneurs_supported: string
    workshops: string
    women_entrepreneurs_mentored: string
    exhibition_days: string
    sales_facilitated: string
  }
  abcd_model: {
    description: string
    focus: string
    approach: string
  }
  services: Array<{
    title: string
    description: string
  }>
  brand_colors: {
    primary_orange: string
    secondary_green: string
    purple: string
    pink: string
    blue: string
    red: string
  }
  contact_email: string
}

const EntrepreneurshipPage: React.FC = () => {
  const [contentData, setContentData] = useState<ContentData | null>(null)
  const [animatedNumbers, setAnimatedNumbers] = useState({
    enterprises: 0,
    entrepreneurs: 0,
    workshops: 0,
    women: 0,
    exhibitions: 0,
    sales: 0
  })

  useEffect(() => {
    fetch('/data/entrepreneurship_content.json')
      .then(response => response.json())
      .then(data => {
        setContentData(data)
        // Animate numbers
        animateNumbers(data.impact_metrics)
      })
      .catch(error => console.error('Error loading content:', error))
  }, [])

  const animateNumbers = (metrics: any) => {
    const targets = {
      enterprises: parseInt(metrics.enterprises_engaged.replace(',', '')),
      entrepreneurs: parseInt(metrics.entrepreneurs_supported.replace('+', '')),
      workshops: parseInt(metrics.workshops.replace('+', '')),
      women: parseInt(metrics.women_entrepreneurs_mentored.replace('+', '')),
      exhibitions: parseInt(metrics.exhibition_days.replace('+', '')),
      sales: parseInt(metrics.sales_facilitated.replace(/[+, INR]/g, ''))
    }

    const duration = 2000
    const steps = 50
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedNumbers({
        enterprises: Math.floor(targets.enterprises * progress),
        entrepreneurs: Math.floor(targets.entrepreneurs * progress),
        workshops: Math.floor(targets.workshops * progress),
        women: Math.floor(targets.women * progress),
        exhibitions: Math.floor(targets.exhibitions * progress),
        sales: Math.floor(targets.sales * progress)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setAnimatedNumbers(targets)
      }
    }, stepDuration)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!contentData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  const serviceIcons = [Network, BookOpen, Users, TrendingUp, MessageCircle, Heart]

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="\images\entrepreneurship\hero-entrepreneurship.jpg" 
            alt="Entrepreneurship Innovation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-green-600/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {contentData.hero_section.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {contentData.hero_section.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Empowering Woman, Social and Green Enterprises (WSGEs) through our innovative ABCD model
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Join Our Entrepreneurship Community
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('impact')} className="text-white/80 hover:text-white">
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section id="impact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming lives and building sustainable businesses through our comprehensive entrepreneurship ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{animatedNumbers.enterprises.toLocaleString()}</h3>
                <p className="text-lg text-gray-600">Enterprises Engaged</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{animatedNumbers.entrepreneurs.toLocaleString()}+</h3>
                <p className="text-lg text-gray-600">Entrepreneurs Supported</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{animatedNumbers.workshops.toLocaleString()}+</h3>
                <p className="text-lg text-gray-600">Workshops Conducted</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6 mx-auto">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{animatedNumbers.women.toLocaleString()}+</h3>
                <p className="text-lg text-gray-600">Women Entrepreneurs Mentored</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{animatedNumbers.exhibitions.toLocaleString()}+</h3>
                <p className="text-lg text-gray-600">Exhibition Days</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">₹{animatedNumbers.sales.toLocaleString()}+</h3>
                <p className="text-lg text-gray-600">Sales Facilitated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABCD Model Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {contentData.abcd_model.description}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our innovative approach focuses on <span className="font-semibold text-orange-600">{contentData.abcd_model.focus}</span>, 
                creating a comprehensive {contentData.abcd_model.approach} that empowers entrepreneurs to build sustainable, 
                impactful businesses.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <Lightbulb className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">Fostering creative solutions and disruptive thinking</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Leaf className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Sustainability</h3>
                  <p className="text-sm text-gray-600">Building environmentally conscious enterprises</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <Heart className="h-8 w-8 text-pink-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Social Impact</h3>
                  <p className="text-sm text-gray-600">Creating positive change in communities</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <Users className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Empowerment</h3>
                  <p className="text-sm text-gray-600">Supporting women entrepreneurs</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/entrepreneurship/green-business.jpeg" 
                alt="Sustainable Business Innovation" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-green-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support system designed to accelerate your entrepreneurial journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentData.services.map((service, index) => {
              const IconComponent = serviceIcons[index] || Lightbulb
              const colors = ['orange', 'green', 'purple', 'pink', 'blue', 'red']
              const color = colors[index] || 'orange'
              
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                  <div className={`flex items-center justify-center w-16 h-16 bg-${color}-100 rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-8 w-8 text-${color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real entrepreneurs, real results. Discover how our program has transformed businesses and lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="\images\entrepreneurship\women-entrepreneur.jpg" 
                  alt="Successful Woman Entrepreneur" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Priya Sharma</h3>
                  <p className="text-gray-600 text-sm">Eco-Fashion Startup</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "I do bro's mentorship program helped me scale my sustainable fashion business from a home-based operation to a ₹50 lakh annual revenue company."
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Growth:</span> 400% revenue increase in 18 months
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="\images\entrepreneurship\success-story.webp" 
                  alt="Successful Entrepreneur" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Rajesh Kumar</h3>
                  <p className="text-gray-600 text-sm">AgriTech Solution</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The networking opportunities and business consultancy provided by I do bro connected me with key investors and helped me reach 10,000+ farmers."
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Impact:</span> 10,000+ farmers benefited
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="\images\entrepreneurship\entrepreneurs-team.jpeg" 
                  alt="Entrepreneur Team" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">TechCare Solutions</h3>
                  <p className="text-gray-600 text-sm">HealthTech Startup</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "From idea to market leader - I do bro's comprehensive support helped us develop a telehealth platform serving 50,000+ patients."
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Achievement:</span> Market leader in telehealth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey from idea to successful enterprise in four simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-orange-600 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Apply & Assess</h3>
              <p className="text-gray-600">Submit your business idea and undergo our comprehensive assessment process</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Plan & Develop</h3>
              <p className="text-gray-600">Work with our experts to refine your business model and develop strategies</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Launch & Connect</h3>
              <p className="text-gray-600">Launch your business with our support and connect with our network</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-pink-600 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scale & Succeed</h3>
              <p className="text-gray-600">Continuous mentoring and support to help you scale and achieve success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Idea?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join thousands of entrepreneurs who have already started their journey with I do bro. 
            Let's build something amazing together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <MessageCircle className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Get in Touch</h3>
              <p className="text-orange-100 mb-4">Ready to start your journey?</p>
              <a href={`mailto:${contentData.contact_email}`} className="text-white font-semibold hover:text-orange-200 transition-colors">
                {contentData.contact_email}
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Users className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Join Community</h3>
              <p className="text-orange-100 mb-4">Connect with fellow entrepreneurs</p>
              <button className="text-white font-semibold hover:text-orange-200 transition-colors">
                Join Now
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <BookOpen className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Learn More</h3>
              <p className="text-orange-100 mb-4">Explore our resources</p>
              <button className="text-white font-semibold hover:text-orange-200 transition-colors">
                Browse Resources
              </button>
            </div>
          </div>
          
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Start Your Entrepreneurship Journey
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">I do bro</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering entrepreneurs to build sustainable, impactful businesses through our comprehensive 
                ecosystem of support, mentorship, and resources.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Networking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{contentData.contact_email}</li>
                <li>+91 XXX XXX XXXX</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 I do bro. All rights reserved. Fostering innovation and resilience through entrepreneurship.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EntrepreneurshipPage
