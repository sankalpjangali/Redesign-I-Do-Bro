import React from 'react'
import HeroSection_Resources from '../components/Sections/herosection_resources'
import ResourceReport from '../components/Sections/Resource_Report'
import ResourceNews from '../components/Sections/Resource_News'
export default function ResourcesPage() {
  
  const demoPartners = [
  { name: "Google", logo: "/google.svg" },
  { name: "Microsoft", logo: "/microsoft.svg" }
];
  return (

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main>
        <HeroSection_Resources />
        <ResourceReport partners={demoPartners} />
        <ResourceNews />
        {/* Additional sections can be added here */}
      </main>
    </div>
  )
}