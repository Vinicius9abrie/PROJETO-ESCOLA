import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ onClose }) {
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState(null);

  const calculateWaterIntake = () => {
    const intake = weight * 35; 
    setWaterIntake(intake);
  };

  return (
    <div className="modal-container" id="modal-container">
      <div className="modal-content" id="modal-content">
        <div className="modal-header" id="modal-header">
          <h1 id="modal-title">Cálculo de Água</h1>
          <button className="close-btn" id="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="modal-body" id="modal-body">
          <p id="modal-description">
            Para calcular a quantidade de água que você deve beber por dia, insira seu peso (em kg) abaixo:
          </p>
          <input 
            type="number" 
            placeholder="Peso em kg" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            className="weight-input" 
            id="weight-input" 
          />
          {waterIntake && (
            <p id="water-intake-message">Você deve beber aproximadamente {waterIntake} ml de água por dia.</p>
          )}
        </div>
        <div className="modal-footer" id="modal-footer">
          <button onClick={calculateWaterIntake} className="calculate-btn" id="calculate-btn">Calcular</button>
        </div>
      </div>
    </div>
  );
}