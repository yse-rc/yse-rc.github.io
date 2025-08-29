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
                    <div className="bg-purple-100 rounded-lg p-4 mb-4">
                      <div className="text-3xl mb-2 text-center">🤖</div>
                      <h3 className="text-lg font-semibold text-gray-800 text-center">AI Resources</h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a 
                          href="/knowledge/ai-tools-yale" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-purple-500 mr-2">→</span>
                          <span>AI Tools @ Yale</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Data Engineering and Management */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-blue-100 rounded-lg p-4 mb-4">
                      <div className="text-3xl mb-2 text-center">💾</div>
                      <h3 className="text-lg font-semibold text-gray-800 text-center">Data Engineering and Management</h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a 
                          href="/knowledge/data-storage" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-blue-500 mr-2">→</span>
                          <span>Data Storage</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Professional Development */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-green-100 rounded-lg p-4 mb-4">
                      <div className="text-3xl mb-2 text-center">📚</div>
                      <h3 className="text-lg font-semibold text-gray-800 text-center">Professional Development</h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a 
                          href="/knowledge/trainings" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-green-500 mr-2">→</span>
                          <span>Trainings</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Yale Computing Resources */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-orange-100 rounded-lg p-4 mb-4">
                      <div className="text-3xl mb-2 text-center">🖥️</div>
                      <h3 className="text-lg font-semibold text-gray-800 text-center">Yale Computing Resources</h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a 
                          href="/knowledge/ycrc-clusters" 
                          className="flex items-start text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <span className="text-orange-500 mr-2">→</span>
                          <span>YCRC Clusters</span>
                        </a>
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