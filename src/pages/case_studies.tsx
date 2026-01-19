import React, { useEffect, useRef, useState } from "react";
interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  imageUrl: string;
  stats: Stat[];
  features: string[];
}
const CaseStudiesPage: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(
    new Set(),
  );
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [caseStudie, setCaseStudies] = useState<CaseStudy[]>([]);
  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.getAttribute("data-index"));
              setVisibleElements((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.1 },
      );
    }

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [caseStudie]); // 🔥 IMPORTANT

  useEffect(() => {
    const fetchcase = async () => {
      try {
        const response = await fetch(
          "https://backend-idobro.onrender.com/api/casestudies",
        );

        const data = await response.json();
        console.log(data);

        if (Array.isArray(data)) {
          setCaseStudies(data);
        } else {
          console.error("Invalid reflections response:", data);
          setCaseStudies([]);
        }
      } catch (err) {
        console.error("Failed to fetch reflections", err);
        setCaseStudies([]);
      }
    };

    fetchcase();
  }, []);

  const caseStudies = [
    {
      tag: "Social Impact",
      title: "MAHAFECOnet",
      subtitle: "Statewide Disaster Response Ecosystem",
      description:
        "The Mahesh Wadhwa Foundation partnered with Mahaeconet, coordinating 90% organizations across 7 districts, fast-dial strong, 25-30x lift turnaround.",
      challenge:
        "Post-disaster chaos and a fractured CSO ecosystem needed centralized communications working in sync, redeploying efforts, and ensuring collaboration.",
      solution:
        "Built a digital dashboard to unify stakeholder platform ensuring high-level government connection, INGO networks, and collaboration across diverse stakeholder categories.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      stats: [
        { value: "100+", label: "Organizations" },
        { value: "2M+", label: "People Reached" },
        { value: "5", label: "Districts" },
        { value: "2x", label: "UN Collaborations" },
      ],
      features: [
        "Unified communications platform enabled cross-district disaster response",
        "Faster deployment and government-to-impact layer allocation networks",
        "Data-sharing systems with dashboard showcased transparent management",
        "Networked grassroots collaboration across districts and networks",
      ],
    },
    {
      tag: "Green Energy",
      title: "Glenmark Foundation Partnership",
      subtitle:
        "To foster eco-responsible health practices and climate-friendly drug studies",
      description:
        "A long-term partnership demonstrating how consistent, integrated support can transform community health and livelihoods while reducing carbon footprints.",
      challenge:
        "Their organization was dedicated to eco-efficient health infrastructure development, challenges included hospital infrastructure intervention, improved solar installations and better medication supply.",
      solution:
        "Developed and implemented an integrated program combining health operations, distributed network and sustainable building with 11 years of continuous collaboration.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      stats: [
        { value: "12", label: "Years" },
        { value: "Multiple", label: "Programs" },
        { value: "500K+", label: "Beneficiaries" },
        { value: "10+", label: "States" },
      ],
      features: [
        "Established comprehensive health and clean infrastructure network",
        "Sustainable healthcare practices on health foundations",
        "Enhanced local workforce quality and development training",
        "Created infrastructure networks that facilitated long-lasting outreach",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            visibleElements.has(0)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          data-animate
          data-index="0"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-gray-600">
            Real-world examples of how our systems approach creates lasting,
            <br />
            measurable impact in communities
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {caseStudie.map((study, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                visibleElements.has(index + 1)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              data-animate
              data-index={index + 1}
            >
              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Side */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium mb-4">
                    {study.tag}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h2>
                  <p className="text-blue-600 font-medium mb-4">
                    {study.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* The Challenge */}
                  <div className="mb-6">
                    <h3 className="text-red-600 font-semibold mb-2">
                      The Challenge
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Our Solution */}
                  <div className="mb-8">
                    <h3 className="text-green-600 font-semibold mb-2">
                      Our Solution
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {(study.stats || []).map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key features */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Key features
                    </h3>
                    <ul className="space-y-2">
                      {(study.features || []).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="text-green-500 mr-2 mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Side */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">💬</span>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {index === 0
                            ? "Received a series of training workshops led by NGO leaders across the state, ensuring that the beneficiary community had a strong voice in planning and implementation."
                            : "Recognized as exemplary in its commitment to health, supported by sustainable interventions, increased momentum and visibility enhancing reach."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            visibleElements.has(10)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          data-animate
          data-index="10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Want to Create Similar Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Partner with us to design and implement programs that create
            lasting, measurable
            <br />
            change in your communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg">
              Start a Conversation →
            </button>
            <button className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Learn Our Approach
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Idobro Impact Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudiesPage;
