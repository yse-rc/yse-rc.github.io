import { Link } from 'react-router-dom';
import { Footer } from '../layout/Footer';
import PageTransition from '../layout/PageTransition';

export const KnowledgeBase = () => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto w-full">
          {/* Knowledge Base Section */}
          <section id="knowledge-base">
            <div className="p-6">
              <div className="bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-semibold mb-8 text-gray-800 border-b pb-3 text-center">
                  Knowledge Base
                </h2>
                <div className="overflow-y-auto max-h-[80vh] pr-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* AI Resources */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <Link to="/knowledge/ai" className="block">
                      <div className="bg-purple-100 rounded-lg p-4 mb-4 cursor-pointer hover:bg-purple-200 transition-colors">
                        <div className="text-3xl mb-2 text-center">🧠</div>
                        <h3 className="text-lg font-semibold text-gray-800 text-center">AI Resources</h3>
                      </div>
                    </Link>
                    <ul className="space-y-2">
                      <li>
                        <Link 
                          to="/knowledge/ai/ai-tools-yale" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-purple-500 mr-2">→</span>
                          <span>AI Tools @ Yale</span>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/knowledge/ai/ai-taxonomy" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-purple-500 mr-2">→</span>
                          <span>AI Taxonomy</span>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/knowledge/ai/model-selection" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-purple-500 mr-2">→</span>
                          <span>Model Selection</span>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/knowledge/ai/prompting" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-purple-500 mr-2">→</span>
                          <span>Prompting Best Practices</span>
                        </Link>
                      </li>
                      <li className="pt-2 border-t border-gray-200">
                        <Link 
                          to="/knowledge/ai" 
                          className="flex items-center text-purple-600 hover:text-purple-800 font-medium"
                        >
                          <span className="mr-2">View all AI Resources</span>
                          <span>→</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Data Engineering and Management */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <Link to="/knowledge/data" className="block">
                      <div className="bg-blue-100 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-200 transition-colors">
                        <div className="text-3xl mb-2 text-center">🗃️</div>
                        <h3 className="text-lg font-semibold text-gray-800 text-center">Data Engineering and Management</h3>
                      </div>
                    </Link>
                    <ul className="space-y-2">
                      <li>
                        <Link 
                          to="/knowledge/data/data-storage" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-blue-500 mr-2">→</span>
                          <span>Data Storage</span>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/knowledge/data/data-sources" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-blue-500 mr-2">→</span>
                          <span>Yale Data Sources</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Professional Development */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <Link to="/knowledge/prof-dev" className="block">
                      <div className="bg-green-100 rounded-lg p-4 mb-4 cursor-pointer hover:bg-green-200 transition-colors">
                        <div className="text-3xl mb-2 text-center">📚</div>
                        <h3 className="text-lg font-semibold text-gray-800 text-center">Professional Development</h3>
                      </div>
                    </Link>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/knowledge/prof-dev/trainings"
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-green-500 mr-2">→</span>
                          <span>Trainings</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/knowledge/prof-dev/parallel-programming"
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-green-500 mr-2">→</span>
                          <span>Parallel Programming in R</span>
                        </Link>
                      </li>
                                            <li>
                        <Link
                          to="/knowledge/prof-dev/reproducibility"
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-green-500 mr-2">→</span>
                          <span>Reproducibility</span>
                        </Link>
                      </li>
                      <li className="pt-2 border-t border-gray-200">
                        <Link
                          to="/knowledge/prof-dev"
                          className="flex items-center text-green-600 hover:text-green-800 font-medium"
                        >
                          <span className="mr-2">View all Professional Development</span>
                          <span>→</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Yale Computing Resources */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <Link to="/knowledge/yale-computing" className="block">
                      <div className="bg-orange-100 rounded-lg p-4 mb-4 cursor-pointer hover:bg-orange-200 transition-colors">
                        <div className="text-3xl mb-2 text-center">☁️</div>
                        <h3 className="text-lg font-semibold text-gray-800 text-center">Yale Computing Resources</h3>
                      </div>
                    </Link>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/knowledge/yale-computing/ycrc-clusters"
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-orange-500 mr-2">→</span>
                          <span>YCRC Clusters</span>
                        </Link>
                      </li>
                      <li>
                        <div className="flex items-start text-gray-400">
                          <span className="text-orange-300 mr-2">→</span>
                          <span>Cloud Computing <span className="text-xs">(Coming Soon)</span></span>
                        </div>
                      </li>
                      <li className="pt-2 border-t border-gray-200">
                        <Link
                          to="/knowledge/yale-computing"
                          className="flex items-center text-orange-600 hover:text-orange-800 font-medium"
                        >
                          <span className="mr-2">View all Yale Computing Resources</span>
                          <span>→</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};