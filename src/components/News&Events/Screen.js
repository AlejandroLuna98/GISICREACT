import React from "react";
import { Events } from "./Events";
import { News } from "./News";

export const Screen = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <News />
          <Events />
        </div>
      </div>
    </>
  );
};
