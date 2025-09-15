import React from 'react'
import { useEffect,useState } from 'react'
import { Linkedin, Mail, Phone, Award, BookOpen, Globe } from 'lucide-react'
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
  const [teamMembers,setTeamMembers] = useState<TeamMember[]>([]);
  
  useEffect(() => {
    const fetchTeamMembers= async () =>{
      try {
        const response = await fetch('https://backend-idobro.onrender.com/api/team');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    }

    fetchTeamMembers();
  }, []);

  return (
    // <section id="team" className="py-20 bg-white ">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Section Header */}
    //     <div className="text-center max-w-3xl mx-auto mb-16">
    //       <h2 className="text-4xl font-bold text-gray-900 mb-6">
    //         Meet Our Expert Team
    //       </h2>
    //       <p className="text-xl text-gray-600 leading-relaxed">
    //         Our team of experienced immigration attorneys and advisors are dedicated to 
    //         making your citizenship journey successful and stress-free.
    //       </p>
    //     </div>

    //     {/* Team Stats */}
       

    //     {/* Team Members */}
    //     <div className="flex flex-col  lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 m-2">
    //       {teamMembers.map((member, index) => (
    //         <div 
    //           key={index}
    //           className={`flex flex-col w-full lg:flex-col wrap gap-8 p-8 lg:w-1/3 bg-gray-50 rounded-2xl ${
    //             index % 2 === 1 ? 'lg:flex-row-reverse' : ''
    //           }`}
    //         >
    //           {/* Image */}
    //           <div className="lg:w-full">
    //             <div className="relative">
    //               <img
    //                 src={member.imageUrl}
    //                 alt={member.name}
    //                 className="w-full h-80 object-cover rounded-xl shadow-lg"
    //               />
    //               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
    //             </div>
    //           </div>

    //           {/* Content */}
    //           <div className="lg:w-2/3 space-y-6">
    //             <div>
    //               <h3 className="text-2xl font-bold text-gray-900 mb-2">
    //                 {member.name}
    //               </h3>
    //               <p className="text-lg font-semibold text-blue-600 mb-1">
    //                 {member.designation}
    //               </p>
                  
    //             </div>

    //             {/* Experience & Languages */}
    //             <div className="flex flex-wrap gap-6">
    //               <div>
    //                 <span className="text-sm font-semibold text-gray-900">Experience:</span>
    //                 <span className="ml-2 text-sm text-gray-600">{member.experience}</span>
    //               </div>
                  
    //             </div>

    //             {/* Bio */}
    //             {/* <p className="text-gray-700 leading-relaxed">
    //               {member.bio}
    //             </p> */}

    //             {/* Qualifications */}
                

    //             {/* Contact */}
    //             <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
    //               <a
    //                 href={`mailto:${member.email}`}
    //                 className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
    //               >
    //                 <Mail className="h-4 w-4 mr-2" />
    //                 <span className="text-sm">Contact</span>
    //               </a>
    //               <a
    //                 href={member.linkedinUrl}
    //                 className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
    //               >
    //                 <Linkedin className="h-4 w-4 mr-2" />
    //                 <span className="text-sm">LinkedIn</span>
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Team CTA */}
    //     <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
    //       <h3 className="text-3xl font-bold mb-6">
    //         Work with Our Expert Team
    //       </h3>
    //       <p className="text-xl mb-8 opacity-90">
    //         Get personalized guidance from our experienced immigration attorneys and advisors.
    //       </p>
    //       <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //         <a
    //           href="#contact"
    //           className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
    //         >
    //           <Phone className="mr-2 h-5 w-5" />
    //           Schedule Consultation
    //         </a>
    //         <a
    //           href="mailto:info@idobro.com"
    //           className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
    //         >
    //           <Mail className="mr-2 h-5 w-5" />
    //           Email Our Team
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-blue-600 font-semibold">{member.designation}</p>
          </div>

          <div>
            <span className="text-sm font-semibold text-gray-900">Experience:</span>
            <span className="ml-2 text-sm text-gray-600">{member.experience}</span>
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
  )
}

export default TeamSection
