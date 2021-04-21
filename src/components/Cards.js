import React from "react";

export const Cards = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <div class="col-12 subtitle-news">
              <h2>Noticias</h2>
            </div>
            <div class="card">
              <div class="row">
                <div class="col-4 content-img">
                  <img src="./img/newone.jpg" alt="Membrane around tumor" />
                </div>
                <div class="col-8 content-info">
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
            <div class="card">
              <div class="row">
                <div class="col-4 content-img">
                  <img
                    src="./img/newtwo.jpg"
                    alt="Adversarial artificial intelligence"
                  />
                </div>
                <div class="col-8 content-info">
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
                    Method builds on gaming techniques to help autonomous
                    vehicles navigate in the real world, where signals may be
                    imperfect.
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="row">
                <div class="col-4 content-img">
                  <img src="./img/newthree.jpg" alt="Robotic doctor" />
                </div>
                <div class="col-8 content-info">
                  <a
                    href="https://news.mit.edu/2021/robotic-doctor-will-see-you-now-0304"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>The (robotic) doctor will see you now</h2>
                  </a>
                  <p>
                    Study finds patients are receptive to interacting with
                    robots designed to evaluate symptoms in a contact-free way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6">
            <div class="col-12 subtitle-news">
              <h2>Eventos</h2>
            </div>
            <div class="upcoming-cards">
              <div class="row">
                <div class="col-4 upcoming-img">
                  <img
                    src="./img/eventone.jpg
          "
                    alt="event"
                  />
                </div>
                <div class="col-8 upcoming-info">
                  <h2>WiDS Cambridge 2021</h2>
                  <p>Online March 11 @ 10:00 am - 3:00 pm</p>
                </div>
              </div>
            </div>
            <div class="upcoming-cards">
              <div class="row">
                <div class="col-4 upcoming-img">
                  <img src="./img/eventtwo.JPG" alt="Calendar event two" />
                </div>
                <div class="col-8 upcoming-info">
                  <h2>
                    On nearly assumption-free tests of nominal confidence
                    interval coverage for causal parameters estimated by machine
                    learning
                  </h2>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="upcoming-cards">
              <div class="row">
                <div class="col-4 upcoming-img">
                  <img src="./img/eventthree.JPG" alt="Calendar event three" />
                </div>
                <div class="col-8 upcoming-info">
                  <h2>
                    Relaxing the I.I.D. Assumption: Adaptively Minimax Optimal
                    Regret via Root-Entropic Regularization
                  </h2>
                  <p>March 19 @ 11:00 am - 12:00 pm</p>
                </div>
              </div>
            </div>
            <div class="upcoming-cards">
              <div class="row">
                <div class="col-4 upcoming-img">
                  <img src="./img/eventfour.JPG" alt="Calendar event four" />
                </div>
                <div class="col-8 upcoming-info">
                  <h2>Stochastics and Statistics Seminar – TBD</h2>
                  <p>March 26 @ 11:00 am - 12:00 pm</p>
                </div>
              </div>
            </div>
            <div class="upcoming-cards">
              <div class="row">
                <div class="col-4 upcoming-img">
                  <img src="./img/eventfive.JPG" alt="Calendar event five" />
                </div>
                <div class="col-8 upcoming-info">
                  <h2>Science and Technology</h2>
                  <p>On April 2nd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
