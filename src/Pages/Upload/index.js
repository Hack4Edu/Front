import React, { Fragment } from "react";
import Header from "../../Components/Header";

export default function Upload() {
  return (
    <Fragment>
      <Header />
      <div>
        <h1>Repositório de videos</h1>
      </div>
    <div>
      <div>
        <h1>Aprenda LIBRAS com eficiência e rapidez (vocabulários básicos)</h1>
      </div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mBeLLxSUW9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    </Fragment>
  );
}
