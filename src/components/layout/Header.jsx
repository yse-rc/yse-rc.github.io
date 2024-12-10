import { Link } from 'react-router-dom';
import { NavDropdown } from './NavDropdown';
import '../../styles/fonts.css';

export const Header = () => {
  const handleHomeClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b border-gray-300">
      <div className="flex items-center gap-8 max-w-[2400px] mx-auto px-6 py-4">
        <Link to="/" onClick={handleHomeClick} className="hover:text-gray-700">
          <h1 className="text-3xl text-black font-custom" style={{ fontFamily: 'YaleNew-Roman' }}>
            YSE Research Computing and Data
          </h1>
        </Link>
        <div className="flex gap-6 items-center text-lg" style={{ fontFamily: 'YaleNew-Roman' }}>
          <NavDropdown 
            className="text-lg" 
            title="Docs" 
            options={[
              {label: "Yale Center for Research Computing", href:"https://docs.ycrc.yale.edu/", external: true}, 
              {label: "Yale Center for Geospatial Solutions", href: "https://geospatial.yale.edu/", external: true}, 
              {label: "Yale Data Intensive Social Science Center", href: "https://dissc.yale.edu/", external: true}, 
              {label: "YSE IT", href: "https://resources.environment.yale.edu/resources/computing/", external: true}
            ]} 
          />
          <Link 
            to="/info" 
            onClick={() => window.scrollTo(0, 0)}
            className="px-4 py-2 text-black hover:text-gray-700 active:text-gray-900 font-semibold text-lg bg-gray-50 border border-transparent rounded-lg hover:border-blue-700 active:border-black"
          >
            Info
          </Link>
        </div>
      </div>
    </div>
  );
}; 