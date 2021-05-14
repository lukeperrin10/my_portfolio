import React from 'react';
import Hello from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/Cv';
import ContactForm from './components/Contact';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/home' component={Hello}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/cv' component={CV}></Route>
        <Route exact path='/contact' component={ContactForm}></Route>
        <Hello />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
