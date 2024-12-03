import { Header } from '../layout/Header';
import mitchPic from '../../assets/images/prof-1.jpg';
import annisePic from '../../assets/images/Dobson_Annise_2024.avif';
import eliPic from '../../assets/images/Fenichel_Eli_2023.avif';

export const InfoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="p-6 max-w-[2400px] mx-auto">
        {/* Mission Statement Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8 border-2 border-blue-400">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
            Mission Statement
          </h2>
          <p className="text-lg text-gray-600">
            YSE Research Computing and Data is dedicated to supporting the Yale School of the Environment's 
            research community. We provide consultation, advanced computing resources, and data 
            management solutions to accelerate scientific discovery and environmental research.
          </p>
        </section>

        {/* People Sections Container */}
        <div className="flex flex-wrap gap-4">
          {/* Our Team Section */}
          <section className="flex-1 bg-white rounded-lg shadow-sm p-8 border-2 border-blue-400">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
              Our Team
            </h2>
            <a 
              href="https://environment.yale.edu/directory/staff/mitchell-horn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center hover:opacity-80 transition-opacity"
            >
              <img
                src={mitchPic}
                alt="Team Member"
                className="w-48 h-48 object-cover rounded-full shadow-lg mb-6 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mitchell J. Horn
              </h3>
              <h4 className="text-lg text-gray-600 mb-4">
                Senior Research Data Analyst
              </h4>
            </a>
          </section>

          {/* Affiliated Section */}
          <section className="flex-1 bg-white rounded-lg shadow-sm p-8 border-2 border-blue-400">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
              Affiliated
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              {/* Affiliated Person 1 */}
              <a 
                href="https://environment.yale.edu/directory/staff/annise-dobson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center max-w-xs hover:opacity-80 transition-opacity"
              >
                <img
                  src={annisePic}
                  alt="Affiliated Member 1"
                  className="w-32 h-32 object-cover object-[center_top] rounded-full shadow-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Annise Dobson
                </h3>
                <h4 className="text-sm text-gray-600">
                Director of Research Programs; Associate Research Scientist
                </h4>
              </a>

              {/* Affiliated Person 2 */}
              <a 
                href="https://environment.yale.edu/profile/eli-fenichel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center max-w-xs hover:opacity-80 transition-opacity"
              >
                <img
                  src={eliPic}
                  alt="Affiliated Member 2"
                  className="w-32 h-32 object-cover object-[center_top] rounded-full shadow-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Eli Fenichel
                </h3>
                <h4 className="text-sm text-gray-600">
                  Knobloch Family Professor of Natural Resource Economics
                </h4>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};