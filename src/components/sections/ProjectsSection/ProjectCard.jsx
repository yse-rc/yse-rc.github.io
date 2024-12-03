import React, { useState, useEffect } from 'react';
import { MailIcon } from '../../shared/icons/MailIcon';
import { sendEmail } from '../../../services/email';

export const ProjectCard = ({ project }) => {
  const [showForm, setShowForm] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (showForm) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
        window.grecaptcha?.reset();
      };
    }
  }, [showForm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const recaptchaResponse = window.grecaptcha?.getResponse();
      
      if (!recaptchaResponse) {
        setMessage('Please complete the reCAPTCHA');
        setShowMessage(true);
        setIsSubmitting(false);
        return;
      }

      await sendEmail({
        to_name: project.ownerName || 'Project Owner',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        project_title: project.title,
        'g-recaptcha-response': recaptchaResponse
      });

      setFormData({ name: '', email: '', message: '' });
      setShowForm(false);
      setMessage('Thanks for your interest! We will contact you soon.');
      setShowMessage(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      setMessage('Failed to send email. Please try again later.');
      setShowMessage(true);
    } finally {
      setIsSubmitting(false);
      window.grecaptcha?.reset();
    }
  };

  const handleMessageClose = (e) => {
    e.stopPropagation();
    setShowMessage(false);
    setMessage('');
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

      {showMessage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleMessageClose}
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <p className="text-gray-800 mb-4">{message}</p>
            <button
              onClick={handleMessageClose}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {showForm ? (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            placeholder="Why are you interested in this project?"
            name="message"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={3}
          />
          
          <div 
            className="g-recaptcha" 
            data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          ></div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Interest'}
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