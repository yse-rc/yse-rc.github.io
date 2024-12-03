import emailjs from '@emailjs/browser';
import emailConfig from '../config/emailjs';

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams
    );
    return response;
  } catch (error) {
    console.error('Email send failed:', error);
    throw error;
  }
};