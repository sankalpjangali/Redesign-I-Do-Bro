import React from "react";
const ResourceNews: React.FC = () => {
  return (
    <section id="resources" className="relative  h-[100%] lg:h-[80%] bg-gradient-to-br from-purple-700 via-purple-600 to-blue-400 pt-20 pd-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-white mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News articles will be mapped here */}
          <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 hover:bg-opacity-50 transition-all duration-300">
            <img src="/images/citizenship/team-member-2.jpg" alt="News Title 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">News Title 1</h3>
            <p className="text-gray-600 mb-4">Brief description of the news article goes here. It should be concise and informative.</p>
            <a href="#" className="text-purple-600 hover:underline">Read more</a>
          </div>
          <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 hover:bg-opacity-50 transition-all duration-300">
            <img src="/images/citizenship/team-member-2.jpg" alt="News Title 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">News Title 1</h3>
            <p className="text-gray-600 mb-4">Brief description of the news article goes here. It should be concise and informative.</p>
            <a href="#" className="text-purple-600 hover:underline">Read more</a>
          </div>
          <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 hover:bg-opacity-50 transition-all duration-300">
            <img src="/images/citizenship/team-member-2.jpg" alt="News Title 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">News Title 1</h3>
            <p className="text-gray-600 mb-4">Brief description of the news article goes here. It should be concise and informative.</p>
            <a href="#" className="text-purple-600 hover:underline">Read more</a>
          </div>
          <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 hover:bg-opacity-50 transition-all duration-300">
            <img src="/images/citizenship/team-member-2.jpg" alt="News Title 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">News Title 1</h3>
            <p className="text-gray-600 mb-4">Brief description of the news article goes here. It should be concise and informative.</p>
            <a href="#" className="text-purple-600 hover:underline">Read more</a>
          </div>
          <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 hover:bg-opacity-50 transition-all duration-300">
            <img src="/images/citizenship/team-member-2.jpg" alt="News Title 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">News Title 1</h3>
            <p className="text-gray-600 mb-4">Brief description of the news article goes here. It should be concise and informative.</p>
            <a href="#" className="text-purple-600 hover:underline">Read more</a>
          </div>
          <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-6 hover:bg-opacity-50 transition-all duration-300">
            <img src="/images/citizenship/team-member-2.jpg" alt="News Title 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">News Title 1</h3>
            <p className="text-gray-600 mb-4">Brief description of the news article goes here. It should be concise and informative.</p>
            <a href="#" className="text-purple-600 hover:underline">Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ResourceNews;
