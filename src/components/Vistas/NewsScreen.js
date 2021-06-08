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
        <div className="container-md my-2">
          <nav className=" nav navbar navbar-expand-lg navbar-light bg-light  ">
            <div className="container-fluid d-flex justify-content-end">
              <div className="navbar-collapse mx-3 text-center">
                <div>
                  <p>
                    <h2 className="text-center pb-3">Noticia Nueva:</h2>
                  </p>
                  <p className=" mb-5" style={{textAlign: 'justify'}}>
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
                    quis diam sodales iaculis. Duis id luctus mi. Praesent
                    sollicitudin pretium elit quis bibendum. Nullam ut nunc ipsum.
                    Pellentesque non pharetra est. Quisque eu eros vel lorem tristique
                    sodales. Aenean velit sapien, tempus et quam in, ultrices
                    sollicitudin tellus. Vivamus vehicula porttitor lacus suscipit
                    fringilla. Maecenas lacinia orci ac felis dictum mattis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    viverra nibh quis ligula semper tempor. Nulla quis turpis quis
                    diam sodales iaculis. Duis id luctus mi. Praesent sollicitudin
                    pretium elit quis bibendum. Nullam ut nunc ipsum. Pellentesque non
                    pharetra est. Quisque eu eros vel lorem tristique sodales. Aenean
                    velit sapien, tempus et quam in, ultrices sollicitudin tellus.
                    Vivamus vehicula porttitor lacus suscipit fringilla. Maecenas
                    lacinia orci ac felis dictum mattis.
                  </p>
                  <p style={{float: 'right'}}>
                    <button
                      className="btn btn-dark  justify-content-center py-2 mb-3 "
                      onClick={handleReturn}
                    >
                      Atras
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <Footer />
      </div>
    </>
  );
};

