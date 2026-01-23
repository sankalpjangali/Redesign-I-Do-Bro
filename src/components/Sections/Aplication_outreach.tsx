import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AmplificationOutreach: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/offerings");
    }
  };
  const offerings = [
    {
      id: 1,
      icon: "📢",
      bgColor: "bg-blue-50",
      title: "Amplification & Outreach",
      description:
        "Audience-centric optimization, cause-led brand messaging, community engagement, stakeholder outreach, fundraising campaigns",
      whatWeDo: [
        "Digital storytelling & social media",
        "Community engagement programs",
        "Fundraising campaigns",
        "Stakeholder content creation",
      ],
      buttonText: "Elevate Engagement",
      buttonColor: "bg-cyan-500 hover:bg-cyan-600",
    },
    {
      id: 2,
      icon: "🎓",
      bgColor: "bg-purple-50",
      title: "Convening & Capacity Building",
      description:
        "Multi-stakeholder events, bridging programs, workshops, facilitated dialogues, peer-to-peer learning",
      whatWeDo: [
        "Capacity building for organisations",
        "Bridging programs & workshops",
        "Facilitated dialogues",
        "Leadership development",
      ],
      buttonText: "Inspire Convening",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
    },
    {
      id: 3,
      icon: "🔬",
      bgColor: "bg-teal-50",
      title: "Evaluation & Research",
      description:
        "Impact assessments, participatory analysis, social audit advisory, policy monitoring",
      whatWeDo: [
        "Impact assessments",
        "Participatory research",
        "M&E framework development",
        "Data analysis & reporting",
      ],
      buttonText: "Discover Insight",
      buttonColor: "bg-teal-500 hovesr:bg-teal-600",
    },
    {
      id: 4,
      icon: "💡",
      bgColor: "bg-amber-50",
      title: "Strategy & Design",
      description:
        "CSR strategy development, ecosystem mapping, alliance architecture, program design",
      whatWeDo: [
        "CSR strategy & roadmap",
        "Ecosystem mapping",
        "Alliance building",
        "Program design",
      ],
      buttonText: "Craft Strategy",
      buttonColor: "bg-amber-500 hover:bg-amber-600",
    },
  ];

  const item = offerings.find((o) => o.id === Number(id));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 🚨 Invalid ID protection
  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Content not found
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${item.bgColor} py-16 px-4`}>
      <div className="max-w-4xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-white shadow">
            {item.icon}
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {item.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {item.description}
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">What We Do</h2>
          <div className="space-y-3">
            {item.whatWeDo.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 flex items-center gap-3 shadow hover:translate-x-2 transition"
              >
                <Check className="w-5 h-5 text-cyan-500" />
                <span className="font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-3">
          <button
            onClick={handleBack}
            className={`${item.buttonColor} text-white px-8 py-4 rounded-full font-semibold text-lg transition hover:scale-105 shadow-lg`}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmplificationOutreach;
