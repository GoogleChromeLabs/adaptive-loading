import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../elements/Header/Header";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import NotFound from "../elements/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
