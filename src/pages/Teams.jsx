import React, { useState } from 'react';

import { LinkedInIcon } from '../assets/icons';
const teamData = {
  executive: [
    {
      name: 'Karan Thakral',
      title: 'Co - Founder',
      imageUrl: 'https://devkraft-co.s3.ap-south-1.amazonaws.com/teams/Karan.jpg',
      linkedin: 'https://www.linkedin.com/in/karanthakral/',
    }, {
      name: 'Nikhil Khinchi',
      title: 'Chief Technology Officer',
      imageUrl: 'https://devkraft-co.s3.ap-south-1.amazonaws.com/teams/Nikhil.jpg',
      linkedin: 'https://www.linkedin.com/in/nkhinchi/',
    }, {
      name: 'Sachin Lale',
      title: 'Vice President Engineering',
      imageUrl: 'https://devkraft-co.s3.ap-south-1.amazonaws.com/teams/Sachin.jpg₹',
      linkedin: 'https://www.linkedin.com/in/sachin-lale/',
    }, {
      name: 'Nishant KV',
      title: 'Senior Product Manager',
      imageUrl: 'https://devkraft-co.s3.ap-south-1.amazonaws.com/teams/Nishant.jpg',
      linkedin: 'https://www.linkedin.com/in/nishant-kv/',
    }, {
      name: 'Amit Parashar',
      title: 'Growth & Partnerships',
      imageUrl: 'https://devkraft-co.s3.ap-south-1.amazonaws.com/teams/Amit.jpg',
      linkedin: 'https://www.linkedin.com/in/amit-p-317324111/',
    },

  ],
};




const TeamMemberCard = ({ name, title, imageUrl }) => (
  <div className="group relative flex flex-col items-center text-center">
    <div className="relative w-full max-w-[200px] md:max-w-[240px] rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto aspect-square object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/gray/white?text=...'; }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{title}</p>
      <a href="#" className="mt-2 inline-block p-2 rounded-full border border-gray-300 group-hover:bg-purple-600 group-hover:border-purple-600 transition-colors duration-300">
        <LinkedInIcon />
      </a>
    </div>
  </div>
);

export default function Teams() {
  const teamMembers = [
    ...teamData.executive,
  ].slice(0, 5);

  const firstRowMembers = teamMembers.slice(0, 3);
  const secondRowMembers = teamMembers.slice(3, 5);

  return (
    <div className="bg-white font-sans">
      <header className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A modern office environment"
            className="w-full h-full object-cover grayscale"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x400/000000/FFFFFF?text=Our+Team'; }}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 px-4">
          <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-gray-300">Leadership</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
            Excellence in everything we do!
          </h1>
        </div>
      </header>

      <main>
        {/* Introduction Section */}
        <section className="bg-purple-600 text-white">
          <div className="container mx-auto px-6 py-12 md:py-16 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team!</h2>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">
              At Devkraft, our people are the heart of everything we do. We bring together curious minds, problem solvers, and innovators who share a passion for creating real impact through technology. Collaboration, trust, and continuous learning define our culture, where every voice is valued and every idea has the power to shape the future.
            </p>
          </div>
        </section>

        {/* Team Members Display */}
        <section className="bg-white pt-12 md:pt-16">
          <div className="container mx-auto px-6 pb-8 md:pb-12">
            <div className="flex flex-col items-center gap-8 lg:gap-12">
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 w-full md:w-auto justify-center">
                {firstRowMembers.map((member, index) => (
                  <TeamMemberCard key={`row1-${index}`} {...member} />
                ))}
              </div>
              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 w-full md:w-auto justify-center">
                {secondRowMembers.map((member, index) => (
                  <TeamMemberCard key={`row2-${index}`} {...member} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
