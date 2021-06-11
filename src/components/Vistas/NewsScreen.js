import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const NewsScreen = () => {

  let history = useHistory();

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack("/");
    }
  };
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <div className="container p-0">
          <nav className=" nav navbar-expand-lg">
            <div className="col-lg-8-8 bg-light mx-7">
              <p>
                <h2 className="pb-3">Noticia Nueva:</h2>
              </p>
              <p className=" mb-5 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                viverra nibh quis ligula semper tempor. Nulla quis turpis quis
                diam sodales iaculis. Duis id luctus mi. Praesent sollicitudin
                pretium elit quis bibendum. Nullam ut nunc ipsum. Pellentesque non
                pharetra est. Quisque eu eros vel lorem tristique sodales. Aenean
                velit sapien, tempus et quam in, ultrices sollicitudin tellus.
                Vivamus vehicula porttitor lacus suscipit fringilla. Maecenas
                lacinia orci ac felis dictum mattis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent viverra nibh quis ligula
                semper tempor. Nulla quis turpis quis diam sodales iaculis. Duis
                id luctus mi. Praesent sollicitudin pretium elit quis bibendum.
                Nullam ut nunc ipsum. Pellentesque non pharetra est. Quisque eu
                eros vel lorem tristique sodales. Aenean velit sapien, tempus et
                quam in, ultrices sollicitudin tellus. Vivamus vehicula porttitor
                lacus suscipit fringilla. Maecenas lacinia orci ac felis dictum
                mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent viverra nibh quis ligula semper tempor. Nulla quis turpis
                quis diam sodales iaculis. Duis id luctus mi. 
              </p>
              <p>
                <button
                  className="btn btn-dark  justify-content-center py-2 mb-3 "
                  onClick={handleReturn}
                >
                  Atras
                </button>
              </p>
            </div>
            <div className="col-lg-1-1"></div>
            <div className="col-lg-3-3 mx-6 bg-light">
              <p>
                <span className="bold">Autor: </span>Jessica gutierrez
              </p>
              <p>
                <span className="bold">Fecha de publicación: </span>03/05/2021
              </p>
              <p>
                <span className="bold">Twitter: </span><a href="https://twitter.com/JkGutiM" target="_blank">@JkGutiM</a>
              </p>
            </div>
          </nav>
        </div>
        <Footer />
      </div>
    </>
  );
};

