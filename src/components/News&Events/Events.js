import React from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";

export const Events = ({ events }) => {
  let { titulo, descripcion, url, fecha, ciudad } = events;
  console.log(events);
  return (
    <>
      <div className="container my-3 py-2 border border-dark rounded">
        <div className="row">
          <div className="col-12 content-info">
            <a href={url} target="_blank">
              <h2>{titulo}</h2>
            </a>
            <p>{descripcion}</p>
            <p>{fecha}</p>
            <p>{ciudad}</p>
            <p className="card-text" style={{ float: "right" }}></p>
          </div>
        </div>
      </div>
    </>
  );
};
