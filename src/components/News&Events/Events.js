import React from "react";

export const Events = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-6">
        <div className="col-12 subtitle-news">
          <h2>Eventos</h2>
        </div>
        <div className="upcoming-cards">
          <div className="row">
            <div className="col-4 upcoming-img">
              <img
                src="./img/eventone.jpg
          "
                alt="event"
              />
            </div>
            <div className="col-8 upcoming-info">
              <h2>WiDS Cambridge 2021</h2>
              <p>Online March 11 @ 10:00 am - 3:00 pm</p>
            </div>
          </div>
        </div>
        <div className="upcoming-cards">
          <div className="row">
            <div className="col-4 upcoming-img">
              <img src="./img/eventtwo.JPG" alt="Calendar event two" />
            </div>
            <div className="col-8 upcoming-info">
              <h2>
                On nearly assumption-free tests of nominal confidence interval
                coverage for causal parameters estimated by machine learning
              </h2>
              <p></p>
            </div>
          </div>
        </div>
        <div className="upcoming-cards">
          <div className="row">
            <div className="col-4 upcoming-img">
              <img src="./img/eventthree.JPG" alt="Calendar event three" />
            </div>
            <div className="col-8 upcoming-info">
              <h2>
                Relaxing the I.I.D. Assumption: Adaptively Minimax Optimal
                Regret via Root-Entropic Regularization
              </h2>
              <p>March 19 @ 11:00 am - 12:00 pm</p>
            </div>
          </div>
        </div>
        <div className="upcoming-cards">
          <div className="row">
            <div className="col-4 upcoming-img">
              <img src="./img/eventfour.JPG" alt="Calendar event four" />
            </div>
            <div className="col-8 upcoming-info">
              <h2>Stochastics and Statistics Seminar – TBD</h2>
              <p>March 26 @ 11:00 am - 12:00 pm</p>
            </div>
          </div>
        </div>
        <div className="upcoming-cards">
          <div className="row">
            <div className="col-4 upcoming-img">
              <img src="./img/eventfive.JPG" alt="Calendar event five" />
            </div>
            <div className="col-8 upcoming-info">
              <h2>Science and Technology</h2>
              <p>On April 2nd</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
