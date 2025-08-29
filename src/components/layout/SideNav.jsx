import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  HomeIcon, 
  InformationCircleIcon, 
  BookOpenIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

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

    // Special observer for the Resources section with more lenient settings
    const resourcesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'additional-resources') {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { 
        threshold: 0.1,  // Lower threshold
        rootMargin: '-100px 0px -70% 0px'  // Only need top 30% of viewport
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      if (section.id === 'additional-resources') {
        resourcesObserver.observe(section);
      } else {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
      resourcesObserver.disconnect();
    };
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
      icon: HomeIcon,
      path: '/',
      children: location.pathname === '/' ? [
        { id: 'news', label: 'News' },
        { id: 'events', label: 'Events' }
      ] : [],
      separator: true
    },
    { 
      id: 'info',
      label: 'Info',
      icon: InformationCircleIcon,
      path: '/info',
      children: location.pathname === '/info' ? [
        { id: 'mission', label: 'Mission' },
        { id: 'people', label: 'People' }
      ] : []
    },
    {
      id: 'govdata',
      label: 'Federal Data',
      icon: GlobeAltIcon,
      path: '/govdata',
      children: location.pathname.startsWith('/govdata') ? [
        { id: 'rescue-workflow', label: 'Workflow' },
        { id: 'data-rescue-tracker', label: 'Tracker' },
        { id: 'additional-resources', label: 'Resources' }
      ] : []
    },
    {
      id: 'knowledge',
      label: 'Knowledge Base',
      icon: BookOpenIcon,
      path: '/knowledge',
      children: []
    }
  ];

  return (
    <nav className="fixed left-6 top-32 w-56 bg-white rounded-lg shadow-sm p-4 border border-gray-200 z-40">
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <div key={section.id}>
            <li>
              <Link
                to={section.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`flex items-center gap-2 px-4 py-2 text-gray-500 font-semibold hover:text-gray-700 rounded-lg transition-colors ${
                  location.pathname === section.path ? 'text-blue-700 bg-blue-50' : ''
                }`}
              >
                <section.icon className="w-5 h-5" />
                {section.label}
              </Link>
              {section.children.length > 0 && (
                <ul className="pl-4 space-y-1 mt-1">
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
            {section.separator && (
              <div className="my-3 border-t border-gray-200"></div>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
} 