import React from 'react';

const OfferingsSupportTable: React.FC = () => {
  const tableData = [
    {
      offering: 'Amplification & Outreach',
      citizenship: 'Youth campaigns, awareness materials',
      entrepreneurship: 'Enterprise marketing, brand building',
      partnership: 'Campaign coordination, stakeholder communication'
    },
    {
      offering: 'Convening & Capacity Building',
      citizenship: 'Youth workshops, leadership training',
      entrepreneurship: 'Business training, mentorship',
      partnership: 'Multi-stakeholder events, ecosystem convening'
    },
    {
      offering: 'Evaluation & Research',
      citizenship: 'Behavior change tracking, impact assessment',
      entrepreneurship: 'Enterprise performance studies',
      partnership: 'Ecosystem health metrics'
    },
    {
      offering: 'Strategy & Design',
      citizenship: 'Program design, curriculum development',
      entrepreneurship: 'Business model development',
      partnership: 'Ecosystem architecture, alliance strategy'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Offerings Support Each Vertical
          </h1>
          <p className="text-lg text-gray-600">
            Every vertical uses integrated offerings to maximize impact
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-6 px-6 font-bold text-gray-900 text-lg">
                  Offering
                </th>
                <th className="text-left py-6 px-6">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">🌱</span>
                    <span className="font-bold text-gray-900 text-lg">Citizenship</span>
                  </div>
                </th>
                <th className="text-left py-6 px-6">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 text-xl">🚀</span>
                    <span className="font-bold text-gray-900 text-lg">Entrepreneurship</span>
                  </div>
                </th>
                <th className="text-left py-6 px-6">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 text-xl">🤝</span>
                    <span className="font-bold text-gray-900 text-lg">Partnership</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-6 px-6 font-semibold text-gray-900">
                    {row.offering}
                  </td>
                  <td className="py-6 px-6 text-gray-600">
                    {row.citizenship}
                  </td>
                  <td className="py-6 px-6 text-gray-600">
                    {row.entrepreneurship}
                  </td>
                  <td className="py-6 px-6 text-gray-600">
                    {row.partnership}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OfferingsSupportTable;