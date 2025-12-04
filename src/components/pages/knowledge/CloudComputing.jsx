import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, CloudIcon, ServerIcon, CubeIcon } from '@heroicons/react/24/outline';

const CloudComputing = () => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto w-full">
          
          {/* Header with Breadcrumb */}
          <div className="bg-white p-8 rounded shadow mb-8">
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link to="/knowledge" className="hover:text-blue-600">
                    Knowledge Base
                  </Link>
                </li>
                <li>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </li>
                <li className="font-medium text-gray-900">Cloud Computing</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Cloud Computing
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Flexible, on-demand access to computing resources for research and development
            </p>
          </div>

          {/* Introduction Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CloudIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">What is Cloud Computing?</h3>
                    <p className="text-gray-700 mb-3">
                      Cloud computing services provide flexible, on-demand access to computing resources. 
                      These resources include servers, storage, and software, over the internet. For student 
                      researchers and developers, this allows scalable tools for collaboration, data analysis, 
                      and experimentation. It enables access to computational resources and systems from 
                      anywhere and any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Yale Spinup Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Yale Spinup
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <ServerIcon className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">What is Yale Spinup?</h3>
                    <p className="text-gray-700 mb-4">
                      Spinup is the Cloud Computing Platform for members of the Yale community. Its services 
                      include virtual machines, containers, databases, storage, and static website support. 
                      It also has a Slack community for support and networking.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Available Services</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Virtual machines</li>
                        <li>Containers</li>
                        <li>Databases</li>
                        <li>Storage solutions</li>
                        <li>Static website support</li>
                        <li>Slack community for support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Getting Started</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Login and access the Yale Spinup portal{' '}
                  <a href="https://spinup.internal.yale.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium underline">
                    here
                  </a>
                  . For a quick start guide on Spinup, see{' '}
                  <a 
                    href="https://yaleits.atlassian.net/wiki/spaces/spinup/pages/4563009560/Spinup+Quick+Start+Guide" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    here
                  </a>
                  {' '}and see the FAQ for Spinup{' '}
                  <a 
                    href="https://yaleits.atlassian.net/wiki/spaces/spinup/overview?homepageId=470581620" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    here
                  </a>.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Important Note</h4>
                <p className="text-yellow-800 text-sm">
                  VPN is required for off-campus access to Yale Spinup services.
                </p>
              </div>
            </div>
          </section>

          {/* AWS Research Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              AWS Research
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <CubeIcon className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">AWS Services through Spinup</h3>
                    <p className="text-gray-700 mb-3">
                      Access AWS Services through Spinup. Charges may apply depending on type of service used.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold mb-3 text-orange-900">Billing Notice</h3>
                <p className="text-orange-800 text-sm">
                  Be aware that charges may apply when using AWS services. Review pricing and usage 
                  carefully to avoid unexpected costs.
                </p>
              </div>
            </div>
          </section>

          {/* Related Topics */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Related Topics
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link 
                to="/knowledge/yale-computing/intro-to-hpc"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">←</span>
                Introduction to HPC
              </Link>
              <Link 
                to="/knowledge"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">↑</span>
                Back to Knowledge Base
              </Link>
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CloudComputing;
