import React, { Component } from 'react';

import './../css/App.css';
import Nav from './Nav.js';

import Footer from './Footer.js';

import RouterURL from './../router/RouterURL.js';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav></Nav>
          <RouterURL></RouterURL>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
