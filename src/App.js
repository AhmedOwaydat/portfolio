import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import AboutMe from './components/about-me/about-me'
import Skills from './components/skills/skills'
import Portfolio from './components/portfolio/portfolio'
import ContactMe from './components/contact-me/contact-me'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Home />
          <AboutMe />
          <Skills />
          <Portfolio />
          <ContactMe />
        </div>
      </Router>
    );
  }
}

export default App;
