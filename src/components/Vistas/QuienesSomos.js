import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Data from "../../json/quienesSomos.json";
export const QuienesSomos = () => {
  return (
    <>
      <Header />
      <Navbar />

      {Data.map((data) => {
        return (
          <>
            <div className="container">
              <div className="row">
                <div className="col-12 ">
                  <h1 className="text-center py-3 text-primary">Quienes Somos</h1>
                </div>
                <div className="col-12  bg-white">
                  <section className="p-3  ">
                    <p>
                      <span className="fs-5 pe-1  ">
                        Creación:{" "}
                      </span>{" "}
                      {data.Creacion}
                    </p>
                    <p>
                      <span className="fs-5 pe-1">Ciudad: </span> {data.Ciudad}
                    </p>
                    <p>
                      <span className="fs-5 pe-1">Lider: </span> {data.Lider}
                    </p>
                    <p>
                      <span className="fs-5 pe-1">Correo: </span> {data.Correo}
                    </p>
                    <p>
                      <span className="fs-5 pe-1">Clasificación: </span>{" "}
                      {data.Clasificacion}
                    </p>
                    <p>
                      <span className="fs-5 pe-1">Institución: </span>{" "}
                      {data.instituciones}
                    </p>
                  </section>
                </div>
                <div className="col-12  bg-white">
                  <section className="p-3  ">
                    <h3 className="text-center text-primary">Plan Estategico</h3>
                    <p className="pt-3">{data.PlanEstrategico}</p>
                  </section>
                  <ul>
                    <li className="mb-1 ">{data.Primero}</li>
                    <li className="mb-1 ">{data.Segundo}</li>
                    <li className="mb-1 ">{data.Tercero}</li>
                    <li className="mb-1 ">{data.Cuarto}</li>
                    <li className="mb-1 ">{data.Quinto}</li>
                    <li className="mb-1 ">{data.Sexto}</li>
                  </ul>
                </div>
              </div>
              <div className="row bg-white">
                <div className="col-12 d-flex justify-content flex-column">
                  <h3 className="text-center py-2 text-primary">Objetivos</h3>
                  <p className="p-2 text-justify">{data.Objetivos}</p>
                  <h3 className="text-center py-2 text-primary">Retos</h3>
                  <p className="p-2 text-justify">{data.Retos}</p>
                  <h3 className="text-center py-2 text-primary">Visión</h3>
                  <p className="p-2 text-justify">{data.Vision}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <Footer />
    </>
  );
};
