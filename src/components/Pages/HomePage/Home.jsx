import React from "react";
import "./Home.css";
import bioLogo from "../../../assets/bioblendlogo.webp";
import greenpulseLogo from "../../../assets/greenpulselogo.webp";
import nutriforgeLogo from "../../../assets/nutriforgelogo.webp";
import purehydraLogo from "../../../assets/purehydralogo.webp";
import vitalboostLogo from "../../../assets/vitalboostlogo.webp";
import Feature from "../../Feature/Feature";
import waterFoto from "../../../assets/water.webp";
import tdeeFoto from "../../../assets/tdee.webp";
import Feedbacks from "../../Feedbacks/Feedbacks";
import Calculadora from "../../Calculadora/Calculadora";
import Contact from "../../Contact/Contact";
import News from "../../News/News";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useLocation } from "react-router-dom";

const images = [tdeeFoto, waterFoto];
export default function Home() {
    const location = useLocation();
    console.log(location.state)
    const { username, genero } = location.state || { username: 'visitante', genero: 'masculino' };


    return (
        <>
        <Header />
            <div className="container">
                <div className="introduction">
                    <div className="introTitle">
                        <h1 className="archivo title">NutriCompass, seja {genero == "feminino" ? "bem-vinda" : "bem vindo"} {username || "Visitante"}!</h1>
                        <p className="content-text">
                            Navegue pelo mundo da nutrição com nosso guia
                            completo! Aqui, oferecemos dicas práticas, receitas
                            saudáveis e orientações personalizadas para ajudá-lo
                            a alcançar seus objetivos de bem-estar. Com conteúdo
                            atualizado e baseado em evidências, o NutriCompass é
                            o seu parceiro ideal para uma alimentação
                            equilibrada e consciente. Descubra como pequenas
                            mudanças podem fazer uma grande diferença na sua
                            saúde e bem-estar!
                        </p>
                    </div>
                    <div className="img-intro"></div>
                </div>
                <div className="patrocinios">
                    <h2 className="patrocinio-title center archivo">
                        Patrocinado por
                    </h2>
                    <div className="patrocinios-logo">
                        <img
                            src={bioLogo}
                            alt="LOGO"
                            className="patreon-logo"
                        />
                        <img
                            src={greenpulseLogo}
                            alt="LOGO"
                            className="patreon-logo"
                        />
                        <img
                            src={nutriforgeLogo}
                            alt="LOGO"
                            className="patreon-logo"
                        />
                        <img
                            src={purehydraLogo}
                            alt="LOGO"
                            className="patreon-logo"
                        />
                        <img
                            src={vitalboostLogo}
                            alt="LOGO"
                            className="patreon-logo"
                        />
                    </div>
                </div>
                <Feature fotos={images}></Feature>
            </div>
            <Feedbacks></Feedbacks>
            <div className="container">
                <div className="introTitle">
                    <h1 className="archivo title">Calculadora de TDEE</h1>
                    <p className="content-text">
                        Calcule seu TDEE e descubra a quantidade ideal de
                        calorias para atingir seu objetivo de saúde!
                    </p>
                </div>
                <Calculadora></Calculadora>
                <Contact></Contact>
                <div className="introTitle">
                    <h1 className="archivo title">Novidades</h1>
                    <p className="content-text">
                        Explore as últimas tendências e informações sobre nutrição em nossa seção de Novidades! Aqui, você encontra artigos atualizados com dicas práticas e pesquisas recentes para ajudar você a manter uma alimentação saudável e equilibrada. Fique por dentro!
                    </p>
                </div>
                <News></News>
            </div>
            <Footer></Footer>
        </>
    );
}
