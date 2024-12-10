import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SideNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Reset active section when location changes
    setActiveSection('');
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  if (location.pathname !== '/') return null;

  const sections = [
    { id: 'projects', label: 'Projects' },
    { id: 'events', label: 'Events' },
    { id: 'news', label: 'News' }
  ];

  return (
    <nav className="fixed left-6 top-32 w-48 bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}; 