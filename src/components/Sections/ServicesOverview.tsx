import React from 'react'
import { useEffect,useState } from 'react'
import { MapPin, DollarSign, Clock, Users, ArrowRight } from 'lucide-react'

const ServicesOverview: React.FC = () => {
  interface Program {
    title: string;
    description: string;
    imageUrl: string;
  }

  interface Story {
    id: number;
    name: string;
    location: string;
    program: string;  
    quote: string;
  }

  const [programs, setPrograms] = useState<Program[]>([]);
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    // Fetch data or perform any setup actions here
    fetch("http://localhost:3000/api/citizenship_program").then((res)=>res.json().then((data)=>{
      console.log("Fetched Citizenship Programs:", data);
      setPrograms(data);
    }));
  }, []);


  return (
    <section  id="services" className=" overflow-hidden py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-in" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Citizenship & Residency Programs
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our carefully curated selection of citizenship and residency programs 
            designed to meet your unique needs and investment preferences.
          </p>
        </div>

        {/* Programs Grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
      <div
  key={index}
  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
>
  {/* Image */}
  <div className="relative h-48 overflow-hidden">
    <img
      src={program.imageUrl}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Content */}
  <div className="p-6 flex flex-col flex-1">
    <div className="mb-4">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {program.title}
      </h3>
      <p className="text-gray-600 font-medium">
        {program.description}
      </p>
    </div>

    {/* CTA */}
    <button className="mt-auto w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
      Learn More
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
</div>

          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Don't see the program you're looking for? We offer customized solutions for your specific needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule Personal Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
