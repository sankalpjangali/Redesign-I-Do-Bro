import React, { useState } from "react";

const TrustedOrganizations: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const organizations = [
    {
      name: "Tata Capital",
      logo: "https://res.cloudinary.com/dhs64xefe/image/upload/v1768814477/Tata_logo_ob4ngl.png",
    },
    {
      name: "Glenmark Foundation",
      logo: "https://res.cloudinary.com/dhs64xefe/image/upload/v1768814642/GF_Logo_gdioit.jpg",
    },
    {
      name: "Kotak Education Foundation",
      logo: "https://res.cloudinary.com/dhs64xefe/image/upload/v1768814643/kotak_rqnaot.png",
    },
    {
      name: "Godrej",
      logo: "https://res.cloudinary.com/dhs64xefe/image/upload/v1768814643/godrej_tzrgnt.jpg",
    },
    {
      name: "UNICEF",
      logo: "https://res.cloudinary.com/dhs64xefe/image/upload/v1768814643/unicef_2_rm7d6y.png",
    },
    {
      name: "Britannia Nutrition Foundation",
      logo: "https://res.cloudinary.com/dhs64xefe/image/upload/v1768815482/britani_yc0p9s.jpg",
    },
  ];

  const organizations2 = [
    {
      name: "Ambuja Foundation",
      logo: "https://res.cloudinary.com/dhs64xefe/image/upload/v1768814644/ambuja_xfga7q.png",
    },
    { name: "UN Women", logo: "UW" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Strategic partnerships with corporates, foundations, government, and
            international organizations driving collective impact.
          </p>
        </div>

        {/* First Row of Organizations */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="relative w-40 h-24 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Logo View (Default) */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="text-3xl font-bold text-gray-300">
                  <img src={`${org.logo}`} alt="" />
                </div>
              </div>

              {/* Text View (On Hover) */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-gray-700 font-semibold text-center px-4">
                  {org.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row of Organizations */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {organizations2.map((org, index) => {
            const actualIndex = index + organizations.length;
            return (
              <div
                key={actualIndex}
                className="relative w-40 h-24 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setHoveredIndex(actualIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Logo View (Default) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === actualIndex ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="text-3xl font-bold text-gray-300">
                    <img src={`${org.logo}`} alt="" />
                  </div>
                </div>

                {/* Text View (On Hover) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 transition-opacity duration-300 ${
                    hoveredIndex === actualIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-gray-700 font-semibold text-center px-4">
                    {org.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            And 100+ collaborators across sectors and geographies
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedOrganizations;
