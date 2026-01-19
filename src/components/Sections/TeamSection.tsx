import React from "react";
import { useEffect, useState } from "react";
import { Linkedin, Mail, Phone, Award, BookOpen, Globe } from "lucide-react";
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

  return (
    //
    // {/* Team Members */}
    <section>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 w-max px-2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex-shrink-0 w-80 bg-gray-50 rounded-2xl p-6"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-60 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
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

                <div>
                  <span className="text-sm font-semibold text-gray-900">
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
    </section>
  );
};

export default TeamSection;
