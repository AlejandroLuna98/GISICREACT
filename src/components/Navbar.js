import React from "react";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className="container-md my-2">
        <nav className=" nav navbar navbar-expand-lg navbar-light bg-light  ">
          <div className="container-fluid d-flex justify-content-end">
            <div className="navbar-collapse mx-3 text-center">
              <div className="navbar-nav">
                <NavLink className="navbar-brand mx-3" to="/">
                  GISIC
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link text-dark"
                  exact
                  to="/QuienesSomos"
                >
                  Quienes Somos
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link text-dark"
                  exact
                  to="/Docentes"
                >
                  Profesores
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link text-dark"
                  exact
                  to="/Alumnos"
                >
                  Alumnos
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link text-dark"
                  exact
                  to="/Publicaciones"
                >
                  Publicaciones
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
