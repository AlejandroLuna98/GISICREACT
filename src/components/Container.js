import React from "react";

export const Container = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-sm-12">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="/img/Sede4.jpg"
                    class="slider d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/img/sede-13.jpg"
                    class="slider d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="pad">
              <div class="contenido lh-lg">
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
