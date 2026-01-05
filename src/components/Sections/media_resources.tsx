import React, { useState } from 'react';
import { Play, Mail, FileText, Calendar, ArrowRight, Eye, Clock } from 'lucide-react';

// Props interface for the component
// Pass data like: <MediaShowcase data={yourMediaData} />
export default function MediaShowcase({ data }) {
  const [activeTab, setActiveTab] = useState('all');

  // Default/fallback data if no data is passed
  const defaultContent = {
    videos: [
      {
        id: 1,
        type: 'video',
        title: 'Product Launch 2025',
        description: 'Watch our latest product unveiling and discover groundbreaking features',
        thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop',
        duration: '12:34',
        views: '15K',
        date: 'Oct 20, 2025'
      },
      {
        id: 2,
        type: 'video',
        title: 'Customer Success Stories',
        description: 'Real stories from businesses transforming their operations',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop',
        duration: '8:45',
        views: '8.2K',
        date: 'Oct 18, 2025'
      },
      {
        id: 3,
        type: 'video',
        title: 'Behind the Scenes',
        description: 'A day in the life at our headquarters',
        thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop',
        duration: '15:20',
        views: '12K',
        date: 'Oct 15, 2025'
      }
    ],
    newsletters: [
      {
        id: 4,
        type: 'newsletter',
        title: 'October Tech Digest',
        description: 'Industry insights, trends, and innovations shaping the future',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop',
        date: 'Oct 21, 2025',
        readTime: '5 min read'
      },
      {
        id: 5,
        type: 'newsletter',
        title: 'Product Updates Weekly',
        description: 'New features, improvements, and what is coming next',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
        date: 'Oct 19, 2025',
        readTime: '3 min read'
      }
    ],
    media: [
      {
        id: 6,
        type: 'article',
        title: 'The Future of Digital Innovation',
        description: 'Exploring emerging technologies and their impact on business',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop',
        date: 'Oct 22, 2025',
        readTime: '7 min read'
      },
      {
        id: 7,
        type: 'article',
        title: 'Design Trends 2025',
        description: 'What is hot in UI/UX design this year',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
        date: 'Oct 17, 2025',
        readTime: '6 min read'
      }
    ]
  };

  // Use passed data or fall back to default
  const content = data || defaultContent;

  const allContent = [...content.videos, ...content.newsletters, ...content.media];
  
  const filteredContent = activeTab === 'all' 
    ? allContent 
    : activeTab === 'videos' 
    ? content.videos 
    : activeTab === 'newsletters' 
    ? content.newsletters 
    : content.media;

  const getIcon = (type) => {
    switch(type) {
      case 'video': return <Play className="w-5 h-5" />;
      case 'newsletter': return <Mail className="w-5 h-5" />;
      case 'article': return <FileText className="w-5 h-5" />;
      default: return null;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'video': return 'bg-red-500';
      case 'newsletter': return 'bg-blue-500';
      case 'article': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Media Center</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Explore our latest videos, newsletters, and insights
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 -mt-6">
        <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
          {[
            { id: 'all', label: 'All Content', count: allContent.length },
            { id: 'videos', label: 'Videos', count: content.videos.length },
            { id: 'newsletters', label: 'Newsletters', count: content.newsletters.length },
            { id: 'media', label: 'Articles', count: content.media.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-sm ${
                activeTab === tab.id ? 'text-indigo-200' : 'text-gray-400'
              }`}>
                ({tab.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Content */}
      {activeTab === 'all' && filteredContent.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer group">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img 
                  src={filteredContent[0].thumbnail || filteredContent[0].image} 
                  alt={filteredContent[0].title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 left-4 ${getTypeColor(filteredContent[0].type)} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2`}>
                  {getIcon(filteredContent[0].type)}
                  {filteredContent[0].type}
                </div>
                {filteredContent[0].type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-indigo-600 ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {filteredContent[0].date}
                  </span>
                  {filteredContent[0].duration && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {filteredContent[0].duration}
                    </span>
                  )}
                  {filteredContent[0].readTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {filteredContent[0].readTime}
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {filteredContent[0].title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {filteredContent[0].description}
                </p>
                <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors w-fit group">
                  {filteredContent[0].type === 'video' ? 'Watch Now' : 'Read More'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {activeTab === 'all' ? 'All Content' : 'Latest'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.slice(activeTab === 'all' ? 1 : 0).map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.thumbnail || item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-3 left-3 ${getTypeColor(item.type)} text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                  {getIcon(item.type)}
                  {item.type}
                </div>
                {item.type === 'video' && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-indigo-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/75 text-white px-2 py-1 rounded text-xs font-medium">
                      {item.duration}
                    </div>
                  </>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  {item.views && (
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {item.views}
                    </span>
                  )}
                  {item.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <button className="text-indigo-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {item.type === 'video' ? 'Watch' : 'Read'} 
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription CTA */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <Mail className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates, insights, and exclusive content delivered to your inbox
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Data Structure Example (Hidden) */}
      <div className="hidden">
        {/* 
        USAGE EXAMPLE:
        
        const myMediaData = {
          videos: [
            {
              id: 1,
              type: 'video',
              title: 'Your Video Title',
              description: 'Description here',
              thumbnail: 'image-url.jpg',
              duration: '12:34',
              views: '15K',
              date: 'Oct 20, 2025'
            }
          ],
          newsletters: [
            {
              id: 2,
              type: 'newsletter',
              title: 'Newsletter Title',
              description: 'Description here',
              image: 'image-url.jpg',
              date: 'Oct 21, 2025',
              readTime: '5 min read'
            }
          ],
          media: [
            {
              id: 3,
              type: 'article',
              title: 'Article Title',
              description: 'Description here',
              image: 'image-url.jpg',
              date: 'Oct 22, 2025',
              readTime: '7 min read'
            }
          ]
        };

        <MediaShowcase data={myMediaData} />
        */}
      </div>
    </div>
  );
}