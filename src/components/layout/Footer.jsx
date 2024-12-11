import { useState } from 'react';
import githubIcon from '/src/assets/images/gh.png';
import yseIcon from '/src/assets/images/yse.png';

export const Footer = () => {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isYseHovered, setIsYseHovered] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-between items-center p-4">
      <div className="flex gap-4">
        <a
          href="https://github.com/yse-rc/yse-rc.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-500 ease-in-out touch-manipulation"
          onMouseEnter={() => setIsGithubHovered(true)}
          onMouseLeave={() => setIsGithubHovered(false)}
          onClick={() => setIsGithubHovered(!isGithubHovered)}
          style={{
            transform: isGithubHovered ? 
              'translateY(-20px) scale(1.2) rotate(360deg)' : 
              'translateY(0) scale(1) rotate(0deg)'
          }}
        >
          <img src={githubIcon} alt="GitHub" className="w-10 h-10 md:w-8 md:h-8" />
        </a>
        <a
          href="https://environment.yale.edu/research"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-500 ease-in-out"
          onMouseEnter={() => setIsYseHovered(true)}
          onMouseLeave={() => setIsYseHovered(false)}
          style={{
            transform: isYseHovered ? 
              'translateY(-20px) scale(1.2) rotate(360deg)' : 
              'translateY(0) scale(1) rotate(0deg)'
          }}
        >
          <img src={yseIcon} alt="YSE Research" className="w-8 h-8" />
        </a>
      </div>
      <div className="text-gray-600 text-sm">
        <a href="https://www.yale.edu" target="_blank" rel="noopener noreferrer" className="hover:underline">
          © 2024 Yale University
        </a>
        . All rights reserved.
      </div>
    </div>
  );
}; 