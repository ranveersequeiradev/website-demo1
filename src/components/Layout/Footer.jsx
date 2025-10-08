
import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../lib/hooks/useIntersetionObserver';
import { FooterLogoIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from '../../assets/icons';
import footerData from '../../data/footer.json';

export const Footer = () => {
  // Get social icon components based on platform name
  const getSocialIcon = (platform) => {
    const iconMap = {
      facebook: <FacebookIcon />,
      instagram: <InstagramIcon />,
      twitter: <TwitterIcon />,
      linkedin: <LinkedinIcon />
    };
    return iconMap[platform] || null;
  };

  return (
    <footer className="bg-[#1C1C1C]">
      <div className="bg-[#2C2C2C]">
        <div className="container mx-auto px-6 md:px-8 lg:px-16 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
            <span className="bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
              {footerData.ctaSection.heading}
            </span>
          </h2>
          <button className="mt-6 md:mt-0 bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors flex-shrink-0">
            {footerData.ctaSection.buttonText}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-16 py-12 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm uppercase tracking-wider">
            {footerData.navigation.map(item => <a key={item} href="#" className="hover:text-gray-400 transition-colors">{item}</a>)}
          </nav>
          <div className="flex gap-4">
            {footerData.socialLinks.map((link) => (
              <a key={link.platform} href={link.url} className="text-gray-400 hover:text-white transition-colors" aria-label={link.ariaLabel}>
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px my-8 bg-gradient-to-r from-green-400 to-yellow-300 border-0"></div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-4">
            <FooterLogoIcon />
            <p className="text-gray-400">&copy; {footerData.company.year} {footerData.company.name}</p>
          </div>
          <a href={footerData.company.privacyPolicy.url} className="text-gray-400 hover:text-white transition-colors">{footerData.company.privacyPolicy.text}</a>
        </div>
      </div>
    </footer>
  );
}
