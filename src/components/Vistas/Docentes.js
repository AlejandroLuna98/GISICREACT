import React from "react";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
export const Docentes = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container p-0">
          <nav className=" nav navbar-expand-lg">
            <div className="col-lg-14 mx-9 text-center">
              <img src="./img/Perfil.png" width="100px"></img>
            </div>
            <div className="col-lg-15 bg-light mx-8">
              <table>
                <tr>
                  <td valign="top" width="23%" className="bold">Categoría</td>
                  <td>Investigador Asociado (I) con vigencia hasta la publicación de los resultados de la siguiente convocatoria</td>
                </tr>
                <tr>
                  <td valign="top" className="bold">Nombre</td>
                  <td>Holman Diego Bolívar Barón</td>
                </tr>
                <tr>
                  <td valign="top" className="bold">Nombre en citaciones</td>
                  <td>Bolivar. Holman</td>
                </tr>
                <tr>
                  <td valign="top" className="bold">Nacionalidad</td>
                  <td>Colombiana</td>
                </tr>
                <tr>
                  <td valign="top" className="bold">Sexo</td>
                  <td>Masculino</td>
                </tr>
              </table>
              <hr></hr>
              <p className="bold">Formación Académica</p>
              <ul>
                <li>
                  Doctorado Universidad Pontificia de Salamanca<br></br>
                  Doctorado en Ingeniería del Software<br></br>
                  Febrerode2010 - Juniode 2014<br></br>
                  Arquitectura Multi-agente Basada en Sistemas Difusos para el Seguimiento del Aprendizaje a través de Entornos de Inmersión en Línea
                </li>
                <li>
                  Pregrado/Universitario UNIVERSIDAD CATOLICA DE COLOMBIA<br></br>
                  Ingeniería de Sistemas<br></br>
                  Enerode2001 - Marzode 2007<br></br>
                  Prototipo de Videojuego para la Ensañanza y Practica Matemática
                </li>
                <li>
                  Perfeccionamiento Universidad Pontificia de Salamanca<br></br>
                  DEA Ingeniería del Software<br></br>
                  Marzode2008 - Septiembrede 2009<br></br>
                  Ontología de la Composición Geométrica 3D para la Web con base en el Estándar X3D
                </li>
              </ul>
              <div align="right"> 
                <a href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001107933" target="_blank">Ver Perfil Completo</a>
              </div>
            </div>
          </nav>
          <nav className=" nav navbar-expand-lg mt-6">
            <div className="col-lg-14 mx-9 text-center">
              <img src="./img/Perfil.png" width="100px"></img>
            </div>
            <div className="col-lg-15 bg-light mx-8">
              <table>
                <tr>
                  <td valign="top" width="23%" className="bold">Categoría</td>
                  <td>Investigador Asociado (I) con vigencia hasta la publicación de los resultados de la siguiente convocatoria</td>
                </tr>
                <tr>
                  <td valign="top" className="bold">Nombre</td>
                  <td>John Alexander Velandia Vega</td>
                </tr>
                <tr>
                  <td valign="top" className="bold">Nombre en citaciones</td>
                  <td>	VELANDIA VEGA, JOHN ALEXANDER</td>
                </tr>
                <tr>
                  <td valign="top" className="bold">Nacionalidad</td>
                  <td>Colombiana</td>
                </tr>
                <tr>
                  <td valign="top" className="bold">Sexo</td>
                  <td>Masculino</td>
                </tr>
              </table>
              <hr></hr>
              <p className="bold">Formación Académica</p>
              <ul>
                <li>
                  Doctorado University Of Lancaster<br></br>
                  E- Research and Technology Enhanced Learning<br></br>
                  Enerode2019 - de
                </li>
                <li>
                  Maestría/Magister Universidad De Stuttgart<br></br>
                  Information Technology<br></br>
                  Octubrede2011 - Octubrede 2013
                </li>
                <li>
                  Pregrado/Universitario UNIVERSIDAD CATOLICA DE COLOMBIA<br></br>
                  Ingenieria de sistemas<br></br>
                  Enerode2003 - Marzode 2008<br></br>
                  Aplicación WEB para recopilación de enunciados de competencia del ingeniero de sistemas
                </li>
              </ul>
              <div align="right"> 
                <a href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001526644" target="_blank">Ver Perfil Completo</a>
              </div>
            </div>
          </nav>
        </div>
      <Footer />
    </div>
  );
};
