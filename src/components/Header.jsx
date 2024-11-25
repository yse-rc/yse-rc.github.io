import { NavDropdown } from './shared/NavDropdown';
import '../styles/fonts.css';

export const Header = () => (
  <div className="w-full px-6 py-4 bg-white border-b border-gray-200">
    <div className="flex items-center gap-8 max-w-[2400px] mx-auto">
      <h1 className="text-3xl text-black font-custom font-sofia">
        YSE Research Computing and Data
      </h1>
      <div className="flex gap-6">
        <NavDropdown title="Services" options={["Request Consult"]} />
        <NavDropdown title="Docs" options={["Recommendations", "HPC", "DiSCC", "YCRC"]} />
        <NavDropdown title="Info" options={["Who", "What", "How Much"]} />
      </div>
    </div>
  </div>
); 