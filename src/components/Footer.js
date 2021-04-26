import React from "react";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid-md mt-2">
          <div className="container-fluid pie_pagina">
            <div className="row">
              <div className="col-12 col-lg-3 acreditaciones">
                <div className="col-12 col-lg-6 log-acre">
                  <img src="/img/AltaCalidad.png" alt="" />
                </div>
                <div className="col-12 col-lg-6 log-acre">
                  <img src="/img/Qs.png" alt="" />
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <strong>UNIVERSIDAD CATÓLICA DE COLOMBIA</strong>
                <p>
                  @ todos los derechos reservados 2018
                  <br className="mobile-oculto" />
                  PBX: (57 1) 3 27 73 00 - (57 1) 3 27 73 33
                </p>
              </div>
              <div className="col-12 col-sm-3">
                <ul>
                  <li>
                    Sede Las Torres - Bogotá
                    <br className="mobile-oculto" />
                    Avenida Caracas # 46 -72
                  </li>
                  <li>
                    Sede 4 - Bogotá
                    <br className="mobile-oculto" />
                    Carrera 13 # 47 – 30
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-3">
                <ul>
                  <li>
                    Sede El Claustro - Bogotá
                    <br className="mobile-oculto" />
                    Diagonal 46 A # 15 B – 10
                  </li>
                  <li>
                    Sede Carrera 13 - Bogotá
                    <br className="mobile-oculto" />
                    Calle 47 # 13 - 54
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
