import React, { useEffect, useRef, useState } from "react";
import {
  Rocket,
  TrendingUp,
  Building2,
  Users,
  Zap,
  Award,
  DollarSign,
} from "lucide-react";

const EntrepreneurshipPage: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set(),
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = (id: string) => visibleElements.has(id);

  const stats = [
    { number: "1,000+", label: "Entrepreneurs Supported" },
    { number: "Rs 7+ Cr", label: "Sales Facilitated" },
    { number: "850+", label: "Products Ideas" },
    { number: "5,000+", label: "Jobs Created" },
  ];

  const abcdModel = [
    {
      icon: "🎯",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Access Markets",
      description:
        "By connecting manufacturers to potential customers, aggregating demand, simplifying logistics, and optimizing price points.",
      features: [
        "Aggregator partnerships",
        "Linkages with retailers",
        "Procurement models (via Amazon Business, IKEA)",
        "Digital marketplace participation",
        "Exhibitions and trade shows",
      ],
      link: "Directly connect with export partners",
    },
    {
      icon: "🏗️",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Build Capacity",
      description:
        "By supporting skills development, for both the individual entrepreneur and the businesses they manage.",
      features: [
        "Business and financial management",
        "Production and operations",
        "Quality control",
        "Product diversification workshops",
        "Pricing and costing training",
        "Marketing and branding",
      ],
      link: "Masterminds designed to transform",
    },
    {
      icon: "🎓",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      title: "Create Linkages",
      description:
        "By bringing ecosystem partners—from government officials to financial institutions to technology platforms—into conversation.",
      features: [
        "Financial institutions",
        "Material supplier partnerships",
        "Technical partnerships",
        "Support service providers",
      ],
      link: "Strong support network",
    },
    {
      icon: "🚚",
      color: "bg-violet-100",
      iconColor: "text-violet-600",
      title: "Deliver Solutions",
      description:
        "By addressing immediate needs and opportunities for value addition and productivity benefits.",
      features: [
        "Direct procurement of raw materials",
        "Infrastructure support",
        "Technology support",
        "Direct interventions",
      ],
      link: "Strategic support solutions",
    },
  ];

  const enterprises = [
    {
      icon: "👩",
      color: "bg-purple-50",
      title: "Women-Led Enterprises",
      description:
        "Supporting women-led enterprises across diverse economic opportunity and community benefit.",
      examples: [
        "Home-based artisan businesses",
        "Agricultural value-added products",
        "Street food vendors/retailers",
      ],
      stats:
        "500+ women entrepreneurs supported annually / 8+ incubation & growth",
    },
    {
      icon: "🏢",
      color: "bg-blue-50",
      title: "Social Enterprises",
      description:
        "Building and scaling small mission-driven, socially oriented businesses addressing social/environmental issues in accessible model.",
      examples: [
        "Mission-driven marketplace platforms",
        "Education and skill development",
        "Community development services",
        "Sustainable livelihood projects",
      ],
      stats: "140+ social enterprises, 100,000+ beneficiaries",
    },
    {
      icon: "🌾",
      color: "bg-green-50",
      title: "Agri & Circular Enterprises",
      description:
        "Empowering enterprises emphasizing environmental sustainability, clean technology, or circular production principles.",
      examples: [
        "Waste management and recycling",
        "Renewable/Green businesses",
        "Organic agriculture",
        "Eco-friendly manufacturing",
      ],
      stats:
        "250+ green enterprises, 50,000+ households adopting sustainable practices",
    },
  ];

  const impact = {
    jobs: { number: "15x", label: "Employment Generation", icon: "👥" },
    income: { number: "3x", label: "Income Growth", icon: "💰" },
    households: { number: "10", label: "Average Household Size", icon: "🏠" },
    reach: { number: "100+", label: "Indirect Beneficiaries", icon: "🌟" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section with Icon */}
      <div
        id="hero-icon"
        data-animate
        className={`bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 px-6 transition-all duration-700 ${
          isVisible("hero-icon") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 bg-indigo-200 rounded-3xl mb-8 transition-all duration-700 ${
              isVisible("hero-icon")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-50"
            }`}
          >
            <Rocket className="w-10 h-10 text-indigo-600" />
          </div>

          <h1
            className={`text-5xl md:text-6xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible("hero-icon")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Entrepreneurship
          </h1>

          <h2
            className={`text-xl md:text-2xl font-semibold text-indigo-600 mb-6 transition-all duration-700 ${
              isVisible("hero-icon")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Scaling Women, Social & Green Solutions
          </h2>

          <p
            className={`text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto transition-all duration-700 ${
              isVisible("hero-icon")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            Supporting enterprises creating socio-economic value and
            social-environmental impact
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        id="stats"
        data-animate
        className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 px-6 transition-all duration-700 ${
          isVisible("stats")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible("stats")
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABCD Model Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div
          id="abcd-header"
          data-animate
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible("abcd-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The ABCD Model
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proprietary and progressive development framework that takes
            enterprises from ideation through scaling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {abcdModel.map((item, index) => (
            <div
              key={index}
              id={`abcd-${index}`}
              data-animate
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-700 ${
                isVisible(`abcd-${index}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-2xl mr-3`}
                >
                  {item.icon}
                </div>
                <div
                  className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center ${item.iconColor} text-sm font-semibold`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>

              <ul className="space-y-1 mb-4">
                {item.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-gray-700 flex items-start"
                  >
                    <span className="text-purple-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="text-xs text-purple-600 hover:text-purple-700 font-medium"
              >
                {item.link} →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Types of Enterprises */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            id="enterprises-header"
            data-animate
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible("enterprises-header")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Enterprises We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All focused on creating social and environmental value while
              generating revenue
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {enterprises.map((enterprise, index) => (
                <div
                  key={index}
                  id={`enterprise-${index}`}
                  data-animate
                  className={`${enterprise.color} rounded-xl p-8 border border-gray-200 transition-all duration-700 ${
                    isVisible(`enterprise-${index}`)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  } ${
                    enterprises.length === 3 && index === 2
                      ? "md:col-span-2 md:max-w-2xl md:mx-auto"
                      : ""
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{enterprise.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {enterprise.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-4">
                        {enterprise.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-800 mb-2">
                      Examples:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {enterprise.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 border border-gray-200"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-600 italic border-t border-gray-300 pt-3 mt-3">
                    {enterprise.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div
          id="impact"
          data-animate
          className={`bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 md:p-12 transition-all duration-700 ${
            isVisible("impact") ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              From Household Craft to Rs 30 Lakh Revenue
            </h2>
            <p className="text-gray-700 mb-6">
              Moving skilled makers toward financially sustainable from their
              home or small business—through our ABCD model.
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start">
                <span className="font-bold mr-2 text-purple-600">A.</span>
                <span>Connected to corporate buyer channels</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold mr-2 text-purple-600">B.</span>
                <span>
                  Trained in business management and digital marketing
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-bold mr-2 text-purple-600">C.</span>
                <span>
                  Linked to material suppliers and technology platforms
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-bold mr-2 text-purple-600">D.</span>
                <span>Scaled to 10 employees, now employing other women</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6 italic">
              Result: Revenue grew from Rs 5 lk to Rs 30 lakh in 2 years,
              creating employment for 10+ women in her community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.values(impact).map((item, index) => (
              <div
                key={index}
                className={`text-center bg-white rounded-xl p-6 shadow-sm transition-all duration-700 ${
                  isVisible("impact")
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {item.number}
                </div>
                <div className="text-xs text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurshipPage;
