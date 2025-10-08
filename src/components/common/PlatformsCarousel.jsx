
import platformsData from '../../data/platformsCarousel.json';

export const PlatformsCarousel = ({ logos = platformsData.logos }) => {
  const extendedLogos = [...logos, ...logos];
  return (
    <div className={platformsData.section.className}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-bold text-[#8F48EB] mb-10">{platformsData.section.title}</h3>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {logos.map((logo, index) => (<li key={index}><img src={logo.src} alt={logo.alt} className="max-h-8" /></li>))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {logos.map((logo, index) => (<li key={index}><img src={logo.src} alt={logo.alt} className="max-h-8" /></li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};
