import { useState } from 'react';
import externalLinkIcon from '/src/assets/images/external-link.png';

export const NavDropdown = ({ title, options, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 text-black hover:text-gray-700 active:text-gray-900 font-semibold text-lg bg-gray-50 rounded-lg border border-transparent hover:border-blue-700 active:border-black ${className} flex items-center gap-2`}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-1 py-2 min-w-full bg-gray-50 rounded-lg shadow-lg z-10">
          {options.map((option, index) => {
            const isObjectOption = typeof option === 'object';
            const label = isObjectOption ? option.label : option;
            const href = isObjectOption ? option.href : `/${option.toLowerCase()}`;
            const isExternal = isObjectOption ? option.external : false;

            return (
              <a
                key={index}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-black hover:underline active:text-gray-900 font-semibold text-lg bg-gray-50 whitespace-nowrap"
                onClick={() => setIsOpen(false)}
                style={{ width: '350px' }}
              >
                <span className="flex-1 pr-2">{label}</span>
                {isExternal && (
                  <img 
                    src={externalLinkIcon} 
                    alt="External link" 
                    className="w-4 h-4 flex-shrink-0 mt-1"
                  />
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}; 