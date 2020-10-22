import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Services">
          <Services />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
