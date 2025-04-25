import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from './NavDropdown';
import externalLinkIcon from '/src/assets/images/external-link.png';
import commemorativeLogo from '/src/assets/images/YSE125_Logo_BlueType_RGB.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.pushState("", document.title, window.location.pathname);
    }
    setIsMenuOpen(false);
  };

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
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 ml-4"
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

        {/* Navigation items */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-4 lg:gap-6 items-baseline text-lg mt-4 lg:mt-0`} 
             style={{ fontFamily: 'YaleNew-Roman' }}>
          <NavDropdown 
            className="text-lg w-full lg:w-auto text-center" 
            title="Docs" 
            options={[
              {label: "Yale Center for Research Computing", href:"https://docs.ycrc.yale.edu/", external: true}, 
              {label: "Yale Center for Geospatial Solutions", href: "https://geospatial.yale.edu/", external: true}, 
              {label: "Yale Data-Intensive Social Science", href: "https://dissc.yale.edu/", external: true}, 
              {label: "Yale Biomedical Informatics & Computing", href: "https://medicine.yale.edu/ybic/", external: true},
              {label: "YSE IT", href: "https://resources.environment.yale.edu/resources/computing/", external: true}
            ]} 
          />ls
          <a 
            href="https://calendly.com/mitchell-horn-yale/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-auto px-4 py-2 text-black hover:text-gray-700 active:text-gray-900 font-normal text-lg bg-gray-50 border border-transparent rounded-lg hover:border-blue-700 active:border-black inline-flex items-center justify-center gap-2 whitespace-nowrap"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Meet
            <img src={externalLinkIcon} alt="External link" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}; 