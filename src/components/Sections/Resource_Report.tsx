
import React, { useState, useEffect ,useRef} from 'react';
import { motion, useInView } from 'framer-motion';
interface Partner {
  name: string;
  logo: string;
}
const ResourceReport: React.FC<{ partners: Partner[] }> = ({ partners }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const additionalPartners = [
    "UNICEF", "British Council", "Hindustan Unilever Limited", 
    "Glenmark Foundation", "Tata Capital", "WeConnect International",
    "Kotak Education Foundation", "Adani Foundation", "Swedish Institute"
  ];
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
          {additionalPartners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 text-center"
            >
              <div className="w-full h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{partner.charAt(0)}</span>
              </div>
              <p className="text-sm font-medium text-gray-900">{partner}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default ResourceReport;