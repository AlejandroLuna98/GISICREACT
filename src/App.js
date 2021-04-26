import React from "react";

import { Carrousel } from "./components/Carrousel";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Screen } from "./components/News&Events/Screen";
export const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Carrousel />

      <Screen />
      <Footer />
    </>
  );
};
