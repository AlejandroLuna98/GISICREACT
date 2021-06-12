import React from "react";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
export const Publicaciones = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container p-0">
          <nav className=" nav navbar-expand-lg">
            <div className="col-lg-13 bg-light mx-8">
              <p className="text-bold">
                Modelo de arquitectura Cloud Federada utilizando recursos oportunistas de universidades
              </p>
              <div><span>Revista: </span>RISTI - Revista Iberica de Sistemas e Tecnologias de Informacao</div>
              <div><span>Pais: </span>Portugal</div>
              <div><span>ISSN: </span>1646-9895, 2019</div>
              <div><span>Vol: </span>17 fasc: N/A págs: 198 - 211</div>
              <div><span>Autores: </span>HOLMAN DIEGO BOLIVAR BARON</div>
              <div>
                <span>Articulo: </span>
                <a href="https://expeditiorepositorio.utadeo.edu.co/bitstream/handle/20.500.12010/8651/10388.pdf?sequence=1&isAllowed=y" target="_blank">Ver articulo completo.</a>
              </div>
            </div>
            <div className="col-lg-13 bg-light mx-8">
              <p className="text-bold">
                Fuzzy Logic Model for the Evaluation of Cognitive Training Through Videogames
              </p>
              <div><span>Revista: </span>Communications in Computer and Information Science</div>
              <div><span>Pais: </span>Colombia</div>
              <div><span>ISSN: </span>1865-0929, 2019</div>
              <div><span>Vol: </span>885 fasc: N/A págs: 402 - 417</div>
              <div><span>DOI: </span>10.1007/978-3-319-98998-3_31</div>
              <div><span>Autores: </span>HOLMAN DIEGO BOLIVAR BARON, SONIA GISELA RIOS CRUZ, CESAR ORLANDO DIAZ BENITO</div>
            </div>
          </nav>

          <nav className=" nav navbar-expand-lg mt-6">
            <div className="col-lg-13 bg-light mx-8">
              <p className="text-bold">
                Efficacy of a computer-based cognitive training program to enhance planning skills in 5 to 7-year-old normally-developing children
              </p>
              <div><span>Revista: </span>Applied Neuropsychology: Child</div>
              <div><span>Pais: </span>Inglaterra</div>
              <div><span>ISSN: </span>2162-2965, 2018</div>
              <div><span>Vol: </span>8 fasc: N/A págs: 1 - 10</div>
              <div><span>DOI: </span>10.1080/21622965.2018.1503959</div>
              <div><span>Autores: </span>SONIA GISELA RIOS CRUZ, HOLMAN DIEGO BOLIVAR BARON</div>
            </div>
            <div className="col-lg-13 bg-light mx-8">
              <p className="text-bold">
                An Architecture Approach for 3D Render Distribution using Mobile Devices in Real Time
              </p>
              <div><span>Revista: </span>International Journal of Interactive Multimedia and Artificial Intelligence</div>
              <div><span>Pais: </span>España</div>
              <div><span>ISSN: </span>1989-1660, 2015</div>
              <div><span>Vol: </span>3 fasc: N/A págs: 51 - 60</div>
              <div><span>DOI: </span>10.9781/ijimai.2015.337</div>
              <div><span>Autores: </span>HOLMAN DIEGO BOLIVAR BARON, JOHN ALEXANDER VELANDIA VEGA</div>
              <div>
                <span>Articulo: </span>
                <a href="https://www.ijimai.org/journal/sites/default/files/files/2015/05/ijimai20153_3_7_pdf_27908.pdf" target="_blank">Ver articulo completo.</a>
              </div>
            </div>
          </nav>
          <nav className=" nav navbar-expand-lg mt-6">
            <div className="col-lg-13 bg-light mx-8">
              <p className="text-bold">
                Web service platform for automatic generation of O/D matrix
              </p>
              <div><span>Revista: </span>Eurasip Journal on Wireless Communications and Networking</div>
              <div><span>Pais: </span>Alemania</div>
              <div><span>ISSN: </span>1687-1499, 2014</div>
              <div><span>Vol: </span>2014 fasc: N/A págs: 1 - 6</div>
              <div><span>DOI: </span>10.1186/1687-1499-2014-115</div>
              <div><span>Autores: </span>LUIS FELIPE HERRERA QUINTERO, KLAUS BODO ALBERT BANSE</div>
              <div>
                <span>Articulo: </span>
                <a href="https://jwcn-eurasipjournals.springeropen.com/articles/10.1186/1687-1499-2014-115" target="_blank">Ver articulo completo.</a>
              </div>
            </div>
            <div className="col-lg-13 bg-light mx-8">
              <p className="text-bold">
                Scalable, low complexity, and fast greedy scheduling heuristics for highly heterogeneous distributed computing systems.
              </p>
              <div><span>Revista: </span>Journal of Supercomputing</div>
              <div><span>Pais: </span>Estados Unidos</div>
              <div><span>ISSN: </span>0920-8542, 2013</div>
              <div><span>Vol: </span>67 fasc: 3 págs: 837 - 853</div>
              <div><span>DOI: </span>10.1007/s11227-013-1038-0</div>
              <div><span>Autores: </span>CESAR ORLANDO DIAZ BENITO, JOHANTAN E PECERO SANCHEZ, PASCAL ANDRE JOSEPH BOUVRY</div>
            </div>
          </nav>
        </div>
      <Footer />
    </div>
  );
};
