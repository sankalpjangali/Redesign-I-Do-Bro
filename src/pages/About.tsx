import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Briefcase,
  Handshake,
  Award,
  Globe,
  TrendingUp,
  Mail,
  Building2,
  Calendar,
  Linkedin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  experience: string;
  email: string;
  linkedin_url: string;
}

// Extend Window interface for AOS
declare global {
  interface Window {
    AOS?: {
      init: (options?: {
        duration?: number;
        easing?: string;
        once?: boolean;
        offset?: number;
      }) => void;
      refresh?: () => void;
    };
  }
}

const ImpactJourneyPage: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  // const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [loadingTeam, setLoadingTeam] = useState(true);
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoadingTeam(true);
        const response = await fetch(
          "https://backend-idobro.onrender.com/api/team",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoadingTeam(false);
      }
    };

    fetchTeamMembers();
  }, []);
  const timelineEvents = [
    {
      year: "2009",
      text: "Founded with vision to multiply social and environmental impact",
    },
    {
      year: "2011",
      text: "First major government partnership - Maharashtra collaboration begins",
    },
    {
      year: "2013",
      text: "RISE World Summit launched - 1,000 participants from 10 countries",
    },
    {
      year: "2015",
      text: "ABCD Model formalized and scaled - 500+ entrepreneurs supported",
    },
    {
      year: "2017",
      text: "PECO-System framework developed - systems thinking formalized",
    },
    {
      year: "2018",
      text: "International expansion - programs active in 7 countries",
    },
    {
      year: "2020",
      text: "Digital transformation accelerated - virtual impact scaling",
    },
    {
      year: "2021",
      text: "World Economic Forum Report launched - Systems Analysis Methodology",
    },
    {
      year: "2024",
      text: "International partnerships advanced - 240+ partnerships globally",
    },
  ];

  useEffect(() => {
    // Initialize AOS
    const initAOS = () => {
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
      document.head.appendChild(style);

      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
      script.onload = () => {
        if (window.AOS) {
          window.AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            offset: 100,
          });
        }
      };
      document.body.appendChild(script);
    };

    initAOS();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
            >
              About Idobro Impact Solutions
            </h1>
            <p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our mission, values, approach, and 16-year journey multiplying
              impact
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white">
        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Who We Are */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                  Founded: 2009
                </span>
              </div>

              <p className="text-lg text-purple-600 font-semibold mb-6">
                "Measure and multiply the socio-environmental impact of Women,
                Social, and Green (WSG) initiatives."
              </p>

              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  Idobro Impact Solutions is a leading social impact enterprise
                  founded in 2009. We serve as catalysts for innovations and
                  collaborations that benefit people and the planet. Through our
                  unique five-step IS process and proven frameworks, we help
                  organizations, communities, and ecosystems create lasting,
                  measurable change.
                </p>
                <p>
                  Our unique approach combines systems thinking, community
                  ownership, and collaborative ecosystem design. We believe that
                  complex social problems cannot be solved by isolated
                  efforts—they require coordinated, multi-stakeholder solutions.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">16 years of delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">2M+ individuals reached</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">540+ partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">7 countries active</span>
                </div>
              </div>
            </div>

            {/* Right Column - Our Journey Timeline */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Journey
              </h3>

              <div className="relative">
                {/* Scrollable Timeline */}
                <div className="overflow-y-auto max-h-96 pr-4 custom-scrollbar">
                  <div className="space-y-6">
                    {timelineEvents.map((event, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                          {index !== timelineEvents.length - 1 && (
                            <div className="w-0.5 h-full bg-purple-300 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <div className="font-bold text-purple-700 mb-1">
                            {event.year}
                          </div>
                          <p className="text-gray-700 text-sm">{event.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scroll Indicators */}
                <div className="absolute top-0 right-0 text-gray-400 text-xs">
                  ▲
                </div>
                <div className="absolute bottom-0 right-0 text-gray-400 text-xs">
                  ▼
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9333ea;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7e22ce;
        }
      `}</style>
      </div>
      {/* RISE Values Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            RISE Values: Our Core Philosophy
          </h2>
          <p
            className="text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Everything we do is guided by RISE: our core principles that ensure
            each action is impactful, inclusive, sustainable, and
            environmentally coherent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Users className="w-6 h-6 text-purple-600" />,
              bgColor: "bg-purple-100",
              title: "Responsible",
              text: "Integrity and transparency are at the heart of our work. We maintain accountability and ethical rigor in all our actions. We commit fully to responsible management, ensuring fair treatment of all stakeholders and complete transparency in our operations. We actively report our progress in a consistent manner and welcome scrutiny.",
            },
            {
              icon: <Globe className="w-6 h-6 text-green-600" />,
              bgColor: "bg-green-100",
              title: "Inclusive",
              text: "We advocate for fair representation and participation. Our work ensures that marginalized voices are heard and that equity is central to everything we do. We work to lift up voices that need amplification, creating meaningful management ecosystems. We advocate for diverse perspectives and collaborative decision-making.",
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
              bgColor: "bg-blue-100",
              title: "Sustainable",
              text: "We believe in building for lasting change. Our work is intentionally structured to create value that is greater than short-term gains. We deploy systematic frameworks and long-term partnerships that endure beyond individual projects. We build capacity for communities to adapt and evolve with changing needs.",
            },
            {
              icon: <Award className="w-6 h-6 text-orange-600" />,
              bgColor: "bg-orange-100",
              title: "Eco-friendly",
              text: "Environmental stewardship guides every stage of our work. We are committed to accountability for our impacts on climate, biodiversity and other environmental factors. We integrate environmental considerations into all our decisions. We promote regenerative practices that heal and restore our natural systems.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div
                className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mb-4`}
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Recognition Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Global Recognition & Validation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Award className="w-6 h-6 text-purple-600" />,
              year: "2018 AWARDED",
              title: "UN DESA+ Promoting Finalist",
              text: 'UN DESA+ Best Practice Award finalist: Selected as a promising approach for SDG implementation in "Localizing in Action" category. Recognized for systematic and innovative approach...',
            },
            {
              icon: <Globe className="w-6 h-6 text-purple-600" />,
              year: "2020 AWARDED",
              title: "World Benchmarking Alliance",
              text: "As part of a WBA grant to advancing the transformative framework for Corporate Human Rights Benchmark metrics. Recognized for building integrated solutions...",
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
              year: "2021 MILESTONE",
              title: "Catalyst 2030",
              text: "Founding Member of Catalyst 2030. Led collaborative work across communities and impact leaders. Actively engaged shared learning and resource mobilization...",
            },
            {
              icon: <Handshake className="w-6 h-6 text-purple-600" />,
              year: "2022 PARTNERSHIP",
              title: "International Partnerships",
              text: "Strategic partnerships with global institutions including UN Women, UNDP, UN Women, and UNESCO. Collaborating for systemic impact...",
            },
          ].map((recognition, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {recognition.icon}
              </div>
              <div className="text-sm text-purple-600 font-semibold mb-2">
                {recognition.year}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {recognition.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {recognition.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg">
              Meet the people driving impact and innovation
            </p>
          </div>

          <div className="relative group">
            {/* Left Scroll Button */}
            {showLeftArrow && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
            )}

            {/* Right Scroll Button */}
            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="overflow-x-scroll scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div className="flex space-x-6 pb-4 w-max">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-60 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-4 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold">
                          {member.designation}
                        </p>
                      </div>

                      {/* Contact */}
                      <div className="flex items-center space-x-4 pt-3 border-t border-gray-200">
                        <a
                          href={member.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Linkedin className="h-4 w-4 mr-1" />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient Overlays */}
            {showLeftArrow && (
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            )}
            {showRightArrow && (
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            )}
          </div>

          {/* Scroll Hint */}
        </div>

        <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </section>
    </div>
  );
};

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/400x400?text=Team+Member";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Name and Designation */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
            {member.name}
          </h3>
          <p className="text-purple-600 font-semibold text-sm">
            {member.designation}
          </p>
        </div>

        {/* Contact Actions */}
        <div className="flex gap-3 pt-3 border-t border-gray-100">
          <a
            href={member.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
            title="View LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImpactJourneyPage;
