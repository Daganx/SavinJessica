import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";

const fields = [
  { name: "name", type: "text", label: "Nom", placeholder: "Votre nom", required: true },
  { name: "email", type: "email", label: "Email", placeholder: "Votre adresse email", required: true },
  { name: "phone", type: "tel", label: "Téléphone", placeholder: "Votre numéro", required: false },
  { name: "subject", type: "text", label: "Sujet", placeholder: "L'objet de votre message", required: true },
  { name: "budget", type: "text", label: "Budget", placeholder: "Votre budget", required: true },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", budget: "", message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_rcgysxo", "template_rd8x9w2", formData, "QNXHeYKYn-ezFuwra")
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", phone: "", subject: "", budget: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <form className="contact-form-inner" onSubmit={handleSubmit}>

      {fields.map(({ name, type, label, placeholder, required }) => (
        <div className="form-field" key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            required={required}
          />
        </div>
      ))}

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Parlez-moi de votre projet…"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="form-submit">Envoyer</button>

      {status === "success" && (
        <p className="form-success">
          Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.
        </p>
      )}
      {status === "error" && (
        <p className="form-success" style={{ color: "#a05a4e" }}>
          Une erreur est survenue. Merci de réessayer ou de me contacter directement par email.
        </p>
      )}
    </form>
  );
}