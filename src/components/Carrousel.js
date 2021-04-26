import React from "react";

export const Carrousel = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/img/Sede4.jpg"
                    className="slider d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/sede-13.jpg"
                    className="slider d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="pad">
              <div className="contenido lh-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vero, nulla ullam modi voluptatum suscipit quo eligendi in
                  alias, amet facere omnis, quam doloribus? Dignissimos, id
                  voluptatibus doloribus blanditiis voluptatem accusamus? Sequi,
                  doloribus voluptas? Nemo, fugit quibusdam? Officia alias,
                  perferendis hic ipsam distinctio nulla obcaecati debitis quod
                  assumenda autem quasi saepe illum aut, nobis impedit ullam,
                  sed repellendus. Quae, corrupti amet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
