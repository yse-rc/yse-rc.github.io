import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export const SideNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveSection('');
  }, [location.pathname]);

  useEffect(() => {
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

  const sections = [
    { 
      id: 'home',
      label: 'Home',
      path: '/',
      children: location.pathname === '/' ? [
        { id: 'news', label: 'News' },
        { id: 'projects', label: 'Projects' },
        { id: 'events', label: 'Events' }
      ] : []
    },
    { 
      id: 'info',
      label: 'Info',
      path: '/info',
      children: location.pathname === '/info' ? [
        { id: 'mission', label: 'Mission' },
        { id: 'about', label: 'About Me' }
      ] : []
    },
    {
      id: 'govdata',
      label: 'Federal Data',
      path: '/govdata',
      children: location.pathname.startsWith('/govdata') ? [
        { id: 'rescue-workflow', label: 'Workflow' },
        { id: 'data-rescue-tracker', label: 'Tracker' },
        { id: 'additional-resources', label: 'Resources' }
      ] : []
    }
  ];

  return (
    <nav className="fixed left-6 top-32 w-48 bg-white rounded-lg shadow-sm p-4 border border-gray-200 z-40">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={section.path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`block px-4 py-2 text-gray-500 font-semibold hover:text-gray-700 ${
                location.pathname === section.path ? 'text-blue-700' : ''
              }`}
            >
              {section.label}
            </Link>
            {section.children.length > 0 && (
              <ul className="pl-4 space-y-1">
                {section.children.map((child) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      onClick={(e) => handleClick(e, child.id)}
                      className={`block px-4 py-2 rounded-lg transition-colors ${
                        activeSection === child.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
} 