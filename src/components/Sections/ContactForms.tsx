import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Users, Briefcase, MessageSquare, Newspaper } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  organization?: string
  subject: string
  message: string
  inquiryType: string
  [key: string]: string | undefined
}

const ContactForms: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const formTabs = [
    {
      id: 'general',
      label: 'General Inquiry',
      icon: MessageSquare,
      color: 'blue'
    },
    {
      id: 'partnership',
      label: 'Partnership',
      icon: Users,
      color: 'green'
    },
    {
      id: 'entrepreneurship',
      label: 'Entrepreneurship',
      icon: Briefcase,
      color: 'purple'
    },
    {
      id: 'media',
      label: 'Media & Press',
      icon: Newspaper,
      color: 'red'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: '',
        inquiryType: activeTab
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const getTabColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-50',
      green: isActive ? 'bg-green-600 text-white' : 'text-green-600 hover:bg-green-50',
      purple: isActive ? 'bg-purple-600 text-white' : 'text-purple-600 hover:bg-purple-50',
      red: isActive ? 'bg-red-600 text-white' : 'text-red-600 hover:bg-red-50'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const renderFormFields = () => {
    const baseFields = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Your organization name"
            />
          </div>
        </div>
      </>
    )

    const subjectField = (
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder={
            activeTab === 'partnership' ? 'Partnership opportunity' :
            activeTab === 'entrepreneurship' ? 'Entrepreneurship program inquiry' :
            activeTab === 'media' ? 'Media inquiry' :
            'General inquiry'
          }
        />
      </div>
    )

    const messageField = (
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
          placeholder={
            activeTab === 'partnership' ? 'Tell us about your organization and how you\'d like to partner with us...' :
            activeTab === 'entrepreneurship' ? 'Describe your business idea or tell us about the program you\'re interested in...' :
            activeTab === 'media' ? 'Please provide details about your media request or interview requirements...' :
            'How can we help you? Please provide as much detail as possible...'
          }
        />
      </div>
    )

    // Add specific fields based on form type
    const specificFields = () => {
      switch (activeTab) {
        case 'partnership':
          return (
            <div>
              <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">
                Partnership Type
              </label>
              <select
                id="partnershipType"
                name="partnershipType"
                value={formData.partnershipType || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select partnership type</option>
                <option value="corporate">Corporate Partnership</option>
                <option value="ngo">NGO Collaboration</option>
                <option value="government">Government Partnership</option>
                <option value="academic">Academic Institution</option>
                <option value="funding">Funding Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>
          )
        case 'entrepreneurship':
          return (
            <div>
              <label htmlFor="businessStage" className="block text-sm font-medium text-gray-700 mb-2">
                Business Stage
              </label>
              <select
                id="businessStage"
                name="businessStage"
                value={formData.businessStage || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select your business stage</option>
                <option value="idea">Idea Stage</option>
                <option value="startup">Early Startup</option>
                <option value="growth">Growth Stage</option>
                <option value="established">Established Business</option>
                <option value="social">Social Enterprise</option>
              </select>
            </div>
          )
        case 'media':
          return (
            <div>
              <label htmlFor="mediaType" className="block text-sm font-medium text-gray-700 mb-2">
                Media Type
              </label>
              <select
                id="mediaType"
                name="mediaType"
                value={formData.mediaType || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select media type</option>
                <option value="interview">Interview Request</option>
                <option value="press">Press Release</option>
                <option value="feature">Feature Story</option>
                <option value="event">Event Coverage</option>
                <option value="podcast">Podcast</option>
                <option value="other">Other</option>
              </select>
            </div>
          )
        default:
          return null
      }
    }

    return (
      <div className="space-y-6">
        {baseFields}
        {specificFields()}
        {subjectField}
        {messageField}
      </div>
    )
  }

  return (
    <section id="contact-forms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the form that best matches your inquiry. Our specialized teams will respond promptly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Form Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {formTabs.map((tab) => {
              const IconComponent = tab.icon
              const isActive = activeTab === tab.id
              const colorClasses = getTabColorClasses(tab.color, isActive)
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${colorClasses}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                  <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                <div>
                  <p className="text-red-800 font-medium">Error sending message</p>
                  <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {renderFormFields()}

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="text-sm text-gray-500">
                  <p>* Required fields</p>
                  <p>We respect your privacy and will never share your information.</p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForms
