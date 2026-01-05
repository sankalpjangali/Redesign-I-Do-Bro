import React, { useEffect, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  // const testimonials = [
  //   {
  //     name: "Manish Joshi",
  //     location: "India ",
  //     program: "Additional Municipal Commissioner",
  //     // image: "/images/citizenship/testimonial-1.webp",
  //     rate: 5,
  //     quote: "Idobro does an excellent job of facilitating cross sectorial partnerships. They have the knack of spotting critical issues and designing relevant solutions.",
  //     // timeline: "Completed in 14 months"
  //   }//,
  //   // {
  //   //   name: "Michael Chen",
  //   //   location: "Hong Kong → Malta",
  //   //   program: "Malta Citizenship Program",
  //   //   image: "/images/citizenship/success-story.jpg",
  //   //   rate: 5,
  //   //   quote: "Outstanding service from start to finish. The idobro team guided us through every step of the Malta citizenship process. Their professionalism and knowledge made what seemed impossible, achievable. Highly recommended!",
  //   //   timeline: "Completed in 32 months"
  //   // },
  //   // {
  //   //   name: "Elena Rodriguez",
  //   //   location: "Mexico → Spain",
  //   //   program: "Spain Investor Visa",
  //   //   image: "/images/citizenship/team-member-1.jpg",
  //   //   rating: 5,
  //   //   quote: "Professional, reliable, and incredibly knowledgeable. The team helped us navigate the Spanish investor visa requirements with ease. We're now living our dream life in Barcelona thanks to their excellent service.",
  //   //   timeline: "Completed in 8 months"
  //   // },
  //   // {
  //   //   name: "David Thompson",
  //   //   location: "USA → Greece",
  //   //   program: "Greece Golden Visa",
  //   //   image: "/images/citizenship/team-member-2.jpg",
  //   //   rating: 5,
  //   //   quote: "I was initially overwhelmed by the citizenship process, but idobro simplified everything. Their transparent communication and expert guidance made the Greek Golden Visa application straightforward. Excellent value for money.",
  //   //   timeline: "Completed in 10 months"
  //   // },
  //   // {
  //   //   name: "Fatima Al-Rashid",
  //   //   location: "UAE → Cyprus",
  //   //   program: "Cyprus Investment Program",
  //   //   image: "/images/citizenship/consultation-office.webp",
  //   //   rate: 5,
  //   //   quote: "The level of service provided by idobro exceeded all expectations. They handled our Cyprus investment program application with utmost professionalism. We now have EU residency and access to incredible opportunities.",
  //   //   timeline: "Completed in 7 months"
  //   // }
  // ]
const [testimonials,setTestimonials] = useState([]);
useEffect(() => {
  fetch("https://backend-idobro.onrender.com/api/citizenship_stories")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched Testimonials:", data);
      setTestimonials(data);
    });
}, []);
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Success Stories from Our Clients
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hear from families who have successfully obtained their second citizenship and 
            residency through our expert guidance and support.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-96 md:h-80">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-8 md:p-12 flex flex-col md:flex-row items-center">
                    {/* Content */}
                    <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
                      <Quote className="h-8 w-8 text-blue-600 mb-4" />
                      <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Rating */}
                      {/* <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div> */}

                      {/* Client Info */}
                      <div className="space-y-1">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                        <p className="text-sm text-blue-600 font-medium">{testimonial.program}</p>
                        {/* <p className="text-xs text-gray-500">{testimonial.timeline}</p> */}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/3">
                      {/* <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-lg"
                      /> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-6 bg-gray-50">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Client Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your own success story?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Join Our Success Stories
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
