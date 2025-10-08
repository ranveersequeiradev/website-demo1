import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../lib/hooks/useIntersetionObserver';
import techPartnersData from '../../data/techPartners.json';

export const TechPartners = () => {
  // Create logo components based on partner data
  const createPartnerLogo = (partner) => {
    if (partner.logo === 'text') {
      return <span className="text-xl font-bold tracking-wider">{partner.logoText}</span>;
    }
    // For SVG logos, you can add specific SVG components here
    // For now, we'll use text fallback for all
    return <span className="text-xl font-bold">{partner.name}</span>;
  };

  const extendedPartners = [...techPartnersData.partners, ...techPartnersData.partners];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-green-50 to-purple-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{techPartnersData.section.title}</h2>
        <p className="mt-4 text-lg text-gray-600">{techPartnersData.section.subtitle}</p>

        <div className="mt-12 relative w-full max-w-4xl mx-auto overflow-hidden"> <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-green-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-purple-50 to-transparent z-10"></div>

          <div className="w-full inline-block bg-white rounded-full shadow-lg p-2">
            <div className="animate-scroll flex items-center space-x-16">
              {extendedPartners.map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="flex-shrink-0 flex items-center justify-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" title={partner.category}>
                  {createPartnerLogo(partner)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
                    @keyframes scroll {
                      from {
                        transform: translateX(0);
                      }
                      to {
                        transform: translateX(-50%);
                      }
                    }
                    .animate-scroll {
                      display: flex;
                      animation: scroll ${techPartnersData.animation?.duration || '30s'} linear infinite;
                      width: calc(200% + ${techPartnersData.partners.length * 4}rem);
                    }
                `}
      </style>
    </section>
  );
};
