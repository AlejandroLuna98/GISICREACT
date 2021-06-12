import React, { useEffect } from "react";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Screen } from "../News&Events/Screen";
import { ScreenCarrousel } from "../Carrousel/ScreenCarrousel";

export const Home = () => {
  useEffect(() => {
    const fetchNews = async () => {
      const url = "http://localhost:4000/noticias";
      const response = await fetch(url, {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const result = await response.json();
      console.log(result);
    };
    fetchNews();
  }, []);
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
