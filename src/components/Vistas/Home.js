import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Screen } from "../News&Events/Screen";
import { ScreenCarrousel } from "../Carrousel/ScreenCarrousel";

export const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ScreenCarrousel />
      <Screen />
      <Footer />
    </>
  );
};
