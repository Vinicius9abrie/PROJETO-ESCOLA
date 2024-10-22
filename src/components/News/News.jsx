import React from "react";
import { news } from "/src/data/news.json";
import "./News.css";
import Button from "../Button/Button";
export default function News() {
  return (
    <>
        <div className="wrapper-news">
      <div className="news-section">
        {news.map((noticia, index) => {
          return (
            <div className="news" key={index}>
              <div className="news-foto">
                <img src={noticia.foto} loading="lazy" alt="foto da noticia"></img>
              </div>
              <div className="news-content">
                <div className="news-category">{noticia.categoria}</div>
                <div className="news-title archivo">{noticia.titulo}</div>
                <div className="news-description">
                  <p className="date">{noticia.data}</p>
                  <p className="readTime">Leitura de {noticia.timespan}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-section">
      <Button variant="primary disabled">Ver Mais Artigos</Button>
      </div>
    </div>
      </>

  );
}
