import React from "react";  
const HeroSection_Resources: React.FC = () => {
  return (
    <section id="resources" className="relative  h-[42rem] bg-gradient-to-br from-purple-700 to-blue-300 pt-20 ">
      <div className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8   lg:pb-5">
        <div className="text-center space-y-8 py-30">
          <h2 className="text-5xl md:text-4xl lg:text-7xl font-bold text-white ">
            Explore Our Resources
          </h2>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto py-4">
            Access a wealth of information, guides, and tools to help you navigate your journey with us.
          </p>
        </div>
      </div>
      <div className="flex flex-row lg: flex-wrap gap-8 my-5  justify-evenly w-[100%] md-[5rem] xl:h-[40%] md:w-[50%] md:mx-auto md:h-[70%]  md:md-[5rem] px-4 py-6 sm:  bg-purple-300 bg-opacity-40 rounded-xl shadow-lg  z-10 sm:h-[25%] ">
        {/* <div className="flex flex-row lg: flex-wrap gap-8 my-5 py-4 sm:max-[20rem]:h-[20rem]"> */}
          <div className="flex-1 rounded-lg shadow-lg p-6 lg:w-1/3 text-center bg-white bg-opacity-40 h-[1/4rem] ">
            <h2 className="text-xl font-bold text-gray-900 h-[1/4rem]">50+</h2>
            <p className="text-gray-600">Resources</p>
          </div>
          <div className="flex-1  rounded-lg shadow-lg p-6 w-40 lg:w-1/3 text-center bg-white bg-opacity-40 h-[1/4rem]">
            <h2 className="text-xl font-bold text-gray-900  md:h-[4rem] h-[1/4rem]">40+</h2>
            <p className="text-gray-600">Resources</p>
          </div>
          <div className="flex-1  rounded-lg shadow-lg p-6 w-40 lg:w-1/3 text-center bg-white bg-opacity-40 h-[1/4rem]">
            <h2 className="text-xl font-bold text-gray-900  md:h-[4rem] h-[1/4rem]">40+</h2>
            <p className="text-gray-600">Resources</p>
          </div>
          <div className="flex-1  rounded-lg shadow-lg p-6 w-40 lg:w-1/3 text-center bg-white bg-opacity-40 h-[1/4rem]">
            <h2 className="text-xl font-bold text-gray-900  md:h-[4rem] h-[1/4rem] ">40+</h2>
            <p className="text-gray-600">Resources</p>
          </div>
          
          
          
        </div>
      {/* </div> */}
    </section>
  );
}
export default HeroSection_Resources;
//  background: linear-gradient(135deg, #7c3aed 0%, #1e40af 100%);