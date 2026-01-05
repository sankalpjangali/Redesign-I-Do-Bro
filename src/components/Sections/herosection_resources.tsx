import React from "react";

const HeroSection_Resources = () => {
  return (
    <section id="resources" className="relative min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-blue-400 pt-20">
      <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="text-center space-y-6 py-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Explore Our Resources
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Access a wealth of information, guides, and tools to help you navigate your journey with us.
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 ransition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-white mb-2">
              50+
            </h3>
            <p className="text-purple-100 font-medium">Awards and Recognition</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 ransition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-white mb-2">
              40+
            </h3>
            <p className="text-purple-100 font-medium">News</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 ransition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-white mb-2">
              10+
            </h3>
            <p className="text-purple-100 font-medium">Reports</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 ransition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-white mb-2">
              40+
            </h3>
            <p className="text-purple-100 font-medium">Blogs</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection_Resources;