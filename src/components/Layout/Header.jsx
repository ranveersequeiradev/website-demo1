import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IndustriesIcon, PlusIcon, ChevronDownIcon, HamburgerIcon, CloseIcon } from '../../assets/icons';
import { NavDropdown } from '../common/NavDropdown';
import headerData from '../../data/header.json';
export const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 200);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const location = useLocation();

  // Main navigation links
  const mainNavItems = [

  ];

  // Get navigation items from JSON data
  const navItems = headerData.navigation.items.map(item => ({
    ...item,
    icon: <IndustriesIcon />
  }));

  // Helper function to generate paths for dropdown items
  const getDropdownItemPath = (sectionId, itemName) => {
    const slug = itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');

    switch (sectionId) {
      case 'capabilities':
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
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:px-8 lg:px-16 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-white hover:text-blue-200 transition-colors">
          <PlusIcon />
          <span className="font-bold text-2xl ml-2">{headerData.logo.text}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-gray-300 text-sm font-medium hover:text-white transition-colors ${location.pathname === item.path ? 'text-blue-400' : ''
                }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Dropdown navigation items */}
          {navItems.map((item) => (
            <div key={item.id} className="relative" onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}>
              <div className="text-gray-300 capitalize text-sm font-medium hover:text-white transition-colors flex items-center cursor-pointer">
                {item.name} <ChevronDownIcon />
              </div>
              {openMenu === item.id && <NavDropdown items={item.dropdown} icon={item.icon} sectionId={item.id} />}
            </div>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span className='text-white'>
            {headerData.cta.text}
          </span>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white text-2xl transition-colors p-1">
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-full h-screen bg-slate-900/98 backdrop-blur-lg z-20 transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden overflow-y-auto`}>
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-700/50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-white hover:text-blue-200 transition-colors">
            <PlusIcon />
            <span className="font-bold text-xl ml-2">{headerData.logo.text}</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white text-2xl p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="px-6 py-8">
          {/* Main Navigation */}
          <div className="space-y-6 mb-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-medium transition-colors ${location.pathname === item.path
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Dropdown Sections */}
          {navItems.map((item) => (
            <div key={item.id} className="mb-8">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 capitalize">{item.name}</h3>
              <div className="space-y-3 pl-4">
                {item.dropdown.map((dropdownItem, index) => (
                  <Link
                    key={index}
                    to={getDropdownItemPath(item.id, dropdownItem)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm text-gray-300 hover:text-white transition-colors py-1"
                  >
                    {dropdownItem}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Scroll indicator */}
          <div className="scroll-indicator mb-6"></div>

          {/* CTA Button */}
          <div className="pt-6 border-t border-purple-800">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {headerData.mobileMenu.ctaText}
            </Link>
          </div>

          {/* Bottom padding for scroll */}
          <div className="h-20"></div>
        </div>

        {/* Scroll to top button */}
        <div className="fixed bottom-6 right-6 z-30">
          <button
            onClick={() => {
              const mobileMenu = document.querySelector('.overflow-y-auto');
              if (mobileMenu) {
                mobileMenu.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
            title="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </header>
  );
};
