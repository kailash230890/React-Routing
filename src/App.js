import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Products from "./Products";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
