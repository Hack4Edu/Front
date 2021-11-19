import React, { Fragment } from "react";
import "./style.css";
import Header from "../../Components/Header";

export default function Upload() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div>
          <h1>Turma: Tecnologia de sistemas para internet</h1>
        </div>
        <div>
          <h2>Repositório de videos</h2>
        </div>
        <div>
          <div>
            <h4>
              Disciplina: Administração de Servidores
            </h4>
            <h5>Tradutora: Daiane</h5>
          </div>
        </div>

        <div>
          <iframe
           width="560" height="315"
            src="https://www.youtube.com/embed/WC_j3LeIVko"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="560" height="315"
            src="https://www.youtube.com/embed/H-1zwazpt58"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            width="560" height="315"
            src="https://www.youtube.com/embed/PXCEjl4GX88"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            width="560" height="315"
            src="https://www.youtube.com/embed/P0XPZULbVt0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="560" height="315"
            src="https://www.youtube.com/embed/mBeLLxSUW9k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
}
