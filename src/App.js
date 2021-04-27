import React from "react";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Screen } from "./components/News&Events/Screen";
import { ScreenCarrousel } from "./components/Carrousel/ScreenCarrousel";

export const App = () => {
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
