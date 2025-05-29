import { useState, useEffect } from 'react';

export const useContactForm = () => {
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      const timer = setTimeout(() => {
        setFormStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      setFormStatus('sending');
      const response = await fetch('https://formspree.io/f/xdkkrldw', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return { formStatus, handleSubmit };
};