import React from "react";
import { Switch } from "react-router-dom";

import Wrong from "pages/wrong";
import Main from "pages/main";
import Route from "./Route";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} accessPage="Home" />
      <Route path="/" component={Wrong} />
    </Switch>
  );
}
