import React from "react";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
export const QuienesSomos = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className=" text-center py-2">Quienes Somos</h1>
          </div>
          <div className="col-12"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
