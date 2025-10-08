
import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, DecorativeArrow, ArrowRightCircle, TestimonialArrow, DataStrategyIcon, DataArchitectureIcon, MasterDataIcon, DataSecurityIcon, DataQualityIcon } from '../../assets/icons';

const ServiceCard = ({ icon, title, description, bgClass, patternClass }) => {
  return (
    <div className={`group relative rounded-lg p-8 text-white overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 ${bgClass}`}>
      <div className={`absolute inset-0 opacity-10 ${patternClass}`}></div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="mb-4">{icon}</div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
        </div>
        <div className="mt-4 transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
          <p className="text-sm font-light leading-relaxed">{description}</p>
        </div>
      </div>
      <span className="absolute top-4 right-4 text-white opacity-50 group-hover:opacity-0 transition-opacity duration-300">+</span>
    </div>
  );
};

const TechCarousel = () => {
  const logos = [
    { name: '1Q-Lip', src: 'https://placehold.co/100x40/f3f4f6/9ca3af?text=1Q-Lip' },
    { name: 'Databricks', src: 'https://placehold.co/100x40/f3f4f6/9ca3af?text=Databricks' },
    { name: 'Alation', src: 'https://placehold.co/100x40/f3f4f6/9ca3af?text=Alation' },
    { name: 'Cassandra', src: 'https://placehold.co/100x40/f3f4f6/9ca3af?text=Cassandra' },
    { name: 'VoltDB', src: 'https://placehold.co/100x40/f3f4f6/9ca3af?text=VoltDB' },
    { name: 'Azure Cosmos DB', src: 'https://placehold.co/100x40/f3f4f6/9ca3af?text=Cosmos+DB' },
    { name: 'Neo4j', src: 'https://placehold.co/100x40/f3f4f6/9ca3af?text=Neo4j' },
    { name: 'ShareGate', src: 'https://placehold.co/100x40/f3f4f6/9ca3af?text=ShareGate' },
  ];

  const extendedLogos = [...logos, ...logos];
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let animationFrameId;
    let scrollAmount = 0;

    const animate = () => {
      scrollAmount -= 0.5;
      if (Math.abs(scrollAmount) >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      carousel.style.transform = `translateX(${scrollAmount}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  return (
    <div className="relative w-full overflow-hidden mask-gradient">
      <div ref={carouselRef} className="flex">
        {extendedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center p-2">
            <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "Zimetrics consistently delivers outstanding customer service, combining responsiveness with a genuine commitment to client success. Their team is passionate, works with cutting-edge technologies and goes out of their way to support our software and teams. Within a relatively short period of working with them, we have been able to improve one of our functions completely.",
      author: "Vaibhav Puranik",
      title: "Sr. Vice President of Global Engineering",
      logo: "https://placehold.co/100x30/ffffff/cbd5e1?text=GumGum"
    },
    {
      quote: "The team's expertise in data science and engineering is truly top-notch. They helped us unlock insights we never thought possible, leading to significant business growth.",
      author: "Jane Doe",
      title: "Chief Data Officer",
      logo: "https://placehold.co/100x30/ffffff/cbd5e1?text=InnovateCo"
    },
    {
      quote: "A reliable and innovative partner. Their commitment to our success was evident in every interaction. Highly recommended for any company looking to leverage their data.",
      author: "John Smith",
      title: "Head of Analytics",
      logo: "https://placehold.co/100x30/ffffff/cbd5e1?text=FutureCorp"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-0 left-0 -ml-4 w-1 h-full bg-green-400"></div>
      <div className="absolute top-0 right-0 -mr-4 w-1 h-full bg-green-400"></div>
      <div className="relative h-64 overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-purple-700">Genuine commitment to client success</h3>
            <p className="text-gray-600 mb-6">{testimonial.quote}</p>
            <div className="flex items-center">
              <div>
                <p className="font-bold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
              <img src={testimonial.logo} alt="client logo" className="ml-auto h-8 object-contain" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end mt-4 space-x-2">
        <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
          <TestimonialArrow />
        </button>
        <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
          <TestimonialArrow className="transform rotate-180" />
        </button>
      </div>
    </div>
  );
}

const ServiceDetailPage = () => {
  const services = [
    {
      icon: <DataStrategyIcon />,
      title: "Data Strategy Consulting",
      description: "We help you build a data-driven culture and create a roadmap for your data journey.",
      bgClass: "bg-purple-600",
      patternClass: "bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:30px_30px]"
    },
    {
      icon: <DataArchitectureIcon />,
      title: "Data Architecture",
      description: "Design and implement scalable and robust data architectures for modern data platforms.",
      bgClass: "bg-teal-500",
      patternClass: "bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:30px_30px]"
    },
    {
      icon: <MasterDataIcon />,
      title: "Master Data Management",
      description: "Establish a single source of truth for your critical data assets across the enterprise.",
      bgClass: "bg-teal-600",
      patternClass: "bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:30px_30px]"
    },
    {
      icon: <DataSecurityIcon />,
      title: "Data Security and Privacy",
      description: "Implement data privacy and security measures to protect sensitive data and ensure compliance with data protection regulations.",
      bgClass: "bg-green-500",
      patternClass: ""
    },
    {
      icon: <DataQualityIcon />,
      title: "Data Quality Management",
      description: "Improve the accuracy, completeness, and consistency of your data to build trust.",
      bgClass: "bg-teal-600",
      patternClass: "bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:30px_30px]"
    }
  ];

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <style>{`
                .mask-gradient {
                    -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
                }
            `}</style>
      {/* --- Hero Section --- */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="z-10">
              <nav aria-label="Breadcrumb" className="text-sm font-medium text-gray-500 mb-4">
                <ol className="list-none p-0 inline-flex items-center space-x-2">
                  <li><a href="#" className="hover:text-gray-700">Services</a></li>
                  <li><ChevronRight className="w-4 h-4 text-gray-400" /></li>
                  <li><a href="#" className="hover:text-gray-700">Data</a></li>
                  <li><ChevronRight className="w-4 h-4 text-gray-400" /></li>
                  <li aria-current="page" className="text-gray-400">Data Strategy & Design</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-teal-400 text-transparent bg-clip-text">
                  Transforming Data into Strategic Advantage
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Harness the true potential of your data to fuel your business strategy.
              </p>
            </div>
            {/* Right Column: Abstract Graphic */}
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://placehold.co/600x400/E2E8F0/A0AEC0?text=Abstract+3D+Cubes"
                  alt="Abstract 3D cubes graphic"
                  className="w-full max-w-lg h-auto object-contain rounded-lg shadow-2xl opacity-80"
                />
              </div>
              <DecorativeArrow className="absolute top-1/4 left-1/4 w-6 h-6 text-purple-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-70" />
              <DecorativeArrow className="absolute bottom-1/4 right-1/4 w-6 h-6 text-purple-300 transform translate-x-1/2 translate-y-1/2 -rotate-135 opacity-70" />
              <DecorativeArrow className="absolute top-1/2 right-0 w-8 h-8 text-purple-300 transform -translate-y-1/2 -rotate-45 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Content Section --- */}
      <section className="relative bg-black text-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-1">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Data Strategy & Design
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed">
                Deriving long term and sustainable business value from data calls for more than using modern data technologies. It involves building a proper roadmap that includes defining the delivery strategy. It's also crucial to create a tech strategy that aligns with the business goals. Our aim is to provide business growth-enhancing decision support assets and data-enabled digital experiences while navigating regulatory, privacy, and security requirements. We offer enterprise assessment, recommendations, data maturity compasses, agile delivery models, data analysis tooling. At Entropik, we use controlled partnerships to help you reach your business goals faster and more predictably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Grid Section --- */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            We can help you with
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                bgClass={service.bgClass}
                patternClass={service.patternClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Platforms & Technologies Section --- */}
      <section className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Platforms & Technologies
            </h2>
            <div className="hidden md:flex items-center space-x-2 text-gray-400">
              <ArrowRightCircle className="w-8 h-8 cursor-pointer hover:text-gray-600" />
              <ArrowRightCircle className="w-8 h-8 cursor-pointer hover:text-gray-600 transform rotate-180" />
            </div>
          </div>
          <TechCarousel />
        </div>
      </section>

      {/* --- Contact & Info Section --- */}
      <section className="bg-white pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-black text-white p-8 md:p-12 rounded-lg grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:50px_50px] opacity-20"></div>

            {/* Left Side: Info */}
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Getting from a challenge to its solution starts with just one click
              </h3>
              <p className="text-gray-300 mb-8">
                Gain expertise from Zimetrics global network of experts and find practical solutions to your challenges.
              </p>
              <p className="text-gray-400">
                To find out more about us, email <a href="mailto:biz@zimetrics.com" className="text-teal-400 hover:underline">biz@zimetrics.com</a> or complete the form below.
              </p>
            </div>
            {/* Right Side: Image Cards */}
            <div className="relative grid grid-cols-2 gap-4 h-full min-h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-1/2 h-full">
                  <img src="https://placehold.co/300x400/047857/FFFFFF?text=Data-Driven" alt="Data-Driven Decision Making" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full rounded-b-lg">
                    <h4 className="font-bold">Data-Driven Decision Making: Executive Dashboard and Pipeline</h4>
                  </div>
                </div>
                <div className="relative w-1/2 h-full -ml-12 mt-12">
                  <img src="https://placehold.co/300x400/4f46e5/FFFFFF?text=FDA-Approved" alt="FDA-Approved Nerve Simulation" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full rounded-b-lg">
                    <h4 className="font-bold">FDA-Approved Nerve Simulation Therapy: A MedTech Startup's Success Story</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-100 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none" />
            </div>
            <div>
              <textarea placeholder="Write your message" rows="4" className="w-full p-4 bg-gray-100 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"></textarea>
            </div>
            <div>
              <input type="email" placeholder="Business Email" className="w-full p-4 bg-gray-100 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none" />
            </div>
            <div className="md:col-start-2 flex flex-col justify-between items-start md:items-end">
              <div className="flex items-center mb-4">
                <input id="consent" type="checkbox" className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">By submitting this form, you agree to be contacted regarding your request</label>
              </div>
              <button type="submit" className="bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center space-x-2">
                <span>Submit</span>
                <ArrowRightCircle className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- NEW Testimonials and Related Articles Section --- */}
      <section className="relative bg-white pt-20 lg:pt-24 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x800/1f2937/38bdf8?text=Cityscape+at+Night')" }}></div>
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Testimonial Section */}
          <div className="text-center mb-12">
            <span className="inline-block bg-green-400 text-black px-4 py-1 rounded-md text-sm font-semibold">What our clients say</span>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl mb-24">
            <TestimonialCarousel />
          </div>

          {/* Related Articles Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
              <span className="text-sm text-gray-500 mb-2 block">Platforms</span>
              <h4 className="text-xl font-bold mb-3">ProStream</h4>
              <p className="text-gray-600 mb-4 text-sm">Connectivity that Transcends Boundaries</p>
              <a href="#" className="font-semibold text-teal-600 hover:text-teal-700">Learn more.</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-teal-500">
              <span className="text-sm text-gray-500 mb-2 block">Services</span>
              <h4 className="text-xl font-bold mb-3">Data Platform Engineering</h4>
              <p className="text-gray-600 mb-4 text-sm">Engineered to Empower: Elevate your Data Platform</p>
              <a href="#" className="font-semibold text-teal-600 hover:text-teal-700">Learn more.</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <span className="text-sm text-gray-500 mb-2 block">Practices</span>
              <h4 className="text-xl font-bold mb-3">Snowflake</h4>
              <p className="text-gray-600 mb-4 text-sm">Discover the Future of Data Management with Snowflake!</p>
              <a href="#" className="font-semibold text-teal-600 hover:text-teal-700">Learn more.</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
