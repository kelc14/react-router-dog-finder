import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dog from "./Dog";
import DogList from "./DogList";

function Routes() {
  return (
    <Switch>
      <Route path="/:dogName">
        <Dog />
      </Route>

      <Route path="/">
        <DogList />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
