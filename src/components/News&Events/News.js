import React from "react";

export const News = () => {
  return (
    <>
      <div className="col-12 subtitle-news">
          <h2>Noticias</h2>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-4 content-img">
            <img src="./img/newone.jpg" alt="Membrane around tumor" />
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
          </div>
        </div>
      </div>
    </>
  );
};
