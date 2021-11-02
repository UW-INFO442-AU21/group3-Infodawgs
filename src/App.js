import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./components/pages/home";
import calculator from "./components/pages/calculator";
import resources from "./components/pages/resources";
import aboutUs from "./components/pages/aboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={home} />
        <Route path="/calculator" exact component={calculator} />
        <Route path="/resources" exact component={resources} />
        <Route path="/aboutUs" exact component={aboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
