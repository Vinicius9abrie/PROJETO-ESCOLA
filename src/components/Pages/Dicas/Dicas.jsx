import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import img from "../../../assets/headerDicas.jpg"
import { useLocation} from 'react-router-dom';
import '../Dicas/dicas.css'
import Card from '../../Card/Card';
import {alimentos} from "../../../data/alimentos.json"
function Dicas() {
  const location = useLocation();
  const state = location.state;
  const [user, setuser] = useState("Visitante");

  useEffect(()=> {
    if(state){  
      setuser(state.username);
      console.log(state)
      console.log(user);
    }
  },[state,user])



  return (
    <>
    <Header user={user}></Header>
    <div className="container-Dicas">
    <div className='imgDicas-container'>
    <img className="imgdicas" width={1440} height={600} src={img}/>
    </div>
    <h1>Alimentos recomendados para você <span className='nameDicas'>{user}!</span></h1>
    <div className="cards-container">
    {
      alimentos.map((alimento,index)=> <Card key={index} content={alimento}></Card>)
    }
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Dicas