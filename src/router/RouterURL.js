import React, { Component } from 'react';
import News from './../components/News.js';
import Home from './../components/Home.js';
import NewsDetail from './../components/NewsDetail.js';
import Contact from './../components/Contact.js';
import {  Route } from "react-router-dom";

class RouterURL extends Component {
    render() {
        return (
            
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/news" component={News} />
              <Route exact path="/detail/:slug.:id.html" component={NewsDetail} />
              <Route exact path="/contact" component={Contact} />
            </div>
         
        );
    }
}

export default RouterURL;