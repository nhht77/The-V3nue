import React, { Component } from 'react';
import {Element} from 'react-scroll';

import Header from './components/partials/Header';
import Feature from './components/Features/index';
import Info from './components/Info/index';
import Highlight from './components/Highlight/index';
import Pricing from './components/Pricing/index';
import Location from './components/Location/index';
import Footer from './components/Footer/index';

import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Element name="Event Count Down">
          <Feature/>
        </Element>
        
        <Element name="Venue INFO">
          <Info/>
        </Element>
        
        <Element name="Highlight">        
          <Highlight/>
        </Element>        

        <Element name="Pricing">        
          <Pricing/>
        </Element>        

        <Element name="Location">        
          <Location/>
        </Element>        
        
        <Footer/>
      </div>
    );
  }
}

export default App;
