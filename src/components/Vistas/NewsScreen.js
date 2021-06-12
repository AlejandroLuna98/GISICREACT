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
      <Header />
      <Navbar />
      <div className="container screens container-screens bordered rounded mt-4  bg-white">
        <div className="row">
          <h2 className="text-center pt-5">
            Amazon, Reddit y Twitch entre los grandes afectados por enorme
            apagón de internet
          </h2>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5 ">
            <h5 className="text-center pb-3 screem">
              <img
                src="https://ichef.bbci.co.uk/news/800/cpsprodpb/9FD2/production/_118841904_fastly_getty_composite.png"
                alt="imagen noticia"
                className="img-fluid"
              />
            </h5>
          </div>

          <div className="col-12 ">
            <p className=" text-center mb-5 px-5 ">
              "Un enorme apagón afectó temporalmente a varios sitios internet de
              alto perfil incluyendo Amazon, Reddit y Twitch. El sitio oficial
              del gobierno de Reino Unido -gov.uk- también se cayó, al igual que
              el de los diarios Financial Times, The Guardian y The New York
              Times. El proveedor de computación en la nube Fastly, que da
              soporte muchos de estos sitios en la web, reconoció ser
              responsable de las fallas.
            </p>
            <h5 className="text-center mb-5 px-5">
              Fecha: Tue Jun 08 2021 00:00:00 GMT-0500 (Colombia Standard Time)
            </h5>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-dark   w-25 py-2 mb-3 "
              onClick={handleReturn}
            >
              Return
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
