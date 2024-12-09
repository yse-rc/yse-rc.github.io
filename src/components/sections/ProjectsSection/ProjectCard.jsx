import React, { useState, useEffect } from 'react';

export const ProjectCard = ({ project, status, toggleTag, activeTags }) => {
  let borderColor;
  switch (status) {
    case 'open':
      borderColor = 'border-orange-500';
      break;
    case 'in progress':
      borderColor = 'border-yellow-500';
      break;
    case 'completed':
      borderColor = 'border-green-500';
      break;
    default:
      borderColor = 'border-gray-200';
  }

  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm border-2 ${borderColor}`}>
      <h4 className="font-semibold text-md mb-2 text-black">{project.title}</h4>
      <p className="text-gray-500 text-sm mb-2">{new Date(project.startDate).toLocaleDateString()}</p>
      <p className="text-gray-600">{project.description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tech.map(tag => (
          <span
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`cursor-pointer text-sm text-black rounded-full px-3 py-1 hover:bg-gray-300 ${
              activeTags.includes(tag) ? 'bg-blue-700 text-white' : 'bg-gray-200'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}; 