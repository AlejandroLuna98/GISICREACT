import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="container-md my-2">
        <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid d-flex justify-content-end">
            <a
              className="navbar-brand d-none d-sm-block"
              href="https://www.ucatolica.edu.co/portal/"
              target="_blank"
            >
              Universidad Católica de Colombia
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i className="icon fas fa-home pe-1"></i>Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="icon fas fa-landmark pe-1"></i>Quiénes Somos
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link active dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="icon fas fa-users pe-1"></i> Integrantes
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item">Profesores</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item">Estudiantes</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">
                    <i className="icon fas fa-book pe-1"></i>Publicaciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
