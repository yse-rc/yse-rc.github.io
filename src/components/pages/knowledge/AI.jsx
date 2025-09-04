import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const AI = () => {
  const aiTopics = [
    {
      title: "AI Tools @ Yale",
      path: "/knowledge/ai/ai-tools-yale",
      description: "Yale's official AI resources, guidance, and the Clarity platform"
    },
    {
      title: "Model Selection",
      path: "/knowledge/ai/model-selection",
      description: "Choosing the right AI model and tools for your specific use case"
    },
    {
      title: "AI Taxonomy",
      path: "/knowledge/ai/ai-taxonomy",
      description: "Understanding the hierarchy and types of artificial intelligence"
    },
    {
      title: "Prompting Best Practices",
      path: "/knowledge/ai/prompting",
      description: "Effective techniques for communicating with AI models"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto w-full max-w-6xl">
          
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
                <li className="font-medium text-gray-900">AI Resources</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              AI Resources
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Comprehensive guides and tools for using AI at Yale
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {aiTopics.map((topic, index) => (
              <Link
                key={index}
                to={topic.path}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all hover:scale-[1.02] border-l-4 border-purple-500"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-purple-600">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {topic.description}
                    </p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-purple-500 mt-1 ml-3 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Quick Links
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <a 
                href="https://provost.yale.edu/news/advancing-yales-leadership-artificial-intelligence-support-faculty-students-and-staff" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Yale Provost AI Initiative
              </a>
              <a 
                href="https://ai.yale.edu/yales-ai-tools-and-resources/clarity-platform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Clarity Platform
              </a>
              <a 
                href="https://ai.yale.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Yale AI Portal
              </a>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AI;