import { useParams, Link } from 'react-router-dom';
import servicesData from '../data/services.json';

export const Services = () => {
  const { id } = useParams();
  
  // If no ID, show services list
  if (!id) {
    return (
      <main>
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {servicesData.pageTitle}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {servicesData.pageSubtitle}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mt-16">
              {servicesData.services.map((service) => (
                <Link 
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors group border border-gray-100 hover:border-purple-200"
                >
                  <div className={`h-12 w-12 bg-${service.color}-600 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-sm font-bold">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{service.shortDescription}</p>
                    <span className="text-purple-600 font-medium text-sm">Learn More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Find the specific service
  const service = servicesData.services.find(s => s.id === id);
  
  if (!service) {
    return (
      <main>
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
            <Link to="/services" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              Back to Services
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      purple: 'bg-purple-600',
      teal: 'bg-teal-600', 
      green: 'bg-green-600',
      orange: 'bg-orange-600',
      red: 'bg-red-600',
      indigo: 'bg-indigo-600'
    };
    return colorMap[color] || 'bg-gray-600';
  };

  // Show individual service details
  return (
    <main>
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/services" className="text-purple-600 hover:text-purple-700">← Back to Services</Link>
          </nav>
          
          {/* Service Hero */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-4">
                <div className={`h-16 w-16 ${getColorClass(service.color)} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-xl">{service.icon}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{service.category}</span>
                  <h1 className="text-4xl font-bold text-gray-800">{service.name}</h1>
                </div>
              </div>
              <p className="text-xl text-gray-600 mb-6">{service.longDescription}</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Duration:</span>
                  <span className="font-semibold">{service.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Starting Price:</span>
                  <span className="font-semibold text-purple-600">{service.pricing}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <img src={service.image} alt={service.name} className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Process and Deliverables */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`h-8 w-8 ${getColorClass(service.color)} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Deliverables</h2>
              <ul className="space-y-3">
                {service.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">Let's discuss how our {service.name.toLowerCase()} can help transform your business.</p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
              >
                Start Project
              </Link>
              <Link 
                to="/contact"
                className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};