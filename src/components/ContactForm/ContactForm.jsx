/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./contactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rcgysxo",
        "template_rd8x9w2",
        formData,
        "QNXHeYKYn-ezFuwra"
      )
      .then(
        (result) => {
          setStatus("Message envoyé avec succès !");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          setStatus("Erreur lors de l'envoi. Veuillez réessayer.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nom"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Téléphone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Sujet"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Envoyer</button>
      {status && <p>{status}</p>}
    </form>
  );
}
