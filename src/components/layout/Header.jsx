import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavDropdown } from './NavDropdown';
import { getNavigationSections } from '../../data/navigationSections';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import externalLinkIcon from '/src/assets/images/external-link.png';
import commemorativeLogo from '/src/assets/images/YSE125_Logo_BlueType_RGB.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.pushState("", document.title, window.location.pathname);
    }
    setIsMenuOpen(false);
  };

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const sections = getNavigationSections(location.pathname);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-baseline max-w-[2400px] mx-auto px-4 md:px-6 py-4">
        {/* Logo */}
        <div className="flex justify-between items-baseline w-full md:w-auto">
          <Link to="/" onClick={handleHomeClick} className="flex flex-col hover:text-gray-700">
          <div className="flex items-baseline gap-3 whitespace-nowrap">
            <span className="text-3xl md:text-4xl text-yale-blue" style={{ fontFamily: 'YaleNew-Roman' }}>
                Yale
            </span>
          <div className="flex flex-col md:flex-row md:items-baseline">
            <span className="text-xl md:text-2xl text-yale-blue" style={{ fontFamily: 'YaleNew-Roman' }}>
              SCHOOL OF THE ENVIRONMENT
            </span>
              <div className="flex items-baseline gap-3 md:ml-3">
              <span className="text-gray-600">|</span>
              <span className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'YaleNew-Roman' }}>
                Research Computing and Data
              </span>
              </div>
            </div>
          </div>
        </Link>
          
          {/* Mobile menu button - shown below 768px (md breakpoint) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 ml-4"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation items - only visible on lg screens and above */}
        <div className="hidden lg:flex flex-row gap-6 items-baseline text-lg" 
             style={{ fontFamily: 'YaleNew-Roman' }}>
          <NavDropdown 
            className="text-lg" 
            title="Docs" 
            options={[
              {label: "Yale Center for Research Computing", href:"https://docs.ycrc.yale.edu/", external: true}, 
              {label: "Yale Center for Geospatial Solutions", href: "https://geospatial.yale.edu/", external: true}, 
              {label: "Yale Data-Intensive Social Science", href: "https://dissc.yale.edu/", external: true}, 
              {label: "Yale Biomedical Informatics & Computing", href: "https://medicine.yale.edu/ybic/", external: true},
              {label: "YSE IT", href: "https://resources.environment.yale.edu/resources/computing/", external: true}
            ]} 
          />
          <a 
            href="https://calendly.com/mitchell-horn-yale/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-black hover:text-gray-700 active:text-gray-900 font-normal text-lg bg-gray-50 border border-transparent rounded-lg hover:border-blue-700 active:border-black inline-flex items-center gap-2 whitespace-nowrap"
          >
            Let's Meet
            <img src={externalLinkIcon} alt="External link" className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Navigation Menu - contains SideNav items */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="mt-4 space-y-2">
              {sections.map((section) => (
                <div key={section.id}>
                  <Link
                    to={section.path}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 text-gray-600 font-semibold hover:text-gray-700 rounded-lg transition-colors ${
                      location.pathname === section.path ? 'text-blue-700 bg-blue-50' : ''
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    {section.label}
                  </Link>
                  
                  {/* Render children if any */}
                  {section.children.length > 0 && (
                    <ul className="pl-8 space-y-1 mt-1">
                      {section.children.map((child) => (
                        <li key={child.id}>
                          {child.nestedChildren ? (
                            // Expandable sub-item with nested children
                            <div>
                              <div
                                className={`flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                                  location.pathname === child.path
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                              >
                                <Link
                                  to={child.path}
                                  className="flex-1"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleExpanded(child.id);
                                  }}
                                  className={`p-1 rounded transition-colors bg-transparent ${
                                    location.pathname === child.path
                                      ? 'text-blue-700 hover:bg-blue-200'
                                      : 'text-gray-600 hover:bg-gray-200'
                                  }`}
                                >
                                  {expandedItems[child.id] ? (
                                    <ChevronDownIcon className="w-4 h-4" />
                                  ) : (
                                    <ChevronRightIcon className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                              {expandedItems[child.id] && (
                                <ul className="pl-6 mt-1 space-y-1">
                                  {child.nestedChildren.map((nested) => (
                                    <li key={nested.id}>
                                      <Link
                                        to={nested.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${
                                          location.pathname === nested.path
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                      >
                                        {nested.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            // Regular sub-item (for sections on the same page)
                            <a
                              href={`#${child.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(child.id);
                                if (element) {
                                  const headerOffset = 100;
                                  const elementPosition = element.getBoundingClientRect().top;
                                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                  
                                  window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                  });
                                  window.history.pushState(null, '', `#${child.id}`);
                                  setIsMenuOpen(false);
                                }
                              }}
                              className={`block px-4 py-2 rounded-lg transition-colors ${
                                window.location.hash === `#${child.id}` 
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              {child.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {section.separator && (
                    <div className="h-px bg-gray-200 my-2 mx-4" />
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}; 