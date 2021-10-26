import React from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import About from "./components/About";
import ParkDetail from "./components/ParkDetail";
import ParkInfo from "./components/ParkInfo";
import Footer from "./components/Footer";
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
          <Route path="/national-park-service-app/about" component={About} />
          <Route
            path="/national-park-service-app/park/:id"
            component={ParkInfo}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
