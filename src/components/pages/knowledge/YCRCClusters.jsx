import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const YCRCClusters = () => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto w-full">

          {/* Header with Breadcrumb */}
          <div className="bg-white p-8 rounded shadow mb-8">
            {/* Breadcrumb */}
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
                <li>
                  <Link to="/knowledge/yale-computing" className="hover:text-blue-600">
                    Yale Computing
                  </Link>
                </li>
                <li>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </li>
                <li className="font-medium text-gray-900">YCRC Clusters</li>
              </ol>
            </nav>

            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              YCRC Clusters
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Yale's high-performance computing (HPC) clusters managed by{' '}
              <a
                href="https://research.computing.yale.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                YCRC
              </a>
              {' '}(Yale Center for Research Computing)
            </p>
          </div>

          {/* General Research Computing */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              General Research Computing
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Bouchet - Recommended */}
              <div className="border-l-4 border-green-500 rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-2">
                  Bouchet
                  <span className="text-sm font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    ⭐ RECOMMENDED
                  </span>
                </h3>
                <p className="text-gray-600 mb-4">Best for getting started and general research</p>

                <div className="flex gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfLghL1gSHRkIQj73zPzvLCJ0sojm9aUHZLQGBD_auD054gqA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                  >
                    Request Access
                  </a>
                  <a
                    href="https://docs.ycrc.yale.edu/clusters/bouchet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                  >
                    View Documentation
                  </a>
                </div>
              </div>

              {/* Grace - Legacy */}
              <div className="border-l-4 border-yellow-500 rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-2">
                  Grace
                  <span className="text-sm font-semibold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                    ⚠️ LEGACY
                  </span>
                </h3>
                <p className="text-gray-600 mb-4">Being phased out. Use Bouchet for new work.</p>

                <div className="flex gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfLghL1gSHRkIQj73zPzvLCJ0sojm9aUHZLQGBD_auD054gqA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm"
                  >
                    Request Access
                  </a>
                  <a
                    href="https://docs.ycrc.yale.edu/clusters/grace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                  >
                    View Documentation
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Sensitive & Regulated Data */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Sensitive & Regulated Data
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Hopper */}
              <div className="border-l-4 border-blue-500 rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  🔒 Hopper
                </h3>
                <p className="text-gray-600 mb-4">HIPAA, NIST 800-171 compliance</p>

                <div className="flex gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdf2P-rmad5mxy01pNGGtW3tHfxa57I4zZDGSHLS7b7FymQGw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    Request Access
                  </a>
                  <a
                    href="https://docs.ycrc.yale.edu/clusters/hopper/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                  >
                    View Documentation
                  </a>
                </div>
              </div>

              {/* Milgram */}
              <div className="border-l-4 border-blue-500 rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  🔒 Milgram
                </h3>
                <p className="text-gray-600 mb-4">Sensitive data research</p>

                <div className="flex gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfLghL1gSHRkIQj73zPzvLCJ0sojm9aUHZLQGBD_auD054gqA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    Request Access
                  </a>
                  <a
                    href="https://docs.ycrc.yale.edu/clusters/milgram/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                  >
                    View Documentation
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Research */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Specialized Research
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* McCleary */}
              <div className="border-l-4 border-purple-500 rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  🧬 McCleary
                </h3>
                <p className="text-gray-600 mb-4">Medical & life sciences, YCGA</p>

                <div className="flex gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfLghL1gSHRkIQj73zPzvLCJ0sojm9aUHZLQGBD_auD054gqA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                  >
                    Request Access
                  </a>
                  <a
                    href="https://docs.ycrc.yale.edu/clusters/mccleary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                  >
                    View Documentation
                  </a>
                </div>
              </div>

              {/* Misha */}
              <div className="border-l-4 border-purple-500 rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  🧠 Misha
                </h3>
                <p className="text-gray-600 mb-4">Wu Tsai Institute neuroscience</p>

                <div className="flex gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfLghL1gSHRkIQj73zPzvLCJ0sojm9aUHZLQGBD_auD054gqA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                  >
                    Request Access
                  </a>
                  <a
                    href="https://docs.ycrc.yale.edu/clusters/misha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                  >
                    View Documentation
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Using HPC */}
          <div className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Using HPC
            </h2>
            <div className="space-y-4">
              {/* Introduction to HPC */}
              <Link
                to="/knowledge/yale-computing/intro-to-hpc"
                className="block bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all hover:scale-[1.01] border-l-4 border-green-500"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-green-600">
                      Introduction to HPC
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Getting started with high-performance computing at Yale
                    </p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-green-500 mt-1 ml-3 flex-shrink-0" />
                </div>
              </Link>

              {/* Intermediate HPC */}
              <Link
                to="/knowledge/yale-computing/intermediate-hpc"
                className="block bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all hover:scale-[1.01] border-l-4 border-yellow-500"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-yellow-600">
                      Intermediate HPC
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Techniques for leveraging HPC resources effectively
                    </p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-yellow-500 mt-1 ml-3 flex-shrink-0" />
                </div>
              </Link>

              {/* Advanced HPC */}
              <Link
                to="/knowledge/yale-computing/advanced-hpc"
                className="block bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all hover:scale-[1.01] border-l-4 border-orange-500"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-orange-600">
                      Advanced HPC
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Advanced HPC optimization and computing strategies
                    </p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-orange-500 mt-1 ml-3 flex-shrink-0" />
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Quick Links
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <a
                href="https://docs.ycrc.yale.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                YCRC Documentation
              </a>
              <a
                href="https://research.computing.yale.edu/get-help"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                HPC Support
              </a>
              <Link
                to="/knowledge/yale-computing/intro-to-hpc"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Getting Started
              </Link>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default YCRCClusters;