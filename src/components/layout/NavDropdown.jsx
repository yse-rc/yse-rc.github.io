import { useState } from 'react';

export const NavDropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-black hover:text-gray-700 font-semibold text-sm bg-white whitespace-nowrap"
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-1 py-2 min-w-full bg-white rounded-lg shadow-lg z-10">
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
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white whitespace-nowrap"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}; 