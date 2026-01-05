import React from 'react'
import HeroSection_Resources from '../components/Sections/herosection_resources'
import ResourceReport from '../components/Sections/Resource_Report'
import ResourceNews from '../components/Sections/Resource_News'
import BlogPublicPage from '../components/Sections/Resource_Blogs'
import ResourceAwards from '../components/Sections/Resources_awards'
import TeamSection from '../components/Sections/TeamSection'
import MediaShowcase from '../components/Sections/media_resources'
export default function ResourcesPage() {
  
  const demoPartners = [
  { name: "Google", logo: "/google.svg" },
  { name: "Microsoft", logo: "/microsoft.svg" }
];
const myMediaData = {
  videos: [
    {
      id: 1,
      type: 'video',
      title: 'Your Video Title',
      description: 'Watch our latest content',
      thumbnail: 'https://your-image-url.jpg',
      duration: '12:34',
      views: '15K',
      date: 'Oct 20, 2025'
    },
    // ... more videos
  ],
  newsletters: [
    {
      id: 4,
      type: 'newsletter',
      title: 'Your Newsletter Title',
      description: 'Monthly updates',
      image: 'https://your-image-url.jpg',
      date: 'Oct 21, 2025',
      readTime: '5 min read'
    },
    // ... more newsletters
  ],
  media: [
    {
      id: 6,
      type: 'article',
      title: 'Your Article Title',
      description: 'Deep dive into technology',
      image: 'https://your-image-url.jpg',
      date: 'Oct 22, 2025',
      readTime: '7 min read'
    },
    // ... more articles
  ]
};
  return (

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main>
        <HeroSection_Resources />
        <ResourceReport  />
        <ResourceNews />
        <BlogPublicPage useMockData={true} />
        <ResourceAwards />
        <MediaShowcase data={myMediaData} />
        <TeamSection />
        
        {/* Additional sections can be added here */}
      </main>
    </div>
  )
}