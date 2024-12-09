import React, { useState, useEffect } from 'react';
import { MailIcon } from '../../shared/icons/MailIcon';
import { sendEmail } from '../../../services/email';

export const ProjectCard = ({ project, status, toggleTag, activeTags }) => {
  const [showForm, setShowForm] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
        setMessage('');
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

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

      sessionStorage.setItem('formMessage', 'Thanks for your interest! We will contact you soon.');
      window.location.reload();

    } catch (error) {
      console.error('Failed to send email:', error);
      sessionStorage.setItem('formMessage', 'Failed to send email. Please try again later.');
      window.location.reload();
    }
  };

  useEffect(() => {
    const storedMessage = sessionStorage.getItem('formMessage');
    if (storedMessage) {
      setMessage(storedMessage);
      setShowMessage(true);
      sessionStorage.removeItem('formMessage'); // Clear the stored message
    }
  }, []);

  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm border-2 ${borderColor}`}>
      <h4 className="font-semibold text-md mb-2 text-black">{project.title}</h4>
      <p className="text-gray-600">{project.description}</p>
      <p className="text-gray-500 text-sm mb-2">{new Date(project.startDate).toLocaleDateString()}</p>
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