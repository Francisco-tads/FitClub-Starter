import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.address.trim()) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const message = `Olá! Gostaria de me inscrever no FitClub.\n\nNome: ${formData.name}\nEndereço: ${formData.address}`;
    const whatsappUrl = `https://wa.me/5511991298838?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
    setFormData({ name: '', address: '' });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-form-overlay" onClick={handleOverlayClick}>
      <div className="contact-form">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Digite seu endereço completo"
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn-submit">
              Enviar para WhatsApp
            </button>
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;