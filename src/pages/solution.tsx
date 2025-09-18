import { Target, Eye, Heart, Award, MapPin, Users } from "lucide-react";
const PartnershipPage: React.FC = () => {
    return (
      <>
      <div className="min-h-screen bg-white">
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

          <div className="grid lg:grid-cols-2 gap-8 items-center" >
            <div>
              <img
                src="../images/SDG.png"
                alt="Sustainable Development Goals"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6 " >
              <div className="bg-white rounded-xl p-6 shadow-md cursor-pointer" onClick={() => window.location.href='/partnership'}>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Partnership</h4>
                </div>
                <p className="text-gray-600">
                  Emphasizing collaboration across various sectors (government, corporations, NGOs, academia, local communities).

                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md cursor-pointer" onClick={() => window.location.href='/entrepreneurship'}>
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Entrepreneurship
                  </h4>
                </div>
                <p className="text-gray-600">
                  Supporting social and green enterprises, including women entrepreneurs.

                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md cursor-pointer" onClick={() => window.location.href='/citizenship'}>
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

            
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
export default PartnershipPage;