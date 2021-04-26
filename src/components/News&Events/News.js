import React from "react";

export const News = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-6">
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
                Tough as plastic wrap but elastic like a balloon, the lining
                could be a target for therapies to limit cancer cells from
                spreading.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-4 content-img">
              <img
                src="./img/newtwo.jpg"
                alt="Adversarial artificial intelligence"
              />
            </div>
            <div className="col-8 content-info">
              <a
                href="https://news.mit.edu/2021/artificial-intelligence-adversarial-0308"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  Algorithm helps artificial intelligence systems dodge
                  “adversarial” inputs
                </h2>
              </a>
              <p>
                Method builds on gaming techniques to help autonomous vehicles
                navigate in the real world, where signals may be imperfect.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-4 content-img">
              <img src="./img/newthree.jpg" alt="Robotic doctor" />
            </div>
            <div className="col-8 content-info">
              <a
                href="https://news.mit.edu/2021/robotic-doctor-will-see-you-now-0304"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>The (robotic) doctor will see you now</h2>
              </a>
              <p>
                Study finds patients are receptive to interacting with robots
                designed to evaluate symptoms in a contact-free way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
