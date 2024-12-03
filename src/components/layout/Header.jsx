import { NavDropdown } from './NavDropdown';
import '../../styles/fonts.css';

export const Header = () => (
  <div className="w-full px-6 py-4 bg-white border-b border-gray-200">
    <div className="flex items-center gap-8 max-w-[2400px] mx-auto">
      <a href="/" className="hover:text-gray-700">
        <h1 className="text-3xl text-black font-custom font-sofia">
          YSE Research Computing and Data
        </h1>
      </a>
      <div className="flex gap-6">
        <NavDropdown title="Services" options={[{label: "Request Consult", href: "https://yale.service-now.com/it?id=service_offering&sys_id=f06cc75a937d92d03894f17e1dba104b", external: true}]} />
        <NavDropdown title="Docs" options={[{label: "Yale Center for Research Computing (HPC)", href:"https://docs.ycrc.yale.edu/", external: true}, {label: "Yale Center for Geospatial Solutions (GIS)", href: "https://geospatial.yale.edu/", external: true}, {label: "Yale Data Intensive Social Science Center (Data)", href: "https://dissc.yale.edu/", external: true}, {label: "YSE IT (General IT)", href: "https://resources.environment.yale.edu/resources/computing/", external: true}]} />
        <a href="#info" className="px-4 py-2 text-black hover:text-gray-700 font-semibold text-sm"> Info</a>
      </div>
    </div>
  </div>
); 