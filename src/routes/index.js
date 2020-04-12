import React from "react";
import { Switch } from "react-router-dom";

import Wrong from "pages/wrong";
import Home from "pages/home";
import Character from "pages/character";
import Route from "./Route";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/character" component={Character} />
      <Route path="/" component={Wrong} />
    </Switch>
  );
}
