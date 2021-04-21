import React from "react";

export const Navbar = () => {
  return (
    <>
      <div class="container-md my-2">
        <nav class="nav navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid d-flex justify-content-end">
            <a
              class="navbar-brand d-none d-sm-block"
              href="https://www.ucatolica.edu.co/portal/"
              target="_blank"
            >
              Universidad Católica de Colombia
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <i class="icon fas fa-home pe-1"></i>Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <i class="icon fas fa-landmark pe-1"></i>Quiénes Somos
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link active dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="icon fas fa-users pe-1"></i> Integrantes
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Profesores
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Estudiantes
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <i class="icon fas fa-book pe-1"></i>Publicaciones
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
