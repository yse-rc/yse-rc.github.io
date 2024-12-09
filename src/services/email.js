import emailjs from '@emailjs/browser';
import emailConfig from '../config/emailjs';

export const sendEmail = async (templateParams) => {
  try {
    console.log('Sending email with params:', templateParams);
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams
    );
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Email send failed:', error);
    throw error;
  }
};