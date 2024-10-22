import React from "react";
import Button from "../Button/Button";
import contatoImg from "../../assets/contact.webp";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-text">
        <h1>Contate-nos!</h1>
        <p>
          Tem dúvidas ou sugestões? Adoramos ouvir você! Preencha o formulário
          abaixo ou envie um e-mail para [terceiromatematica@nutricompass.com].
          Estamos aqui para ajudar!
        </p>
        <div className="btn-container">
        <Button className="btn" variant="default">Entrar em contato</Button>

        </div>
      </div>
      <div className="contact-image">
        <img src={contatoImg} loading="lazy" alt="mulher falando no telefone"></img>
      </div>
    </div>
  );
}
