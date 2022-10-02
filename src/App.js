import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import CreateEvent from "./pages/CreateEvent";
import LandingPage from "./pages/LandingPage";
import Event from "./pages/Event";

const App = () => {
  return (
    <>
    {/* <Router> */}
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/create" exact>
          <CreateEvent />
        </Route>
        <Route path="/event" exact>
          <Event />
        </Route>
      </Switch>
      {/* </Router> */}
    </>
  );
};

export default App;
