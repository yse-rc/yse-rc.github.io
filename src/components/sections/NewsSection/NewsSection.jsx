import { newsItems } from '../../../data/news';

export const NewsSection = () => {
  return (
    <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border-2 border-blue-400">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
        News
      </h2>
      <div className="overflow-y-auto max-h-[400px] pr-2space-y-6">
        {newsItems.map(item => (
          <div
            key={item.id}
            className="bg-gray-50 rounded-lg p-5 border border-gray-100"
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
            >
              {item.linkText}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <span className="ml-auto text-gray-500 text-sm">
               {new Date(item.date).toLocaleDateString()}
             </span>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}; 