import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, GlobeAltIcon, DocumentTextIcon, MapIcon } from '@heroicons/react/24/outline';

const DataSources = () => {
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
                <li className="font-medium text-gray-900">Data Sources</li>
              </ol>
            </nav>

            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Data Sources & Portals
            </h1>
            <p className="text-lg text-gray-600 text-center">
              A curated list of places to find datasets and resources relevant to research and teaching.
            </p>
          </div>

          {/* Data Portals Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Yale Institutional Data Portals
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <DocumentTextIcon className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Library Quicksearch — Find Data Sets</h3>
                    <p className="text-gray-700 mb-3">
                      Guidance from Yale University Library on locating datasets across institutional subscriptions,
                      public repositories, and library-managed collections.
                    </p>
                    <a
                      href="https://web.library.yale.edu/quicksearch/tips/find-data-sets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Yale Library: Find Data Sets →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <GlobeAltIcon className="h-8 w-8 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">YSM Research Data & Support</h3>
                    <p className="text-gray-700 mb-3">
                      Yale School of Medicine guidance and resources for managing, sharing, and finding research data.
                    </p>
                    <a
                      href="https://library.medicine.yale.edu/research-support/research-data/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                    >
                      Yale Medicine: Research Data Support and Resources →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <MapIcon className="h-8 w-8 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Som Yale — International Center for Finance (Data)</h3>
                    <p className="text-gray-700 mb-3">
                      Data collections and resources maintained by Yale SOM's International Center for Finance,
                      useful for finance and economic research.
                    </p>
                    <a
                      href="https://som.yale.edu/centers/international-center-for-finance/data"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                    >
                      SOM — Data Resources →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-4">
                  <DocumentTextIcon className="h-8 w-8 text-blue-900 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-900">YSPH DSDE — Datasets Resources</h3>
                    <p className="text-blue-800 mb-3">
                      A collection of datasets and guides maintained by the Yale School of Public Health DSDE group.
                    </p>
                    <a
                      href="https://ysph-dsde.github.io/resources-page/Pages/Datasets/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium"
                    >
                      YSPH DSDE — Datasets →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-start space-x-4">
                  <GlobeAltIcon className="h-8 w-8 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Yale Data Resource Navigation Tool</h3>
                    <p className="text-gray-700 mb-3">
                      Navigation and pointers to Yale-hosted and licensed data tools, curated for public health research and data equity.
                    </p>
                    <a
                      href="https://ysph.yale.edu/research/research-centers-and-initiatives/public-health-data-science-and-data-equity/resources/yale-data-resource-navigation-tool/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Yale Data Resource Navigation Tool →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Guidance */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Additional Guidance
            </h2>
            <p className="text-gray-700 mb-4">
              If you need help locating or accessing datasets at Yale, contact Yale Library. Some datasets require institutional access or request procedures.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <Link to="/knowledge" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
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

export default DataSources;