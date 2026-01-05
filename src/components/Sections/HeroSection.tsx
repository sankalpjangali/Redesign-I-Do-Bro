"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Partner for",
    highlight: "Purpose, Profit & Peace",
    description:
      "Human-Centric Solutions through systems approach and people-powered innovations to solve the world's most pressing challenges.",
    image:
      "https://res.cloudinary.com/dhs64xefe/image/upload/v1757831861/Website_Homepage_Images_25_vytt6j.png",
  },
  {
    id: 2,
    title: "Driving Change through",
    highlight: "Innovation & Collaboration",
    description:
      "Connecting ideas and people to co-create sustainable development across the globe.",
    image:
      "https://res.cloudinary.com/dhs64xefe/image/upload/v1757831860/Website_Homepage_Images_22_jbyoap.png",
  },
  {
    id: 3,
    title: "Empowering Communities for",
    highlight: "Sustainable Futures",
    description:
      "Building inclusive systems that ensure growth, dignity, and peace for all.",
    image:
      "https://res.cloudinary.com/dhs64xefe/image/upload/v1757831861/Website_Homepage_Images_23_fghr6l.png",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.highlight}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70" />
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative z-10 w-full text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {slides[current].title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {slides[current].highlight}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              {slides[current].description}
            </p>

            <button
              onClick={() => (window.location.href = "/solutions")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-blue-200 text-lg font-medium mt-8">
              Empowering communities across 7 countries and 24 Indian states
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
