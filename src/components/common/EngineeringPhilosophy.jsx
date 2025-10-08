import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../lib/hooks/useIntersetionObserver';
import engineeringData from '../../data/engineeringPhilosophy.json';

export const EngineeringPhilosophy = () => {

  const AnimatedCard = ({ item, index }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = !!entry;

    return (
      <div
        ref={ref}
        className={`
                    relative bg-black rounded-lg overflow-hidden group
                    transition-all duration-700 ease-out 
                    ${item.isLarge ? 'md:col-span-2 md:row-span-2 col-span-2' : 'col-span-1'}
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex items-end">
          <h3 className={`font-bold ${item.isLarge ? 'text-4xl md:text-5xl' : 'text-xl md:text-2xl'} text-white`}>{item.title}</h3>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {engineeringData.philosophyItems.map((item, index) => (
                        <AnimatedCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
