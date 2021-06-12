import React from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";

export const Events = () => {
  return (
    <>
      <div className="col-12 subtitle-news">
        <h2>Eventos</h2>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-4 content-img">
            <img
              src="https://ichef.bbci.co.uk/news/800/cpsprodpb/9FD2/production/_118841904_fastly_getty_composite.png"
              alt="Membrane around tumor"
            />
          </div>
          <div className="col-8 content-info">
            <a
              href="https://news.mit.edu/2021/membrane-tumors-metastasis-0308"
              target="_blank"
            >
              <h2>
                Membrane around tumors may be key to preventing metastasis
              </h2>
            </a>
            <p>
              Tough as plastic wrap but elastic like a balloon, the lining could
              be a target for therapies to limit cancer cells from spreading.
            </p>
            <p className="card-text" style={{ float: "right" }}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link text-dark"
                exact
                to="./EventsScreen"
              >
                Mas
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
