import { useState } from 'react';
import { MailIcon } from '../shared/MailIcon';

export const ProjectCard = ({ project }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Interest shown in project:', project.id, formData);
    setFormData({ name: '', email: '', message: '' });
    setShowForm(false);
    alert('Thanks for your interest! We will contact you soon.');
  };

  return (
    <div className="bg-white rounded-lg p-5 border border-gray-200">
      <h4 className="font-semibold text-base text-gray-800 mb-3">
        {project.title}
      </h4>
      <p className="text-gray-600 text-sm mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(tech => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-500 mb-4">
        Started: {new Date(project.startDate).toLocaleDateString()}
      </div>
      {showForm ? (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Why are you interested in this project?"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={3}
          />
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Submit Interest
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="w-full mt-2 flex items-center justify-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
        >
          <MailIcon />
          <span>Express Interest</span>
        </button>
      )}
    </div>
  );
}; 