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
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mwpdylor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Réinitialiser le message de succès après 5 secondes
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
    } finally {
      setIsLoading(false);
    }
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
          {submitted && (
            <div className="success-message">
              ✅ Merci ! Votre message a été envoyé avec succès. Je vous répondrai bientôt.
            </div>
          )}
          
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
              disabled={!formData.name || !formData.email || !formData.message || isLoading}
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
