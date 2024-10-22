import React, { useState } from 'react';
import Button from '../Button/Button';
import { features } from '/src/data/features.json';
import './Feature.css';
import Modal from '../ModalWater/Modal';

export default function Feature(props) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
  const fotos = props.fotos;

  const openModal = () => {
    console.log("Modal aberto!");
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    console.log("Modal fechado!");
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div className="wrapper">
      {features.map((feature, index) => {
        const direction = feature.localFoto;

        return (
          <div className={"feature feature-" + direction} key={index}>
            <div className="feature-content">
              <h2 className='feature-title archivo'>{feature.title}</h2>
              <p className='feature-text'>{feature.text}</p>
              <div className="btn-holder">
                <Button 
                  variant="primary" 
                  onClick={feature.btnText === "Descubra!" ? openModal : undefined} // Abre o modal se o botão for "Descubra!"
                >
                  <a href={feature.redirect || ""}>{feature.btnText}</a>
                </Button>
              </div>
            </div>
            <img className="feature-img" src={fotos[index]} alt={feature.title} />
          </div>
        );
      })}
      {isModalOpen && <Modal onClose={closeModal} />} {/* Renderiza o modal se isModalOpen for true */}
    </div>
  );
}