import React, { useEffect, useState, useRef } from "react";
import { Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  imageUrl: string;
  experience: string;
  email: string;
  linkedinUrl: string;
}

const TeamSection: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
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
      }
    };

    fetchTeamMembers();
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

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

  return (
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
                      src={member.imageUrl}
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

                    <div className="flex items-start">
                      <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                        Experience:
                      </span>
                      <span className="ml-2 text-sm text-gray-600">
                        {member.experience}
                      </span>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center space-x-4 pt-3 border-t border-gray-200">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        <span className="text-sm">Contact</span>
                      </a>
                      <a
                        href={member.linkedinUrl}
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
        <div className="text-center mt-6 text-sm text-gray-500">
          ← Scroll to see more team members →
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
