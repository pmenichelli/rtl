import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import SearchPage from "./pages/search/search-page";
import EpisodePage from "./pages/episode/episode-page";

import "./App.scss";

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="triangular-background triangular-background--top-left triangular-background--bottom-right" />
    <Router>
      <Switch>
        <Route path="/show/:id?" component={EpisodePage} />
        <Route path="/" component={SearchPage} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
