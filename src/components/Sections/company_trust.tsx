import React, { useState, useEffect } from "react";

const TrustedOrganizations: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [organization, setOrganizations] = useState([]);

  useEffect(() => {
    fetch("https://backend-idobro.onrender.com/api/partners")
      .then((res) => res.json())
      .then((data) => setOrganizations(data));
  }, []);
  // This will come from your backend - just replace this array with your API data
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
    {
      name: "Ambuja Foundation",
      logo: "https://res.cloudinary.com/dhs64xefe/image/upload/v1768814644/ambuja_xfga7q.png",
    },
    {
      name: "UN Women",
      logo: "https://res.cloudinary.com/dhs64xefe/image/upload/v1768814643/unwomen_logo.png",
    },
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
            Strategic partnerships with corporates, foundations, government,
            ands international organizations driving collective impact.
          </p>
        </div>

        {/* Dynamic Grid of Organizations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
          {organization.map((org, index) => (
            <div
              key={index}
              className="relative w-full h-24 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Logo View (Default) */}
              <div
                className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={org.logo}
                  alt={org.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Text View (On Hover) */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-gray-700 font-semibold text-center px-4 text-sm">
                  {org.name}
                </span>
              </div>
            </div>
          ))}
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
