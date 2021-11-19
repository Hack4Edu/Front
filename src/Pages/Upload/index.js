import React, { Fragment } from "react";
import "./style.css";
import Header from "../../Components/Header";

export default function Upload() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div>
          <h1>Repositório de videos</h1>
        </div>
        <div>
          <div>
            <h1>
              Aprenda LIBRAS com eficiência e rapidez (vocabulários básicos)
            </h1>
          </div>
        </div>

        <div>
          <iframe
            width="320"
            height="240"
            src="https://www.youtube.com/embed/WC_j3LeIVko"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="320"
            height="240"
            src="https://www.youtube.com/embed/H-1zwazpt58"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            width="320"
            height="240"
            src="https://www.youtube.com/embed/PXCEjl4GX88"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            width="320"
            height="240"
            src="https://www.youtube.com/embed/P0XPZULbVt0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="320"
            height="240"
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
