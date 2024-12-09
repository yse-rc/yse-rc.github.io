import { useState } from 'react';
import { tasks } from '../../../data/tasks';
import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';

export const ProjectsSection = () => {
  // Sort projects within each column by start date
  const sortedTasks = tasks.map(column => ({
    ...column,
    projects: [...column.projects].sort((a, b) => 
      new Date(b.startDate) - new Date(a.startDate) // newest first
    )
  }));

  const [columns] = useState(sortedTasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTags, setActiveTags] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const toggleTag = (tag) => {
    setActiveTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const filterProjects = (projects) => {
    return projects.filter(project => {
      const matchesTitle = project.title && project.title.toLowerCase().includes(searchQuery);
      const matchesDescription = project.description && project.description.toLowerCase().includes(searchQuery);
      const matchesTech = project.tech && project.tech.some(tech => tech.toLowerCase().includes(searchQuery));
      const matchesTags = activeTags.length === 0 || activeTags.some(tag => project.tech.includes(tag));
      
      return (matchesTitle || matchesDescription || matchesTech) && matchesTags;
    });
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
        Projects
      </h2>
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit New Project
        </button>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map(column => {
          return (
            <div
              key={column.id}
              className={`rounded-lg p-6 bg-gray-50 flex flex-col border-2`}
              style={{ fontFamily: '"Avenir Next", "Segoe UI", system-ui, sans-serif', height: '1000px' }}
            >
              <h3 className="font-semibold text-lg mb-6 text-gray-800 border-b pb-3">
                {column.title}
              </h3>
              <div className="space-y-6 overflow-y-auto" style={{ maxHeight: '1000px' }}>
                {filterProjects(column.projects).map(project => (
                  <ProjectCard key={project.id} project={project} status={column.title.toLowerCase()} toggleTag={toggleTag} activeTags={activeTags} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {isFormOpen && <ProjectForm onClose={() => setIsFormOpen(false)} />}
    </div>
  );
}; 