import React, { useEffect, useState } from "react";
import "./Feedbacks.css";
import feedbackLogo from "../../assets/logoFeedback.webp";
import { feedbacks } from "./FeedbacksData/FeedbacksData";
export default function Feedbacks() {
    const [index, setIndex] = useState(0);
    const [backColor, setBackColor] = useState("#f48fb1");
    const add = (index) => {
        if (index >= feedbacks.length - 1) {
            return 0;
        } else {
            return index + 1;
        }
    };
    const minus = (index) => {
        if (index <= 0) {
            return feedbacks.length - 1;
        } else {
            return index - 1;
        }
    };

    const arrayDeCores = [
        "#fbbf24",
        "#f48fb1",
        "#00a8ff",
        "#00c853",
        "#ff1744",
        "#4338ca",
    ];
    const changeColor = () => {
        const randomColor =
            arrayDeCores[Math.floor(Math.random() * arrayDeCores.length)];
        setBackColor(randomColor);
    };

    useEffect(() => {
        document.querySelector(".person-image").style.backgroundColor =
            backColor;
    }, [index]);
    return (
        <section className="feedbacks-section">
            <div className="feedbacks">
                <div className="feedbacks-intro">
                    <img src={feedbackLogo} alt="LOGO" className="logo" />
                    <p className="feedbacks-title center">NutriCompass</p>
                </div>
                <div className="feedbacks-content">
                    <button
                        className="arrow-left"
                        onClick={() => {
                            changeColor();
                            setIndex(minus(index));
                        }}
                    >{"<"}</button>
                    <div className="content">{feedbacks[index].avaliacao}</div>
                    <button
                        className="arrow-right"
                        onClick={() => {
                            changeColor();
                            setIndex(add(index));
                        }}
                    >{'>'}</button>
                </div>
                <div className="person-content">
                    <div className="person-image">
                        {feedbacks[index].nome.substring(0, 1)}
                    </div>
                    <div className="person-info">
                        <div className="person-name">
                            {feedbacks[index].nome}
                        </div>
                        <p>-</p>
                        <div className="person-profissao">
                            {feedbacks[index].profissao}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
