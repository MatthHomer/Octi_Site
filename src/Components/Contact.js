import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Alguma pergunta?</h1>
      <h1 className="primary-heading">Deixe-nos ajudar</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="email@email.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
