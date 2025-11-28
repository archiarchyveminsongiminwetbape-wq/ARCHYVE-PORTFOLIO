import React, { useState } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const emailTo: string = 'archiarchyveminsongiminwetbape@gmail.com';
    const subject: string = encodeURIComponent('ARCHYVE PORTFOLIO');
    const body: string = encodeURIComponent(
      `Nom: ${formData.name}\n` + 
      `Email: ${formData.email}\n\n` + 
      `Message:\n${formData.message}`
    );
    
    const mailtoLink: string = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <p className="contact-description">
          N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
        </p>
        
        <div className="contact-info">
          <a href="https://wa.me/+237657029080" className="whatsapp-link" title="Contactez-moi sur WhatsApp">
            📱 WhatsApp : +237 657029080
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Votre nom complet"
              aria-describedby="name-error"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Adresse email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="votre.email@exemple.com"
              aria-describedby="email-error"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="form-textarea"
              placeholder="Décrivez votre projet ou votre demande..."
              aria-describedby="message-error"
            />
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-button"
              disabled={!formData.name || !formData.email || !formData.message}
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
