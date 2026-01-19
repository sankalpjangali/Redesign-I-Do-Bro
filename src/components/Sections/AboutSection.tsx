import React from "react";
import { Users, Leaf, MapPin, Globe, Building2, Calendar } from "lucide-react";

const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "7M+",
      label: "Lives Touched",
      description: "Across India and 7 countries",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/20",
    },
    {
      icon: Leaf,
      value: "5,000+",
      label: "WSG Enterprises",
      description: "Women, Social & Green supported",
      iconColor: "text-green-400",
      iconBg: "bg-green-500/20",
    },
    {
      icon: MapPin,
      value: "29",
      label: "States",
      description: "Across India with ecosystem reach",
      iconColor: "text-yellow-400",
      iconBg: "bg-yellow-500/20",
    },
    {
      icon: Globe,
      value: "10K+",
      label: "RISE Participants",
      description: "From 84 countries",
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/20",
    },
    {
      icon: Building2,
      value: "540+",
      label: "Institutions",
      description: "Corporate, NGO, Government",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/20",
    },
    {
      icon: Calendar,
      value: "16",
      label: "Years",
      description: "Of continuous innovation",
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact: Multiplied Across Ecosystems
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            16 years of consistent delivery, creating lasting change across
            communities, enterprises, and ecosystems.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`${stat.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
              >
                <stat.icon className={`${stat.iconColor} w-7 h-7`} />
              </div>

              {/* Value */}
              <div className="text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
