import React, { Component } from 'react';

import Header from './components/partials/Header';
import Feature from './components/Features/index';
import Info from './components/Info/index';
import Highlight from './components/Highlight/index';
import Pricing from './components/Pricing/index';
import Footer from './components/Footer/index';

import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Feature/>
        <Info/>
        <Highlight/>
        <Pricing/>
        <Footer/>
      </div>
    );
  }
}

export default App;
