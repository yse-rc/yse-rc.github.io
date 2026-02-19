import { Link } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import PageTransition from '../../layout/PageTransition';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const YaleComputing = () => {
  const categories = [
    {
      title: "YCRC Clusters",
      path: "/knowledge/yale-computing/ycrc-clusters",
      description: "High-performance computing clusters for research",
      color: "orange",
      icon: "🖥️",
      subPages: [
        { title: "Introduction to HPC", path: "/knowledge/yale-computing/intro-to-hpc" },
        { title: "Intermediate HPC", path: "/knowledge/yale-computing/intermediate-hpc" },
        { title: "Advanced HPC", path: "/knowledge/yale-computing/advanced-hpc" }
      ]
    },
    {
      title: "Git & SSH Setup",
      path: "/knowledge/yale-computing/git-ssh-setup",
      description: "Connect GitHub to your local machine or the cluster via SSH keys",
      color: "blue",
      icon: "🔑",
      subPages: []
    },
    {
      title: "Cloud Computing",
      path: "#",
      description: "Cloud platforms and services for research",
      color: "sky",
      icon: "☁️",
      comingSoon: true,
      subPages: []
    },
    {
      title: "Local Computing",
      path: "#",
      description: "Desktop and local computing resources",
      color: "green",
      icon: "💻",
      comingSoon: true,
      subPages: []
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
                <li className="font-medium text-gray-900">Yale Computing Resources</li>
              </ol>
            </nav>

            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
              Yale Computing Resources
            </h1>
            <p className="text-lg text-gray-600 text-center">
              High-performance computing resources and training for Yale researchers
            </p>
          </div>

          {/* Category Boxes */}
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-${category.color}-500`}
              >
                <Link to={category.path} className="block mb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className={`text-xl font-semibold text-gray-800 hover:text-${category.color}-600`}>
                          {category.title}
                          {category.comingSoon && (
                            <span className="ml-2 text-xs text-gray-400 font-normal">(Coming Soon)</span>
                          )}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                    <ChevronRightIcon className={`h-5 w-5 text-${category.color}-500 mt-1 ml-3 flex-shrink-0`} />
                  </div>
                </Link>

                {category.subPages.length > 0 && (
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <ul className="space-y-2">
                      {category.subPages.map((subPage, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subPage.path}
                            className={`flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline`}
                          >
                            <span className={`text-${category.color}-400 mr-2`}>→</span>
                            {subPage.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Quick Links
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <a
                href="https://research.computing.yale.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Yale Center for Research Computing
              </a>
              <a
                href="https://research.computing.yale.edu/support/hpc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                HPC Documentation
              </a>
              <a
                href="https://research.computing.yale.edu/support/getting-started"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span className="mr-2">→</span>
                Getting Started Guide
              </a>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default YaleComputing;