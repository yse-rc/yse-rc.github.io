import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, AcademicCapIcon, GlobeAltIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const ProDev2 = () => {
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
                <li className="font-medium text-gray-900">Professional Development</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Professional Career Development Resources
            </h1>
            <p className="text-lg text-gray-600 text-center">
              A comprehensive list of resources available to members of the Yale Community for professional career development
            </p>
          </div>

          {/* Academic & Research Tools Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Academic & Research Writing Tools
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <DocumentTextIcon className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Overleaf and LaTeX</h3>
                    <p className="text-gray-700 mb-3">
                      Overleaf helps graduate students craft research papers, theses, and even professional resumes using LaTeX, 
                      allowing collaboration and cloud-based convenience. Yale offers students free access to Overleaf Professional 
                      for all students.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Overleaf Professional Features</h4>
                      <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                        <li>Real-time track changes</li>
                        <li>Unlimited collaborators</li>
                        <li>Full document history</li>
                      </ul>
                    </div>
                    <a 
                      href="https://www.overleaf.com/edu/yale" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Access Overleaf Professional →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Geospatial Analysis Tools Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Geospatial Analysis & GIS Tools
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <GlobeAltIcon className="h-8 w-8 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Google Earth Engine</h3>
                    <p className="text-gray-700 mb-3">
                      Google Earth Engine is a cloud-based platform that enables geospatial analysis using a global archive 
                      of satellite imagery and remote sensing data. It offers built-in tools for visualizing, filtering, 
                      and processing raster and vector data.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="https://earthengine.google.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium block"
                      >
                        Access Google Earth Engine →
                      </a>
                      <a 
                        href="https://developers.google.com/earth-engine/tutorials/community/beginners-cookbook" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-800 font-medium block"
                      >
                        Beginner's Tutorial Cookbook →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <AcademicCapIcon className="h-8 w-8 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">ArcGIS and Esri Training</h3>
                    <p className="text-gray-700 mb-3">
                      Members of the Yale community can join the Esri Training Platform for free access to virtual GIS training. 
                      Yale also provides additional support through the Library and Center for Geospatial Solutions.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="https://yalemaps.maps.arcgis.com/home/index.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium block"
                      >
                        Yale ArcGIS Platform →
                      </a>
                      <a 
                        href="https://guides.library.yale.edu/GIS" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium block"
                      >
                        Yale Library GIS Resources →
                      </a>
                      <a 
                        href="https://geospatial.yale.edu/education" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium block"
                      >
                        Yale Center for Geospatial Solutions →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Open Source Alternatives</h3>
                <p className="text-blue-800 mb-4">
                  For those interested in open source geospatial analysis tools, consider these alternatives:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-900 mb-2">Terra Package in R</h4>
                    <p className="text-gray-700 text-sm mb-2">Comprehensive spatial data analysis in R environment</p>
                    <a 
                      href="https://rspatial.org/index.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Learn more →
                    </a>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-900 mb-2">QGIS</h4>
                    <p className="text-gray-700 text-sm mb-2">Free and open-source desktop GIS application</p>
                    <a 
                      href="https://docs.qgis.org/3.40/en/docs/training_manual/index.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Training Manual →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Resources Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Additional Resources
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Training Opportunities</h3>
                <p className="text-gray-700 mb-4">
                  Yale offers various training resources across campus to support professional development in different areas.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">LinkedIn Learning</h4>
                  <p className="text-gray-700 mb-3">
                    Free access to thousands of courses on business, technology, and creative skills. 
                    Yale provides free access to many of the resources on LinkedIn Learning, including courses on:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                    <li>Analyzing geospatial data using ArcGIS</li>
                    <li>Processing big data using Apache Spark</li>
                    <li>Business and leadership skills</li>
                    <li>Creative and design tools</li>
                  </ul>
                  <a 
                    href="https://library.yale.edu/eresources/access/access-linkedin-learning" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Access LinkedIn Learning →
                  </a>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 text-sm">
                    <strong>Coming Soon:</strong> More detailed information about specific training offerings across campus.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Education Networks</h3>
                <p className="text-gray-700 mb-3">
                  Access to broader educational resources and networks beyond Yale's campus offerings.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 text-sm">
                    <strong>Coming Soon:</strong> Site references and links to global education networks and resources.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Explore Related Topics
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
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

export default ProDev2;
