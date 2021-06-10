import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Alumnos } from "../components/Vistas/Alumnos";
import { Docentes } from "../components/Vistas/Docentes";
import { Home } from "../components/Vistas/Home";
import { Publicaciones } from "../components/Vistas/Publicaciones";
import { QuienesSomos } from "../components/Vistas/QuienesSomos";
import { NewsScreen } from "../components/Vistas/NewsScreen";
export const Routers = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/QuienesSomos" component={QuienesSomos} />
          <Route exact path="/Docentes" component={Docentes} />
          <Route exact path="/Alumnos" component={Alumnos} />
          <Route exact path="/Publicaciones" component={Publicaciones} />
          <Route exact path="/NewsScreen" component={NewsScreen} />
          <Redirect to="/" component={Home} />
        </Switch>
      </>
    </Router>
  );
};
