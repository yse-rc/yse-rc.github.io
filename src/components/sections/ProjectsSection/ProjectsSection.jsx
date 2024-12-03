import { useState } from 'react';
import { tasks } from '../../../data/tasks';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  // Sort projects within each column by start date
  const sortedTasks = tasks.map(column => ({
    ...column,
    projects: [...column.projects].sort((a, b) => 
      new Date(b.startDate) - new Date(a.startDate) // newest first
      // OR for oldest first:
      // new Date(a.startDate) - new Date(b.startDate)
    )
  }));

  const [columns] = useState(sortedTasks);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-gray-400">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map(column => (
          <div
            key={column.id}
            className={`rounded-lg shadow-sm p-6 border-t-4 ${column.borderColor} bg-gray-50 flex flex-col border border-gray-200`}
            style={{ fontFamily: '"Avenir Next", "Segoe UI", system-ui, sans-serif' }}
          >
            <h3 className="font-semibold text-lg mb-6 text-gray-800 border-b pb-3">
              {column.title}
            </h3>
            <div className="space-y-6 overflow-y-auto max-h-[400px] pr-2">
              {column.projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 