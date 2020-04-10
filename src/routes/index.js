import React from "react";
import { Switch } from "react-router-dom";

import Wrong from "pages/wrong";
import Home from "pages/home";
import Route from "./Route";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/" component={Wrong} />
    </Switch>
  );
}
