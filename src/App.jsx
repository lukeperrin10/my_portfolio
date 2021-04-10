import React from "react";
import Hello from "./Hello";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import CV from "./Cv"
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/CV" component={CV}></Route>
        <Hello />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
