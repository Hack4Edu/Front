import React, { Fragment } from "react";
import "./style.css"
import Header from "../../Components/Header";
import Logo from "../../Images/logo.PNG";

export default function Home() {
  return (
    <Fragment>
      <div>
        <Header />
        <div className="container">
          <div>          
          </div>          
          <img src={Logo} className="imgLogo"/>
          <h6 className="textoAPP">
            Aplicação inteligente para auxiliar na interpretação de 
            conteúdos e no aprendizado de alunos surdos
          </h6>
        </div>
      </div>
    </Fragment>
  );
}
