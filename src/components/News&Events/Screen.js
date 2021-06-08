import React from "react";
// import {  Route, Switch } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Events } from "./Events";
import { News } from "./News";
import { MoreEvents } from "./MoreEvents";

export const Screen = () => {
  return (
    <Router>
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
          <Switch>
            <Redirect to="/MoreEvents" component={MoreEvents} />
          </Switch>
        </>
      </Router>
  );
};
