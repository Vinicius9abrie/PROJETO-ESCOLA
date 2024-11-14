import React from "react";
import FooterSection from "./FooterSections/FooterSection";
import "./Footer.css"
import logo from "../../assets/logo.webp"
export default function Footer(){


  return(
    <footer>
    <div className="logoHolderFooter">
      <img src={logo} ></img>
    </div>
    <div className="sections">
      <FooterSection title="Produto" pages={["Funcionalidades","Calculadora"]}></FooterSection>
      <FooterSection title="Recursos" pages={["Blogs","Dicas Nutricionais","Artigos"]}></FooterSection>
      <FooterSection title="Companhia" pages={["Sobre nós","Contato"]}></FooterSection>
      <div className="contactFooter">
        <h1 className="titleFooter archivo">
           Receba e-mails sobre nutrição mensalmente!
        </h1>
        <p className="descFooter">Para anúncios de produtos e novidades!</p>
        <div className="inputFooter-container">
        <input id="footerInput" type="email" placeholder="Coloque seu email aqui!"></input>
          <button id='button' className="btnFooter">Inscrever-se!</button>
        </div>
      </div>
    </div>
    </footer>
  )
}