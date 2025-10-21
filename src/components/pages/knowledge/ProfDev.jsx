import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const ProfDev = () => {
  const profDevTopics = [
    {
      title: "Trainings",
      path: "/knowledge/prof-dev/trainings",
      description: "Workshops, courses, and training opportunities for researchers"
    },
    {
      title: "Parallel Programming in R",
      path: "/knowledge/prof-dev/parallel-programming",
      description: "Techniques for parallel and distributed computing using R"
    },
    {
      title: "Professional Development Resources",
      path: "/knowledge/prof-dev/professional-development2",
      description: "Resources and guides for advancing your research skills"
    }
  ];

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
              Professional Development
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Training opportunities and resources for advancing your research skills
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {profDevTopics.map((topic, index) => (
              <Link
                key={index}
                to={topic.path}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all hover:scale-[1.02] border-l-4 border-green-500"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-green-600">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {topic.description}
                    </p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-green-500 mt-1 ml-3 flex-shrink-0" />
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
                href="https://poorvucenter.yale.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Poorvu Center for Teaching
              </a>
              <a
                href="https://gsas.yale.edu/professional-development"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                GSAS Professional Development
              </a>
              <a
                href="https://your.yale.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Yale Learning & Development
              </a>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProfDev;