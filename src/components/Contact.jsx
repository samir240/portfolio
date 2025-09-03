import React, { useState } from 'react';
import './Contact.css';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: Timestamp.now()
      });
      alert('Message sent successfully! Thank you for reaching out.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
      alert("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Let's Work Together</h2>
        <p className="contact-intro">
          Have an idea or project in mind? Let's bring it to life together. 
          Get in touch today and let's start building your solution.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <div className="cv-section" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h3>My Resume</h3>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          Download (PDF)
        </a>
      </div>
    </section>
  );
}

export default Contact;
