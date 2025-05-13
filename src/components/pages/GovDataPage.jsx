import { Header } from '../layout/Header';
import { SideNav } from '../layout/SideNav';
import { useMediaQuery } from 'react-responsive';
import { Footer } from '../layout/Footer';
import GovDataRescueWorkflow from '../sections/GovDataWorkflow/GovDataRescueWorkflow';
import DataRescueResources from '../sections/GovDataWorkflow/DataRescueResources';

const GovDataPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="min-h-screen pattern-bg pt-24 flex flex-col">
      <Header />
      <div className="flex flex-1">
        {!isMobile && <SideNav />}
        <div className={`flex-1 p-6 ${!isMobile ? 'pl-60' : 'px-4'} mx-auto`}>
          {/* Rescue Workflow Section */}
          <section id="rescue-workflow" className="mb-12">
            <GovDataRescueWorkflow />
          </section>

          {/* Data Rescue Tracker Section */}
          <section id="data-rescue-tracker" className="bg-white p-6 mb-12 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 text-center">
                <img
                src="/drp.png"
                alt="Data Rescue Project Logo"
                className="inline-block mr-2"
                style={{ height: "24px", width: "24px", verticalAlign: "middle" }}
                />
                Data Rescue Project - Tracker
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The Data Rescue Tracker is a collaborative tool built to catalog existing public data rescue efforts so that we can coordinate better across initiatives. At this stage, you can use the tool to help reduce duplication of rescue efforts. The Data Rescue Tracker aims to provide a consolidated overview of who is backing up which dataset from which government websites.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <a 
                href="https://baserow.datarescueproject.org/public/grid/Nt_M6errAkVRIc3NZmdM8wcl74n9tFKaDLrr831kIn4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline"
              >
                Click here to open the Data Rescue Tracker in a new window
              </a>
            </p>
            <div className="w-full overflow-hidden rounded border border-gray-200">
              <iframe 
                src="https://baserow.datarescueproject.org/public/grid/Nt_M6errAkVRIc3NZmdM8wcl74n9tFKaDLrr831kIn4" 
                className="w-full" 
                style={{ height: "600px", border: "none" }}
                title="Data Rescue Project Tracker"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* Additional Resources Section */}
          <section id="additional-resources" className="mb-12">
            <DataRescueResources />
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GovDataPage; 