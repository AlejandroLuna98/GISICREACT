import React from "react";

export const Images = () => {
  return (
    <>
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
    </>
  );
};
