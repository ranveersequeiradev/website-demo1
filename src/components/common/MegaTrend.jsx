import React, { useState } from 'react';
import { ChevronDown } from '../../assets/icons';
import megaTrendsData from '../../data/megaTrends.json';

export const MegaTrendsAccordion = ({ trends = megaTrendsData.trends }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);
  return (
    <section className={megaTrendsData.section.className}>
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{megaTrendsData.section.title}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{megaTrendsData.section.subtitle}</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {trends.map((trend, index) => (
            <div key={trend.id} className="border-b border-gray-700">
              <button onClick={() => handleToggle(index)} className="w-full flex justify-between items-center py-5 text-left text-white">
                <span className="text-lg font-medium">{trend.title}</span>
                <ChevronDown className={`h-6 w-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-gray-400 pb-5 pr-6">{trend.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
