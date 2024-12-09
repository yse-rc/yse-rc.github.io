import { NavDropdown } from './NavDropdown';
import '../../styles/fonts.css';

export const Header = () => (
  <div className="w-full px-6 py-4 bg-gray-50 border-b border-gray-300">
    <div className="flex items-center gap-8 max-w-[2400px] mx-auto">
      <a href="#" className="hover:text-gray-700">
        <h1 className="text-3xl text-black font-custom" style={{ fontFamily: 'YaleNew-Roman' }}>
          YSE Research Computing and Data
        </h1>
      </a>
      <div className="flex gap-6 items-center text-lg" style={{ fontFamily: 'YaleNew-Roman' }}>
        <NavDropdown className="text-lg" title="Services" options={[{label: "Request Consult", href: "https://yale.service-now.com/it?id=service_offering&sys_id=f06cc75a937d92d03894f17e1dba104b", external: true}]} />
        <NavDropdown className="text-lg" title="Docs" options={[{label: "Yale Center for Research Computing", href:"https://docs.ycrc.yale.edu/", external: true}, {label: "Yale Center for Geospatial Solutions", href: "https://geospatial.yale.edu/", external: true}, {label: "Yale Data Intensive Social Science Center", href: "https://dissc.yale.edu/", external: true}, {label: "YSE IT", href: "https://resources.environment.yale.edu/resources/computing/", external: true}]} />
        <a href="#info" className="px-4 py-2 text-black hover:text-gray-700 active:text-gray-900 font-semibold text-lg bg-gray-50 border border-transparent rounded-lg hover:border-blue-700 active:border-black"> Info</a>
      </div>
    </div>
  </div>
); 