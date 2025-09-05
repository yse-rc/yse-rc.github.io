import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const AIToolsYale = () => {
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
                  <Link to="/knowledge/ai" className="hover:text-blue-600">
                    AI Resources
                  </Link>
                </li>
                <li>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </li>
                <li className="font-medium text-gray-900">AI Tools @ Yale</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              AI Tools @ Yale
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Official resources and guidance for using AI at Yale University
            </p>
          </div>

          {/* Yale AI Resources Section */}
          <section className="bg-white p-8 rounded shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Official Yale AI Resources
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Central AI Hub</h3>
                <p className="text-gray-700 mb-3">
                  The central landing page for AI at Yale provides comprehensive resources, tools, and guidance for the Yale community.
                  This portal serves as your starting point for all AI-related activities at Yale.
                </p>
                <a 
                  href="https://ai.yale.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visit ai.yale.edu →
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Computing (Bouchet Cluster)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Bouchet</strong> is Yale's dedicated AI/ML computing cluster, providing researchers with powerful 
                  GPU resources for machine learning, deep learning, and AI workloads. This high-performance cluster features 
                  state-of-the-art NVIDIA GPUs optimized for training and inference of large-scale AI models.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 text-sm">
                  <li>80 NVIDIA H200 GPUs from the AI Initiative</li>
                  <li>48 NVIDIA RTX 5000 ADA GPUs</li>
                  <li>High-speed interconnect for distributed training</li>
                </ul>
                <a 
                  href="https://docs.ycrc.yale.edu/clusters/bouchet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Explore Bouchet Documentation →
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Clarity Platform</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Clarity</strong> is Yale's flagship AI product, developed by Yale for the Yale community. 
                  It provides secure, university-supported AI capabilities tailored to academic and research needs.
                  Unlike external AI services, Clarity ensures your data remains within Yale's secure environment.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Secure data handling within Yale's infrastructure</li>
                  <li>Compliance with university data policies</li>
                  <li>Tailored for academic and research use cases</li>
                  <li>Direct support from Yale IT</li>
                </ul>
                <a 
                  href="https://ai.yale.edu/yales-ai-tools-and-resources/clarity-platform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn about Clarity →
                </a>
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
                to="/knowledge/ai/model-selection"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Model Selection
              </Link>
              <Link 
                to="/knowledge/ai/prompting"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Prompting Best Practices
              </Link>
              <Link 
                to="/knowledge/ai/safety-ethics"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                AI Safety & Ethics
              </Link>
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AIToolsYale;