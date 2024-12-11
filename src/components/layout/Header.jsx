import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from './NavDropdown';
import externalLinkIcon from '/src/assets/images/external-link.png';

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
      <div className="flex flex-col md:flex-row md:items-center justify-between max-w-[2400px] mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={handleHomeClick} className="hover:text-gray-700">
            <h1 className="text-xl md:text-3xl text-black font-custom" style={{ fontFamily: 'YaleNew-Roman' }}>
              YSE Research Computing and Data
            </h1>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
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
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-6 items-center text-lg mt-4 md:mt-0`} 
             style={{ fontFamily: 'YaleNew-Roman' }}>
          <NavDropdown 
            className="text-lg w-full md:w-auto text-center" 
            title="Docs" 
            options={[
              {label: "Yale Center for Research Computing", href:"https://docs.ycrc.yale.edu/", external: true}, 
              {label: "Yale Center for Geospatial Solutions", href: "https://geospatial.yale.edu/", external: true}, 
              {label: "Yale Data Intensive Social Science Center", href: "https://dissc.yale.edu/", external: true}, 
              {label: "YSE IT", href: "https://resources.environment.yale.edu/resources/computing/", external: true}
            ]} 
          />
          <a 
            href="https://calendly.com/mitchell-horn-yale/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-4 py-2 text-black hover:text-gray-700 active:text-gray-900 font-semibold text-lg bg-gray-50 border border-transparent rounded-lg hover:border-blue-700 active:border-black inline-flex items-center justify-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Meet
            <img src={externalLinkIcon} alt="External link" className="w-4 h-4" />
          </a>
          <Link 
            to="/info" 
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
            className="w-full md:w-auto px-4 py-2 text-black hover:text-gray-700 active:text-gray-900 font-semibold text-lg bg-gray-50 border border-transparent rounded-lg hover:border-blue-700 active:border-black text-center"
          >
            Info
          </Link>
        </div>
      </div>
    </div>
  );
}; 