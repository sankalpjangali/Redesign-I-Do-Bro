import React, { useEffect, useRef, useState } from "react";
import { Lightbulb, Handshake, Star, ArrowRight } from "lucide-react";

const ApproachCards: React.FC = () => {
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

  const cards = [
    {
      id: "card1",
      icon: Lightbulb,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      title: "Explore Our Approach",
      description:
        "Learn about our systems thinking framework, RISE values, and how we multiply impact",
      buttonText: "Learn More",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      id: "card2",
      icon: Handshake,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      title: "Partnership Opportunities",
      description:
        "Discover how we can work together to multiply your social impact",
      buttonText: "Let's Talk",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      id: "card3",
      icon: Star,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      title: "Flagship Initiatives",
      description:
        "Explore KORU, RISE World Summit, and our circular economy programs",
      buttonText: "Explore Programs",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                data-animate
                className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col items-center text-center ${
                  isVisible(card.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 ${card.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {card.description}
                </p>

                {/* Button */}
                <button
                  className={`inline-flex items-center gap-2 ${card.buttonColor} text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg group`}
                >
                  {card.buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApproachCards;
