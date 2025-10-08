import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../lib/hooks/useIntersetionObserver';
import { QuoteIcon, LightbulbIcon, ChevronLeftIcon, ChevronRightIcon } from '../../assets/icons';
import successData from '../../data/successSection.json';

export const SuccessSection = () => {
  const { testimonials, successStories, carousel } = successData;

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => nextTestimonial(), carousel.autoplayInterval);
    return () => {
      resetTimeout();
    };
  }, [currentIndex, carousel.autoplayInterval, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const AnimatedStoryCard = ({ item, index }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = !!entry;

    return (
      <div
        ref={ref}
        className={`bg-gray-800 rounded-lg overflow-hidden group transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
        <div className="p-6">
          <h3 className="font-semibold text-white">{item.title}</h3>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <QuoteIcon className="absolute -top-4 -left-4 text-gray-100 opacity-75" />
          <QuoteIcon className="absolute -bottom-4 -right-4 text-gray-100 opacity-75 transform scale-x-[-1]" />

          <div className="overflow-hidden relative h-80 md:h-72">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-shrink-0 mr-8 mb-4 md:mb-0">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 rounded-full object-cover" />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-500 text-center">{testimonial.company}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-purple-700">Big part of our success story</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">{testimonial.quote}</p>
                    <div className="mt-4">
                      <p className="font-bold text-gray-800">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                      <p className="text-sm font-medium text-purple-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end mt-4 space-x-2">
            <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"><ChevronLeftIcon /></button>
            <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"><ChevronRightIcon /></button>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="mt-20 md:mt-28">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Success Stories</h2>
            <LightbulbIcon className="text-green-400" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <AnimatedStoryCard key={story.id} item={story} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
