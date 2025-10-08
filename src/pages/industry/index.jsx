import React from 'react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { MegaTrendsAccordion } from '../../components/common/MegaTrend';
import { SuccessStoriesCarousel } from '../../components/common/SuccessStories';
import { PlatformsCarousel } from '../../components/common/PlatformsCarousel';
import { ContactForm } from '../../components/common/ContactForm';
import { IconBrain, IconMonitor, IconHeartbeat, ArrowRight, ChevronRight, ChevronDown, MailIcon, PhoneIcon } from '../../assets/icons';


export default function IndustryDetail() {
  const breadcrumbItems = [{ label: 'Industries', href: '#' }, { label: 'Medical Devices', href: '#' }];
  const featureCards = [{ icon: <IconBrain />, title: 'Advance Medical Technology with Precision Engineering' }, { icon: <IconMonitor />, title: 'Revolutionize Patient Care through Cutting-Edge Device Innovation' }, { icon: <IconHeartbeat />, title: 'Optimize Healthcare Delivery with Smart Medical Devices' }];
  const medTechOfferings = [{ category: 'EDGE ENGINEERING', items: ['Firmware Over the Air platform', 'Embedded Engineering', 'Hardware Testing', 'Edge Reliability Engineering'] }, { category: 'POINT OF CARE APPS ENGINEERING', items: ['Point of Care Technology', 'Mobile Apps and Connected Medical Apps', 'Low Code', 'Remote Diagnostics with AR and VR'] }, { category: 'MEDICAL IOT (INTERNET OF THINGS)', items: ['Real-time Condition Monitoring', 'Digital Twins', 'Telemetry Data Platforms', 'ProStream — Native Medical IoT Platform'] }, { category: 'DATA ENGINEERING & ANALYTICS', items: ['Data Integration', 'Big Data Analytics', 'Ad-hoc Analytics Enablement', 'Advanced Algorithms', 'Device Diagnostics Engineering', 'Reporting & Visualization'] }, { category: 'ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING', items: ['Computer Vision and Visual Analytics', 'Unstructured and Semi-structured Data', 'Forecasting & Optimizations', 'Deep learning-led Anomaly and Pattern Detection Platform'] }, { category: 'DEVICE & HARDWARE LABS', items: ['Mobile Device Lab', 'BLE Reliability and LW Hardware Engineering Lab', 'Research Acceleration Lab: Security, Compliance, Cloud, QMS', 'Research Acceleration Lab: BC (Blockchain), Machine Assisted Radiology'] }];
  // Data now comes from JSON files in the components

  return (
    <>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
      <div className="font-sans py-8 md:py-12 ">
        {/* --- HERO SECTION --- */}
        <div className="bg-white text-gray-900">{/* ... existing hero section code ... */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="mb-6 md:mb-10"><Breadcrumb items={breadcrumbItems} /></div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"><span className="text-[#8F48EB]">Pioneering Medical Devices </span><span className="text-[#32C592]">for a Healthier World</span></h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">In an era of rapid technological advancements, the medical devices industry is at the forefront of revolutionizing healthcare. From minimally invasive surgeries to personalized medicine, innovative devices are transforming patient outcomes and improving the efficiency of healthcare delivery.</p>
                <div className="p-5 bg-gradient-to-r from-[#EAE4FC] to-[#D4F7E9] rounded-lg mb-8 max-w-md mx-auto md:mx-0"><p className="text-lg font-semibold text-gray-800 mb-4">Zimetrics partners with MedTech companies to build innovative medical devices</p><button className="bg-black text-white hover:bg-gray-800 transition-colors duration-300 font-semibold py-3 px-6 rounded-md inline-flex items-center group w-full sm:w-auto justify-center">Learn More<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></button></div>
              </div>
              <div className="w-full mt-8 md:mt-0"><img src="https://placehold.co/800x650/F3F4F6/6B7280?text=Medical+Technology&font=inter" alt="A collection of modern medical devices" className="w-full h-full object-cover rounded-xl shadow-lg" /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-24">{featureCards.map((card, index) => (<div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"><div className="bg-[#EAE4FC] p-4 rounded-full mb-5">{card.icon}</div><h3 className="text-lg font-semibold text-gray-800 leading-snug">{card.title}</h3></div>))}</div>
          </div>
        </div>

        {/* --- MEDTECH OFFERINGS SECTION --- */}
        <div className="bg-[#4A2685] text-white py-16 md:py-24" style={{ backgroundImage: "repeating-linear-gradient(-45deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col lg:flex-row lg:gap-12"><div className="lg:w-1/3 mb-12 lg:mb-0"><h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Explore our MedTech Offerings</h2></div><div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">{medTechOfferings.map((offering) => (<div key={offering.category}><h3 className="bg-[#32C592] text-white font-bold text-sm uppercase p-4">{offering.category}</h3><ul className="mt-4 space-y-3">{offering.items.map((item) => (<li key={item} className="flex items-start"><ChevronRight className="h-5 w-5 text-[#32C592] mr-2 mt-0.5 flex-shrink-0" /><span className="text-gray-300">{item}</span></li>))}</ul></div>))}</div></div></div>
        </div>

        {/* --- DARK SECTIONS WRAPPER --- */}
        <div className="bg-black text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            <div><MegaTrendsAccordion /></div>
            <div><SuccessStoriesCarousel /></div>
          </div>
        </div>

        {/* --- NEW WHITE SECTIONS --- */}
        <div>
          <PlatformsCarousel />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
