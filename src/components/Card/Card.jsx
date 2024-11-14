import React from 'react'
import "./Card.css"
function Card(props) {
  const alimento = props.content
  console.log(alimento)
  return (
    <div className='card'>
        <img className="alimento-img" src={alimento.image} alt="FOTO ALIMENTO" />
        <div className="title-card">
          <h3>{alimento.title}</h3>
        </div>
        <ul className="ingredients-container">
          {alimento.ingredientes.map((ing,index)=> <li key={index}>{ing}</li>)}
        </ul>
        <button className='card-btn'>Verificar</button>
    </div>
  )
}

export default Card