import React from "react";
import { Target, Eye, Heart, Award, MapPin, Users } from "lucide-react";
const YearDifference = () => {
  const startDate = new Date("2009-09-01"); // 🎯 starting date (e.g., Sept 2010)
  const now = new Date();

  let yearsDiff = now.getFullYear() - startDate.getFullYear();

  // if current month is before September, subtract one year
  if (now.getMonth() < 8) {
    yearsDiff--;
  }
  return yearsDiff;
};

const AboutSection: React.FC = () => {
  const achievements = [
    { icon: Award, label: "Years of Impact", value: `${YearDifference()}+` },
    { icon: MapPin, label: "Countries", value: "7" },
    { icon: Users, label: "Lives Impacted", value: "1M+" },
    { icon: Heart, label: "Partners", value: "40+" },
  ];

  return (
    <section id="our-story" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transforming Lives Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Human-Centric Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our world faces complex problems that require a paradigm shift in
              mind-set and action. There is a critical need to broad base
              participation and contribution if we are to accelerate the pace of
              development and “leave no one behind”. New age solutions will be
              compelled to be future-ready and hence, consider eco-system wide
              consequences while being contextualised to local requirements.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                  Build value-based ecosystems through stakeholder engagement for Purpose, Profit and Peace 
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                  A Shared World driven by the RISE values - Responsible, Inclusive, Sustainable and Eco(system) friendly
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/about/global-team.jpg"
              alt="Global team collaboration"
              className="rounded-2xl shadow-2xl"
              data-aos="fade-right"
            />
            <div
              data-aos="fade-up-left"
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold mb-2">{YearDifference()}+</div>
              <div className="text-sm">Years of Inclusive Impact</div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* PECO-SYSTEM Detailed Framework */}
        <div
          id="peco-system"
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The PECO-SYSTEM Framework
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach integrates four key elements to create
              sustainable impact ecosystems that address complex social
              challenges through systematic intervention.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/images/about/sdg-goals.png"
                alt="Sustainable Development Goals"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Partners</h4>
                </div>
                <p className="text-gray-600">
                  Emphasizing collaboration across various sectors (government, corporations, NGOs, academia, local communities).

                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Entrepreneurs
                  </h4>
                </div>
                <p className="text-gray-600">
                  Supporting social and green enterprises, including women entrepreneurs.

                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Citizenship</h4>
                </div>
                <p className="text-gray-600">
                  Fostering individual participation and ownership in creating a better world.

                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Ownership
                  </h4>
                </div>
                <p className="text-gray-600">
                  Encouraging individuals and organizations to take responsibility and drive action for sustainable development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Our Global Reach
          </h3>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
                <div className="text-gray-600 font-medium">Countries</div>
                <div className="text-sm text-gray-500 mt-2">
                  India, Sweden, UK, USA, Canada, Australia, Singapore
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  22
                </div>
                <div className="text-gray-600 font-medium">Indian States</div>
                <div className="text-sm text-gray-500 mt-2">
                  Comprehensive coverage across diverse regions
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  40+
                </div>
                <div className="text-gray-600 font-medium">
                  Strategic Partners
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Corporations, NGOs, Academic Institutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
