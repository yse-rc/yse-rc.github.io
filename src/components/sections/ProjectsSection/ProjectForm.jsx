import { useState, useEffect } from 'react';
import { sendEmail } from '../../../services/email.js';

export const ProjectForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      console.log('reCAPTCHA script loaded');
      setRecaptchaLoaded(true);
    };

    return () => {
      if (recaptchaLoaded && window.grecaptcha && window.grecaptcha.reset) {
        try {
          window.grecaptcha.reset();
        } catch (error) {
          console.error('Error resetting reCAPTCHA:', error);
        }
      }
      document.head.removeChild(script);
    };
  }, [recaptchaLoaded]);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
        setMessage('');
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!window.grecaptcha) {
        throw new Error('reCAPTCHA not loaded');
      }

      const recaptchaResponse = window.grecaptcha.getResponse();
      
      if (!recaptchaResponse) {
        setMessage('Please complete the reCAPTCHA');
        setShowMessage(true);
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        to_name: 'YSE-RC', // Adjust as needed
        from_name: formData.name,
        from_email: formData.email,
        message: formData.description,
        'g-recaptcha-response': recaptchaResponse
      };

      await sendEmail(templateParams);

      setMessage('Project submitted successfully!');
      setShowMessage(true);
      console.log('Form submitted, closing form');
      onClose();
    } catch (error) {
      console.error('Failed to send email:', error);
      setMessage('Failed to submit project. Please try again.');
      setShowMessage(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-4 text-black">Submit New Project</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 text-black"
              required
            />
          </div>
          <div 
            className="g-recaptcha" 
            data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          ></div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => {
                console.log('Cancel clicked, closing form');
                onClose();
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        {showMessage && (
          <div className="mt-4 text-center text-gray-800">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};