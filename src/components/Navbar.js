import React from "react";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className="container-md my-2 p-0 ">
        <nav className=" nav navbar navbar-expand-lg navbar-light bg-light  ">
          <div className="container-fluid d-flex justify-content-end">
            <div className="navbar-collapse mx-3 text-center">
              <div className="navbar-nav">
                <NavLink className=" mx-3 nav-item nav-link text-dark" to="/">
                  <img className="imgGISIC" src="https://www.ucatolica.edu.co/portal/wp-content/uploads/2019/04/favicon-01.png" />
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
                  Integrantes
                </NavLink>
                {/* <NavLink
                  activeClassName="active"
                  className="nav-item nav-link text-dark"
                  exact
                  to="/Alumnos"
                > 
                  Alumnos
                </NavLink>*/}
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link text-dark"
                  exact
                  to="/Publicaciones"
                >
                  Articulos Publicados
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link text-dark"
                  exact
                  to="/NewsScreen"
                >
                  Noticias
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
