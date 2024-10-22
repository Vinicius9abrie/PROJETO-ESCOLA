import React, { useState } from "react";
import InputGroup from "./InputGroup/InputGroup";
import "./Calculadora.css";

export default function Calculadora() {
  const niveis = [
    "Sedentário",
    "Pouco ativo",
    "Moderadamente ativo",
    "Muito ativo",
    "Extremamente ativo",
  ];
  const generos = ["Masculino", "Feminino"];
  const [peso, setPeso] = useState(0);
  const [idade, setIdade] = useState(0);
  const [altura, setAltura] = useState(0);
  const [genero, setGenero] = useState("Masculino");
  const [nivel, setNivel] = useState("Sedentário");
  const [tdee, setTdee] = useState(0);

  const gerarTDEE = () => {
    let tdeeCalculado;

    if (genero === "Masculino") {
      tdeeCalculado = 66 + 13.7 * peso + 5 * altura - 6.8 * idade;
    } else {
      tdeeCalculado = 655 + 9.6 * peso + 1.8 * altura - 4.7 * idade;
    }

    switch (nivel) {
      case "Sedentário":
        tdeeCalculado *= 1.2;
        break;
      case "Pouco ativo":
        tdeeCalculado *= 1.375;
        break;
      case "Moderadamente ativo":
        tdeeCalculado *= 1.55;
        break;
      case "Muito ativo":
        tdeeCalculado *= 1.725;
        break;
      case "Extremamente ativo":
        tdeeCalculado *= 1.9;
        break;
      default:
        break;
    }

    setTdee(tdeeCalculado);
  };

  return (
    <div className="wrapper-calculadora" id="calculadora">
      <div className="info-calc">
        <div className="info">
          <InputGroup
            id="peso"
            type="number"
            label="Peso (em Kg):"
            placeholder="Coloque seu peso"
            onChange={setPeso}
          />
          <InputGroup
            id="idade"
            type="number"
            label="Idade:"
            placeholder="Coloque sua idade"
            onChange={setIdade}
          />
          <InputGroup
            id="altura"
            type="number"
            label="Altura (em cm):"
            placeholder="Coloque sua altura"
            onChange={setAltura}
          />
          <InputGroup
            id="genero"
            type="dropdown"
            label="Gênero:"
            placeholder="Gênero"
            onChange={setGenero}
            values={generos}
          />
          <InputGroup
            id="nivelAtividade"
            type="dropdown"
            label="Nível de atividade:"
            placeholder="Nível"
            onChange={setNivel}
            values={niveis}
          />
        </div>
        <div className="result">
          <div className="result-title">
            <h2>Seu TDEE é:</h2>
            <h2>{tdee.toFixed(2)}</h2>
          </div>
        </div>
      </div>
      <button className="calcBtn" onClick={gerarTDEE}>
        Calcular
      </button>
    </div>
  );
}
