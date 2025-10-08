import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';

export const Products = () => {
  const { id } = useParams();
  
  // If no ID, show products list
  if (!id) {
    return (
      <main>
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {productsData.pageTitle}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {productsData.pageSubtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {productsData.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className={`h-12 w-12 bg-${product.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold">{product.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {product.shortDescription}
                  </p>
                  <Link 
                    to={`/products/${product.id}`}
                    className="text-purple-600 font-semibold hover:text-purple-700"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Find the specific product
  const product = productsData.products.find(p => p.id === id);
  
  if (!product) {
    return (
      <main>
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/products" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              Back to Products
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

  // Show individual product details
  return (
    <main>
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/products" className="text-purple-600 hover:text-purple-700">← Back to Products</Link>
          </nav>
          
          {/* Product Hero */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-4">
                <div className={`h-16 w-16 ${getColorClass(product.color)} rounded-lg flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-xl">{product.icon}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
                  <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                </div>
              </div>
              <p className="text-xl text-gray-600 mb-6">{product.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Features and Benefits */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits</h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">★</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(product.pricing).map(([plan, price]) => (
                <div key={plan} className="bg-white rounded-lg p-6 shadow">
                  <h3 className="text-lg font-semibold text-gray-800 capitalize mb-2">{plan}</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-4">{price}</p>
                  <Link 
                    to="/contact"
                    className={`w-full block text-center py-2 px-4 rounded ${
                      plan === 'professional' 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'border border-purple-600 text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};