import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Users, Briefcase, Handshake } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        interest: '',
        message: ''
      });
    }, 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    setIsNewsletterSubmitted(true);
    
    setTimeout(() => {
      setIsNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'General Inquiries',
      details: ['info@idobro.com'],
      description: 'For general questions and information'
    },
    {
      icon: Briefcase,
      title: 'Partnerships',
      details: ['partnerships@idobro.com'],
      description: 'Corporate partnerships and collaborations'
    },
    {
      icon: Users,
      title: 'Entrepreneurship',
      details: ['hema.ganachari@idobro.com'],
      description: 'Entrepreneurship programs and support'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 22-28513880'],
      description: 'Call us during business hours'
    }
  ];

  const offices = [
    {
      city: 'Mumbai',
      country: 'India',
      address: 'Corporate Office, Mumbai, Maharashtra, India',
      type: 'Headquarters'
    },
    {
      city: 'Stockholm',
      country: 'Sweden',
      address: 'European Operations, Stockholm, Sweden',
      type: 'Regional Office'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: 'UK Operations, London, United Kingdom',
      type: 'Regional Office'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Create
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Impact Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to partner with us? Whether you're looking to create social impact, 
            support entrepreneurship, or build meaningful partnerships, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for your interest. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your organization name"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="citizenship">Citizenship Solutions</option>
                    <option value="entrepreneurship">Entrepreneurship Programs</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="volunteering">Volunteering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Tell us about your ideas, questions, or how you'd like to collaborate..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="text-blue-400 font-medium">
                              {info.icon === Phone ? detail : (
                                <a href={`mailto:${detail}`} className="hover:text-blue-300 transition-colors">
                                  {detail}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                        <p className="text-gray-400 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h4 className="text-xl font-bold mb-4">Our Offices</h4>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-white">{office.city}, {office.country}</h5>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                        {office.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm flex items-center">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Our Impact</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive updates on our latest projects, 
            success stories, and opportunities to get involved.
          </p>
          
          {isNewsletterSubmitted ? (
            <div className="max-w-md mx-auto">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-green-400 mb-2">Successfully Subscribed!</h4>
              <p className="text-purple-100">Welcome to our community of changemakers.</p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-white focus:bg-white/30"
                />
                <button
                  type="submit"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
          
          <p className="text-purple-200 text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
