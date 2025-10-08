import React, { useState, useEffect, useRef } from 'react';
import { MagicWandIcon } from '../../assets/icons';
import heroData from '../../data/heroCarousel.json';

export const HeroCarousel = () => {
  const { slides, settings } = heroData;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, settings.autoplayInterval);
    return () => clearInterval(timer);
  }, [slides.length, settings.autoplayInterval]);

  return (
    <section className="relative w-full h-screen bg-[#1A0737] text-white flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-full md:w-2/3 opacity-20 md:opacity-30">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="h-full w-full object-cover">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#A78BFA', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="none" stroke="url(#grad1)" strokeWidth="1.5"
            d="M 100,400 C 150,300 250,300 300,400 S 450,500 500,400 S 650,300 700,400 M 100,420 C 150,320 250,320 300,420 S 450,520 500,420 S 650,320 700,420 M 100,440 C 150,340 250,340 300,440 S 450,540 500,440 S 650,340 700,440 M 100,460 C 150,360 250,360 300,460 S 450,560 500,460 S 650,360 700,460 M 100,480 C 150,380 250,380 300,480 S 450,580 500,480 S 650,380 700,480 M 100,500 C 150,400 250,400 300,500 S 450,600 500,500 S 650,400 700,500 M 100,520 C 150,420 250,420 300,520 S 450,620 500,520 S 650,420 700,520 M 100,540 C 150,440 250,440 300,540 S 450,640 500,540 S 650,440 700,540 M 100,560 C 150,460 250,460 300,560 S 450,660 500,560 S 650,460 700,560 M 100,580 C 150,480 250,480 300,580 S 450,680 500,580 S 650,480 700,580 M 100,380 C 150,280 250,280 300,380 S 450,480 500,380 S 650,280 700,380 M 100,360 C 150,260 250,260 300,360 S 450,460 500,360 S 650,260 700,360 M 100,340 C 150,240 250,240 300,340 S 450,440 500,340 S 650,240 700,340" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10 text-center md:text-left">
        <div className="max-w-xl mx-auto md:mx-0">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
              {index === currentIndex && (
                <div className="flex flex-col items-center md:items-start">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title.split(' ').map((word, i) =>
                      word === slide.highlightWord ? <span key={i} className="text-purple-400">{word} </span> : `${word} `
                    )}
                  </h1>
                  <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg">
                    {slide.description}
                  </p>
                  <button className="mt-8 px-8 py-3 border border-white rounded-md text-sm font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                    {slide.ctaText}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)} 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/40 hover:bg-white/70 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-8 p-3 bg-purple-500/20 text-purple-300 rounded-full z-10 hidden sm:flex">
        <MagicWandIcon />
      </div>
    </section>
  );
};
