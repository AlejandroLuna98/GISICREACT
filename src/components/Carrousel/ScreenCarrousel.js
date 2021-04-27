import React from "react";
import { Images } from "./Images";
import { Information } from "./Information";

export const ScreenCarrousel = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Images />
          <Information />
        </div>
      </div>
    </>
  );
};
