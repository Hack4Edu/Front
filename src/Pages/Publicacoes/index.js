import React, { Fragment } from "react";
import "./style.css";
import Header from "../../Components/Header";

//Componentes
import InputPublicacoes from "../../Components/InputPublicacoes";
import ListPublicacoes from "../../Components/ListPublicacoes";

export default function Publicacoes() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <InputPublicacoes />
        <ListPublicacoes />
      </div>
    </Fragment>
  );
}
