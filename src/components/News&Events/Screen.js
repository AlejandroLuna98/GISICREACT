import React from "react";
import { Events } from "./Events";
import { News } from "./News";

export const Screen = () => {
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <News />
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <Events />
          </div>
        </div>
      </div>
    </>
  );
};
