import React from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";

export const News = ({ news }) => {
  let { titulo, imagen, descripcion, fecha } = news;

  return (
    <>
      <div className="container my-3 py-2 border border-dark rounded">
        <div className="row">
          <div className="col-4 content-img pt-4">
            <img src={`${imagen}`} alt="Membrane around tumor" />
          </div>
          <div className="col-8 content-info">
            <h2>{titulo}</h2>

            <p>{descripcion}</p>
            <p className="fst-italic">{fecha}</p>
          </div>
        </div>
      </div>
    </>
  );
};
