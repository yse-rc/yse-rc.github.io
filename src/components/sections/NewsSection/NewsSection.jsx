import { newsItems } from '../../../data/news';

export const NewsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
        News
      </h2>
      <div className="overflow-y-auto pr-2 space-y-6 max-h-[80vh]">
        {newsItems.map(item => {
          if (item.type === 'video') {
            return (
              <div
                key={item.id}
                className="bg-gray-50 rounded-lg p-5 border border-gray-100"
              >
                {item.title && (
                   <h3 className="font-semibold text-lg text-gray-800 mb-3">
                     {item.title}
                   </h3>
                )}
                <div className="w-full">
                  {item.description && (
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}
                  <div className="w-full mb-4">
                    {item.src ? (
                      <div style={{
                        width: '80%',       
                        maxWidth: '640px',
                        margin: '0 auto'
                      }}>
                        <div style={{
                          position: 'relative',
                          paddingTop: '56.25%', // 16:9 Ratio
                          height: 0,
                          overflow: 'hidden'
                        }}>
                          <iframe
                            src={item.src}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%'
                            }}
                            frameBorder={item.frameBorder || 0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title={item.iframeTitle}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                  {item.link && (
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
                  )}
                </div>
                {item.date && (
                   <div className="w-full flex justify-end mt-2">
                     <span className="text-gray-500 text-sm">
                       {new Date(item.date).toLocaleDateString()}
                     </span>
                   </div>
                 )}
              </div>
            );
          } else {
            return (
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
            );
          }
        })}
      </div>
    </div>
  );
}; 