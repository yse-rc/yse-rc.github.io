import { Header } from '../layout/Header';
import mitchPic from '../../assets/images/prof-1.jpg';

export const InfoPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <Header />
      
      <div className="p-6 max-w-[2400px] mx-auto">
        {/* Mission Statement Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
            Mission Statement
          </h2>
          <p className="text-lg text-gray-600">
            YSE Research Computing and Data is dedicated to supporting the Yale School of the Environment's 
            research community. We provide consultation, advanced computing resources, and data 
            management solutions to accelerate scientific discovery and environmental research.
          </p>
        </section>

        {/* Team Member */}
        <section className="bg-white rounded-lg shadow-sm p-8">
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
      </div>
    </div>
  );
};