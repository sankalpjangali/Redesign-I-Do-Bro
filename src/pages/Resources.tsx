import React from "react";
import { useState, useEffect } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Building2,
  Tag,
  User,
  ArrowLeft,
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
interface Article {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  author: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      list?: string[];
    }[];
  };
}

const articles: Article[] = [
  {
    id: 1,
    category: "Thought Leadership",
    date: "Dec 2025",
    title: "Systems Thinking in Social Impact: A Practitioner's Guide",
    description:
      "Exploring how systems thinking can transform the way we approach complex social problems and create sustainable change.",
    author: "Karon Shaiva",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    content: {
      intro:
        "Systems thinking is a holistic approach to analysis that focuses on the way that a system's constituent parts interrelate and how systems work over time and within the context of larger systems. In the field of social impact, this approach has proven invaluable in addressing complex, interconnected challenges.",
      sections: [
        {
          heading: "Why Systems Thinking Matters in Social Impact",
          paragraphs: [
            "In the field of social impact, we often face complex, interconnected challenges that don't have simple solutions. Traditional linear approaches often fall short because they fail to account for the intricate web of relationships that exist within communities and social systems.",
            "Systems thinking helps us understand the interconnections between different social issues, identify leverage points for intervention, anticipate unintended consequences, and create sustainable, long-term change. It moves us away from treating symptoms and toward addressing root causes.",
          ],
        },
        {
          heading: "Key Principles of Systems Thinking",
          paragraphs: [
            "At the heart of systems thinking lie several fundamental principles that guide our understanding of complex social ecosystems. First is interconnectedness - everything is connected to everything else, and a change in one part of the system inevitably affects other parts.",
            "Second, systems are characterized by feedback loops, both reinforcing and balancing, that can amplify or dampen changes over time. Understanding these feedback mechanisms is crucial for designing effective interventions.",
            "Finally, emergence teaches us that the behavior of the whole system cannot be predicted by analyzing individual components in isolation. The whole is truly greater than the sum of its parts.",
          ],
        },
        {
          heading: "Applying Systems Thinking: A Practical Framework",
          paragraphs: [
            "To apply systems thinking in your social impact work, start by defining the system boundaries and identifying key stakeholders. This helps establish the scope of your analysis and ensures you're considering all relevant actors.",
            "Next, map the relationships and feedback loops between different elements. Visual mapping tools can be incredibly helpful here, revealing patterns that might otherwise remain hidden.",
            "Look for leverage points where small changes can have significant impact. These are often found at the level of paradigms, goals, and system structure rather than in quick fixes or symptomatic solutions.",
          ],
          list: [
            "Define the system boundaries and identify key stakeholders",
            "Map the relationships and feedback loops",
            "Identify patterns and trends over time",
            "Look for leverage points for intervention",
            "Design interventions that work with the system",
          ],
        },
        {
          heading: "Real-World Application: Community Health Initiative",
          paragraphs: [
            "In our work with rural communities, we discovered that improving healthcare outcomes required more than just medical interventions. By using systems thinking, we identified connections between education, economic opportunity, transportation, and health outcomes.",
            "This led to a comprehensive approach that addressed multiple interconnected factors simultaneously. We didn't just build health clinics; we created community health ecosystems that included education programs, income generation opportunities, and improved infrastructure.",
            "The results were remarkable. Communities that participated in this holistic approach showed 60% better health outcomes compared to those that received traditional medical-only interventions.",
          ],
        },
        {
          heading: "Moving Forward: Embracing Complexity",
          paragraphs: [
            "Systems thinking is not just a methodology—it's a mindset shift. It requires patience, humility, and a willingness to embrace complexity rather than seeking simple answers to complex questions.",
            "As practitioners in the social impact space, adopting this approach can help us create more sustainable and meaningful change in the communities we serve. It challenges us to think beyond our immediate interventions and consider the broader ecosystem of change.",
            "The journey toward systems thinking is ongoing. It requires continuous learning, adaptation, and a commitment to understanding the world in all its beautiful complexity.",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    category: "Framework",
    date: "Nov 2025",
    title: "The PECO-System Model: Building Collaborative Ecosystems",
    description:
      "How bringing together Partners, Enterprises, Communities, and Organisations creates multiplier effects in social impact.",
    author: "Ankush Singh",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    content: {
      intro:
        "The PECO-System Model represents a paradigm shift in how we approach social impact. By bringing together Partners, Enterprises, Communities, and Organisations, we can create collaborative ecosystems that generate multiplier effects far beyond what any single entity could achieve alone.",
      sections: [
        {
          heading: "Understanding the Four Pillars",
          paragraphs: [
            "Partners are our strategic allies who bring complementary expertise, resources, and networks to the ecosystem. They expand our reach and deepen our impact through collaboration and shared learning.",
            "Enterprises, including businesses and social enterprises, contribute innovation, scalability, and sustainable business models. They bring market discipline and entrepreneurial thinking to social challenges.",
            "Communities are not just beneficiaries but active participants and co-creators of solutions. Their lived experience and local knowledge are invaluable assets that inform and guide all our work.",
            "Organisations, including NGOs, government bodies, and institutions, provide structure, governance, and systemic support. They ensure that our work is grounded in existing frameworks and can achieve scale through institutional channels.",
          ],
        },
        {
          heading: "Creating Synergistic Impact",
          paragraphs: [
            "The magic of the PECO-System Model lies in the synergies created when these four elements work together harmoniously. Each brings unique strengths that complement and amplify the contributions of others.",
            "Partners provide diverse perspectives and expand reach. Enterprises drive innovation and ensure financial sustainability. Communities ensure relevance and ground-level impact. Organisations offer stability and systemic integration.",
            "Together, they create a whole that is far greater than the sum of its parts. This collaborative approach enables us to tackle complex social challenges that no single organization could address alone.",
          ],
        },
        {
          heading: "Implementation Strategy",
          paragraphs: [
            "Building a successful PECO ecosystem requires careful planning and execution. It starts with assessing the landscape to understand existing stakeholders, their capabilities, and their motivations.",
            "Next comes defining common goals that can unite diverse actors around a shared vision. This requires extensive dialogue and negotiation to find areas of alignment while respecting each stakeholder's unique priorities.",
            "Creating effective collaboration mechanisms is crucial. This includes governance structures, communication protocols, and decision-making processes that ensure all voices are heard and valued.",
          ],
          list: [
            "Assess the landscape and map existing stakeholders",
            "Define common goals and shared vision",
            "Design collaboration mechanisms and governance",
            "Facilitate resource sharing and coordination",
            "Measure collective impact across the ecosystem",
          ],
        },
        {
          heading: "Case Study: Transforming Livelihoods",
          paragraphs: [
            "In our livelihood program, we brought together corporate partners, local enterprises, community groups, and government agencies into a cohesive PECO ecosystem. The results exceeded our most optimistic projections.",
            "We achieved a 300% increase in program reach, created sustainable income generation for over 5,000 families, and catalyzed the creation of 50+ community-owned enterprises. Perhaps most significantly, our work led to policy changes at the district level that will benefit communities for years to come.",
            "This success was only possible because each element of the PECO ecosystem played its role while supporting and strengthening the others. It demonstrated the transformative potential of truly collaborative approaches to social change.",
          ],
        },
        {
          heading: "The Path Forward",
          paragraphs: [
            "Building collaborative ecosystems isn't without challenges. Divergent priorities, unequal power dynamics, and resource constraints can all pose obstacles. However, with commitment to transparent communication, inclusive decision-making, and creative resource sharing, these challenges can be overcome.",
            "The multiplier effect we've witnessed in PECO ecosystems convinces us that this is the future of social change. When done right, each element strengthens the others, creating a virtuous cycle of growth and impact that can transform entire communities and regions.",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    category: "Insights",
    date: "Oct 2025",
    title: "16 Years of Impact: Lessons from the Field",
    description:
      "Key learnings from our journey of multiplying socio-environmental impact across communities and ecosystems.",
    author: "Idobro Team",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    content: {
      intro:
        "Sixteen years ago, we embarked on a mission to create meaningful socio-environmental impact in communities across India. What started as a small initiative has grown into a movement, touching millions of lives and transforming entire ecosystems. This journey has taught us invaluable lessons about what it truly takes to create lasting change.",
      sections: [
        {
          heading: "Community Ownership: The Foundation of Sustainable Change",
          paragraphs: [
            "Our early projects taught us a crucial lesson that would reshape our entire approach: sustainable change only happens when communities own the process. Programs designed in boardrooms, no matter how well-intentioned, rarely work as well as those co-created with the people they're meant to serve.",
            "We shifted from a 'for the community' approach to a 'with the community' model, and the results were transformative. Community-led initiatives showed three times better sustainability rates and achieved deeper systemic change.",
            "This wasn't just about consultation or participation. It meant fundamentally reimagining our role from implementers to facilitators, from experts to partners in learning. It required humility and a willingness to let go of control.",
          ],
        },
        {
          heading: "The Art of Scaling Responsibly",
          paragraphs: [
            "In our fifth year, we made a critical mistake that nearly derailed our mission. In our eagerness to reach more communities, we scaled too quickly. The lesson was painful but invaluable: rapid expansion without adequate systems can dilute impact and even harm the very communities we aim to serve.",
            "We learned to scale thoughtfully, ensuring each new region had strong foundations before expansion. This meant investing in training local leaders, building robust support systems, and adapting our models to respect local context and culture.",
            "Today, we measure success not by how fast we grow, but by how deeply and sustainably our impact takes root. Slow, steady, and deliberate wins the race in social change.",
          ],
        },
        {
          heading: "Beyond Numbers: Measuring What Truly Matters",
          paragraphs: [
            "Early in our journey, we obsessed over metrics that were easy to count: people reached, workshops conducted, resources distributed. But we gradually realized that numbers don't tell the whole story of transformation.",
            "We developed a more nuanced measurement framework that captures quality of life improvements, community resilience and self-sufficiency, environmental restoration metrics, and systemic changes in local ecosystems.",
            "This shift from counting outputs to measuring outcomes transformed how we work. It forced us to focus on depth over breadth, on lasting change over temporary relief.",
          ],
          list: [
            "Quality of life improvements and wellbeing indicators",
            "Community resilience and capacity for self-governance",
            "Environmental restoration and sustainability metrics",
            "Systemic changes in local policies and practices",
            "Long-term economic viability and independence",
          ],
        },
        {
          heading: "Embracing Failure as Our Greatest Teacher",
          paragraphs: [
            "Not all our initiatives succeeded, and we've learned more from our failures than our successes. A watershed management project failed in our seventh year because we didn't adequately understand local water politics. A livelihood program struggled in year ten due to market dynamics we hadn't anticipated.",
            "Each failure taught us invaluable lessons about humility, context, and the importance of deep listening. We created a 'Failure Friday' practice where teams openly share what didn't work and extract learnings.",
            "This culture of honest reflection has made us more adaptive and effective. It's given our team permission to take calculated risks and innovate, knowing that failure is not the end but rather an opportunity for growth.",
          ],
        },
        {
          heading: "Building Ecosystems for Lasting Change",
          paragraphs: [
            "Around our ninth year, we had an epiphany: isolated projects, no matter how successful, have fundamentally limited impact. Real transformation requires building entire ecosystems of change that can sustain themselves long after our direct involvement ends.",
            "We started creating networks of partners, enterprises, community organizations, and government agencies. This ecosystem approach has multiplied our impact many times over, creating ripple effects we could never have achieved working alone.",
            "Today, we don't just implement programs. We catalyze ecosystems where diverse actors collaborate toward shared goals, each contributing their unique strengths to collective transformation.",
          ],
        },
        {
          heading: "Looking Ahead: The Next Chapter",
          paragraphs: [
            "As we enter our seventeenth year, we're more committed than ever to our mission. The challenges are greater—climate change, economic inequality, social fragmentation—but so is our capacity to respond.",
            "We're excited about the next phase of our journey, armed with sixteen years of hard-won wisdom and an unwavering commitment to creating lasting, meaningful change. We invite you to join us in this work, whether as a partner, supporter, or fellow traveler on the path toward a more just and sustainable world.",
            "Together, we can create the impact our world so desperately needs. The journey continues, and we're honored to walk it alongside communities, partners, and changemakers across India and beyond.",
          ],
        },
      ],
    },
  },
];
const ResourcesPage: React.FC = () => {
  const [additionalReports, setAdditionalReports] = useState<Report[]>([]);
  const [Reflections, setReflections] = useState<Reflection[]>([]);
  const [news, setnews] = useState<News[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
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
  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
  if (selectedArticle) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
            }}
          >
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "#ffffff",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {selectedArticle.category}
                </span>
                <span style={{ color: "#ffffff", fontSize: "14px" }}>
                  {selectedArticle.date}
                </span>
              </div>
              <h1
                className="text-5xl font-bold mb-6"
                style={{ color: "#ffffff", lineHeight: "1.2" }}
              >
                {selectedArticle.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={handleBackToList}
            className="flex items-center transition-all duration-200 group"
            style={{ color: "#6366f1" }}
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to all articles</span>
          </button>
        </div>

        {/* Article Meta */}
        <div
          className="max-w-4xl mx-auto px-4 pb-8 border-b"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: "#f3f4f6" }}
                >
                  <User className="w-6 h-6" style={{ color: "#6b7280" }} />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#111827" }}
                  >
                    {selectedArticle.author}
                  </div>
                  <div className="text-xs" style={{ color: "#6b7280" }}>
                    Author
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar
                  className="w-5 h-5 mr-2"
                  style={{ color: "#6b7280" }}
                />
                <span className="text-sm" style={{ color: "#6b7280" }}>
                  {selectedArticle.date}
                </span>
              </div>
              <div className="flex items-center">
                <Tag className="w-5 h-5 mr-2" style={{ color: "#6b7280" }} />
                <span className="text-sm" style={{ color: "#6b7280" }}>
                  {selectedArticle.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Introduction */}
          <div className="mb-12">
            <p
              className="text-xl leading-relaxed"
              style={{ color: "#4b5563", fontWeight: "400", lineHeight: "1.8" }}
            >
              {selectedArticle.content.intro}
            </p>
          </div>

          {/* Sections */}
          {selectedArticle.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#111827", lineHeight: "1.3" }}
              >
                {section.heading}
              </h2>

              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: "#374151", lineHeight: "1.8" }}
                >
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <div className="my-8 pl-6">
                  {section.list.map((item, lIndex) => (
                    <div key={lIndex} className="flex items-start mb-4">
                      <div
                        className="mt-2 mr-4 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#6366f1" }}
                      />
                      <p
                        className="text-lg"
                        style={{ color: "#374151", lineHeight: "1.7" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Call to Action */}
          <div
            className="mt-16 p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              Want to learn more about our work?
            </h3>
            <p className="mb-6" style={{ color: "#ffffff", opacity: 0.9 }}>
              Explore more insights and stories from our journey of creating
              social impact.
            </p>
            <button
              onClick={handleBackToList}
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              style={{ backgroundColor: "#ffffff", color: "#667eea" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Read More Articles
            </button>
          </div>
        </div>
      </div>
    );
  }
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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleArticleClick(article)}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-4 py-2 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.95)",
                      color: "#6366f1",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4" style={{ color: "#9ca3af" }} />
                  <span className="text-sm" style={{ color: "#9ca3af" }}>
                    {article.date}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#111827", lineHeight: "1.3" }}
                >
                  {article.title}
                </h3>

                <p
                  className="text-sm mb-6"
                  style={{ color: "#6b7280", lineHeight: "1.7" }}
                >
                  {article.description}
                </p>

                <div
                  className="flex items-center justify-between pt-6 border-t"
                  style={{ borderColor: "#f3f4f6" }}
                >
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: "#f3f4f6" }}
                    >
                      <User className="w-5 h-5" style={{ color: "#6b7280" }} />
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#374151" }}
                    >
                      {article.author}
                    </span>
                  </div>
                  <div
                    className="text-sm font-semibold transition-colors"
                    style={{ color: "#6366f1" }}
                  >
                    Read more →
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      </div>
    </div>
  );
};

export default ResourcesPage;
