import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { showsService } from "./services/shows-service";
import SearchPage from "./pages/search/search-page";
import EpisodePage from "./pages/episode/episode-page";

// import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    };
  }

  componentDidMount() {
    showsService("powerpuff").then((shows) => {
      console.log(shows);
      this.setState({
        shows,
      });
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/episode">
            <EpisodePage />
          </Route>
          <Route path="/">
            <SearchPage />
          </Route>
          <Route path="*">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
