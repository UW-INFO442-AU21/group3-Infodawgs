import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/home";
import calculator from "./pages/calculator";
import resources from "./pages/resources";
import aboutUs from "./pages/aboutUs";
import Footer from "./components/Footer";

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
      <Footer />
    </Router>
  );
}

export default App;
