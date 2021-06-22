import React, { useEffect, useState } from "react";
import { Events } from "./Events";
import { News } from "./News";

export const Screen = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const url = "http://localhost:4000/noticias";
      const response = await fetch(url);
      const resNews = await response.json();
      console.log(resNews);

      setNews(resNews);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const url = "http://localhost:4000/eventos";
      const response = await fetch(url);
      const resEvents = await response.json();

      setEvents(resEvents);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="col-12 subtitle-news pt-1">
              <h2>Noticias</h2>
            </div>
            {news.map((news) => {
              // console.log(news.titulo);
              return <News news={news} key={news.id} />;
            })}
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="col-12 subtitle-news">
              <h2>Eventos</h2>
            </div>
            {events.map((events) => {
              // console.log(news.titulo);
              return <Events events={events} key={events.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
