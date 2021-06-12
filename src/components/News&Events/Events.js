import React from "react";

export const Events = () => {
  return (
    <>
    <div className="col-12 subtitle-news">
      <h2>Eventos</h2>
    </div>
    <div class="upcoming-cards">
      <div class="row">
        <div class="col-4 upcoming-img">
          <div className="text-center event-card">
            <div className="event-gray">
              VIERNES
            </div>
            <span className="event-number">19</span>
          </div>
        </div>
        <div class="col-8 upcoming-info">
          <h2>
            Relaxing the I.I.D. Assumption: Adaptively Minimax Optimal Regret
            via Root-Entropic Regularization
          </h2>
          <p>March 19 @ 11:00 am - 12:00 pm</p>
        </div>
      </div>
    </div>
    </>
  );
};
