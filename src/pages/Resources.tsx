import React from 'react'
import HeroSection_Resources from '../components/Sections/herosection_resources'
import ResourceReport from '../components/Sections/Resource_Report'
import ResourceNews from '../components/Sections/Resource_News'
import ResourcesBlogs from '../components/Sections/Resource_Blogs'
import ResourceAwards from '../components/Sections/Resources_awards'
import TeamSection from '../components/Sections/TeamSection'
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
        <ResourcesBlogs />
        <ResourceAwards />
        <TeamSection />
        {/* Additional sections can be added here */}
      </main>
    </div>
  )
}