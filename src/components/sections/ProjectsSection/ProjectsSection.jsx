import React, { useState } from 'react';
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

  const clearForm = () => {
    setSearchQuery('');
    setActiveTags([]);
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
        Projects
      </h2>
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Request Help on a Project
        </button>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="project-search"
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-800 bg-white text-black px-4 py-2 rounded-lg placeholder-gray-600"
          />
          <button
            onClick={clearForm}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map(column => (
          <div
            key={column.id}
            className="rounded-lg p-6 bg-gray-50 flex flex-col border-2"
          >
            <h3 className="font-semibold text-lg mb-6 text-gray-800 border-b pb-3">
              {column.title}
            </h3>
            <div className="space-y-6 overflow-y-auto max-h-[100vh]">
              {filterProjects(column.projects).map(project => (
                <ProjectCard key={project.id} project={project} status={column.title.toLowerCase()} toggleTag={toggleTag} activeTags={activeTags} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {isFormOpen && <ProjectForm onClose={() => setIsFormOpen(false)} />}
    </div>
  );
}; 