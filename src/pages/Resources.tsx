import React from "react";
import { useState, useEffect } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Building2,
} from "lucide-react";
interface Report {
  id: number;
  tag: string;
  title: string;
  pdf_link: string;
}
interface Reflection {
  _id: string;
  title: string;
  tag: string;
  description: string;
  imageUrl: string;
  author?: string;
  date?: string;
}
interface News {
  _id: string;
  title: string;
  description: string;
  link: string;
}
const ResourcesPage: React.FC = () => {
  const [additionalReports, setAdditionalReports] = useState<Report[]>([]);
  const [Reflections, setReflections] = useState<Reflection[]>([]);
  const [news, setnews] = useState<News[]>([]);
  useEffect(() => {
    const fetchnews = async () => {
      try {
        const response = await fetch(
          "https://backend-idobro.onrender.com/api/news",
        );

        const data = await response.json();
        console.log(data);

        if (Array.isArray(data)) {
          setnews(data);
        } else {
          console.error("Invalid news response:", data);
          setnews([]);
        }
      } catch (err) {
        console.error("Failed to fetch news", err);
        setnews([]);
      }
    };

    fetchnews();
  }, []);
  useEffect(() => {
    const fetchReflections = async () => {
      try {
        const response = await fetch(
          "https://backend-idobro.onrender.com/api/reflections",
        );

        const data = await response.json();
        console.log(data);

        if (Array.isArray(data)) {
          setReflections(data);
        } else {
          console.error("Invalid reflections response:", data);
          setReflections([]);
        }
      } catch (err) {
        console.error("Failed to fetch reflections", err);
        setReflections([]);
      }
    };

    fetchReflections();
  }, []);

  useEffect(() => {
    const fetchAdditionalReports = async () => {
      try {
        const response = await fetch(
          "https://backend-idobro.onrender.com/api/Reports",
        );
        console.log(response);
        const data = await response.json();
        console.log(data);

        // 🔐 SAFETY CHECK
        if (Array.isArray(data)) {
          setAdditionalReports(data);
        } else {
          console.error("Reports API did not return array:", data);
          setAdditionalReports([]);
        }
      } catch (err) {
        console.error("Failed to fetch reports", err);
        setAdditionalReports([]);
      }
    };

    fetchAdditionalReports();
  }, []);

  const reflections = [
    {
      image:
        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&h=400&fit=crop",
      tag: "Design Thinking",
      title: "Journey Thinking in social impact: A Practitioner's Guide",
      description:
        "Reorienting how entrepreneurs and impact practitioners think about problems and design solutions",
      author: "Kalyan Bhaskar",
      date: "8 min read",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      tag: "Collaboration",
      title: "The PECO System Model: Building Collaborative Ecosystems",
      description:
        "How bringing together Partners, Enterprises, Communities, and Organizations creates sustainable impact",
      author: "Research Team",
      date: "6 min read",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      tag: "Impact",
      title: " 15 Years of impact: Lessons from the field",
      description:
        "Key learnings from our journey of collaborating with stakeholders and implementing social programs",
      author: "Various Teams",
      date: "12 min read",
    },
  ];

  const reports = [
    {
      type: "Report",
      title: "Annual Impact Report 2023",
      description:
        "Comprehensive overview of our impact across verticals, geography, and partnerships",
      tag: "Impact Highlights",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      type: "Case Study",
      title: "MANAHECOnet Case Study",
      description:
        "In-depth analysis of our innovative alliance response ecosystem and UN recognition",
      tag: "Partnership Success",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      type: "Assessment",
      title: "WSSC Employment Impact Assessment",
      description:
        "Research into the long-term effects of the Women Skill training and impact",
      tag: "Women Empowerment",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      type: "Evaluation",
      title: "BMZ Codesign Program Evaluation",
      description:
        "Evaluation of a sustainable livelihood program for youth and MSME enterprises",
      tag: "Youth Development",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  const mediaMentions = [
    {
      publication: "Forbes India",
      date: "March 2023",
      title: "idobro System Approach featured in Forbes India",
      category: "Innovation",
    },
    {
      publication: "UNDP Press Release",
      date: "June 2023",
      title: "UN Recognizes MANAHECOnet as Model Processing Practice",
      category: "Recognition",
    },
    {
      publication: "Economic Times",
      date: "Feb 2023",
      title: "DEF World Economic Converses 2,800+ Global Leaders",
      category: "Events",
    },
    {
      publication: "Business Standard",
      date: "Jan 2023",
      title: "National Entrepreneurs Thrive through NSES Model Support",
      category: "Entrepreneurship",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resources
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Insights, research, and thought leadership from our journey of
            co-designing impact
          </p>
        </div>
      </div>

      {/* Reflections Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Reflections</h2>
          {/* <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2 group">
            <span>View all articles</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button> */}
        </div>

        <p className="text-gray-600 mb-8">
          Insights from the field and perspectives on impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Reflections.map((reflections, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={reflections.imageUrl}
                  alt={reflections.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {reflections.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {reflections.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {reflections.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{reflections.author}</span>
                  {/* <span>{reflection.date}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reports & Publications Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Reports & Publications
            </h2>
            {/* <button
              onClick={() => {
                window.open();
              }}
              className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2"
            >
               <span>Download complete</span> 
              <Download className="w-4 h-4" />
            </button> */}
          </div>

          <p className="text-gray-600 mb-8">
            Research, data, and insights shaping our impact strategies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalReports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                    <FileText className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="text-xs text-indigo-600 font-semibold mb-2 uppercase tracking-wide">
                      Report
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {report.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {report.tag}
                      </span>

                      <a
                        href={report.pdf_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                      >
                        <span>Download PDF</span>
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Mentions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Media Mentions</h2>
        </div>

        <p className="text-gray-600 mb-8">Idobro in the world</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((mention, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-5 h-5 text-gray-400" />
                    <span className="font-semibold text-blue-900">
                      {mention.title}
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{mention.date}</span>
                  </div> */}
                </div>
                <span className="text-xs bg-indigo-50 text-grey-600 px-2 py-1 rounded-full font-medium">
                  {mention.description}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-indigo-900 group-hover:text-indigo-600 transition-colors">
                {mention.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Subscribe to receive our research, case studies, and thought
            leadership directly in your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button className="bg-white text-indigo-900 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
