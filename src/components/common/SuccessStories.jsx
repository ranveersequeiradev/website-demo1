import React, { useState, useEffect, useRef } from 'react';
import successStoriesData from '../../data/successStories.json';

export const SuccessStoriesCarousel = ({ stories = successStoriesData.stories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () => setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length),
        successStoriesData.settings.autoRotateInterval
      );
    }
    return () => resetTimeout();
  }, [currentIndex, isHovered, stories.length]);

  const displayedStories = [...stories, ...stories, ...stories].slice(currentIndex, currentIndex + successStoriesData.settings.itemsPerView);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="flex justify-between items-center mb-8">
        <div><h2 className={successStoriesData.section.className}>{successStoriesData.section.title}</h2></div>
        <a href={successStoriesData.section.linkUrl} className={successStoriesData.section.linkClassName}>{successStoriesData.section.linkText}</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedStories.map((story, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden group">
            <div className="h-56"><img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
            <div className="p-6"><h3 className="text-xl font-bold text-white mb-2">{story.title}</h3><p className="text-gray-400 text-sm">{story.description}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};
