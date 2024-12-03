import { init } from '@emailjs/browser';

const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
};

// Initialize EmailJS
init(emailConfig.publicKey);

export default emailConfig;