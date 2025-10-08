
import { Link } from 'react-router-dom';

export const NavDropdown = ({ items, icon, sectionId }) => {
  // Helper function to generate paths for dropdown items
  const getDropdownItemPath = (sectionId, itemName) => {
    const slug = itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');

    switch (sectionId) {
      case 'industries':
        return `/products/${slug}`;
      case 'services':
        return `/services/${slug}`;
      case 'solutions':
        return `/solutions/${slug}`;
      case 'about':
        if (itemName === 'Contact Us') return '/contact';
        if (itemName === 'Our Story') return '/about';
        if (itemName === 'Team') return '/about/team';
        if (itemName === 'Careers') return '/about/careers';
        if (itemName === 'Culture & Values') return '/about/culture';
        if (itemName === 'Press & Media') return '/about/press';
        return `/about/${slug}`;
      default:
        return `/${slug}`;
    }
  };

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 origin-top rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
      <div className="flex p-4">
        <div className="flex-grow">
          {items.map((item, index) => (
            <Link
              key={index}
              to={getDropdownItemPath(sectionId, item)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex-shrink-0 pl-4 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};


