import { useState } from 'react';

export const NavDropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-black hover:text-gray-700 font-semibold text-sm bg-white"
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-1 py-2 w-48 bg-white rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                console.log(`Clicked ${option}`);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 