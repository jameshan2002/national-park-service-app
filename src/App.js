import React from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import ParkDetail from "./components/ParkDetail";
import ParkInfo from "./components/ParkInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/national-park-service-app" exact component={Search} />
          {/* <Route
            path="/national-park-service-app/search"
            exact
            component={Search}
          /> */}
          <Route
            path="/national-park-service-app/search/:id"
            component={ParkDetail}
          />
          <Route
            path="/national-park-service-app/contact"
            component={Contact}
          />
          <Route
            path="/national-park-service-app/park/:id"
            component={ParkInfo}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
