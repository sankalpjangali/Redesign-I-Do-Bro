import React from 'react'
// import Header from '../components/Sections/Header'
import HeroSection_Citizenship from '../components/Sections/HeroSection_citizenship'
import WhyChooseUs from '../components/Sections/WhyChooseUs'
import ServicesOverview from '../components/Sections/ServicesOverview'
import ProcessTimeline from '../components/Sections/ProcessTimeline'
import Testimonials from '../components/Sections/Testimonials'
import TeamSection from '../components/Sections/TeamSection'
// import FAQ from './components/FAQ'
// import ContactSection from './components/ContactSection'
// import Footer from './components/Footer'
// import './App.css'

function CitizenshipApp() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <HeroSection_Citizenship />
      <WhyChooseUs />
      <ServicesOverview />
      <ProcessTimeline />
      <Testimonials />
      {/* <TeamSection /> */}
      {/* <FAQ />
      <ContactSection />
      <Footer /> */}
    </div>
  )
}

export default CitizenshipApp
