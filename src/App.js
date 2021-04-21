import React from "react";
import { Cards } from "./components/Cards";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
export const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container />
      <Cards />
      <Footer />
    </div>
  );
};
