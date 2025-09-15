
import React, { useState, useEffect ,useRef} from 'react';
import { motion, useInView } from 'framer-motion';
interface Reports {
  id: number;
  title: string;
  pdf_link: string;
  imageUrl: string;
}
const ResourceReport: React.FC= () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [additionalReports, setAdditionalReports] = useState<Reports[]>([]);
  useEffect(() => {
    // Simulating an API call to fetch additional reports
    const fetchAdditionalReports = async () => {
      const response = await fetch("https://backend-idobro.onrender.com/api/Reports"); // Adjust the URL as needed
      const data = await response.json();
      setAdditionalReports(data);
    };
    fetchAdditionalReports();
  }, []);
  return (
    <div className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">Reports </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This section provides an overview of the core findings and outlines actionable insights.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center"
        >
          {additionalReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 text-center"
              onClick={() => window.open(`https://res.cloudinary.com/dhs64xefe/image/upload/${report.pdf_link}`, "_blank")}
            >
              <div className="w-full h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <img src={`https://res.cloudinary.com/dhs64xefe/image/upload/${report.imageUrl}`} alt="" className='w-full h-full object-cover rounded-lg' />
                {/* <span className="text-white font-bold text-lg">{report.title.charAt(0)}</span> */}
              </div>
              <p className="text-sm font-medium text-gray-900">{report.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default ResourceReport;