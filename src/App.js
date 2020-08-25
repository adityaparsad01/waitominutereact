import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Anchor from "./pages/Anchor";
import Privacy from "./pages/Privacy";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/anchors" component={Anchor} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/privacy" component={Privacy} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
