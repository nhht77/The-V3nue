import React, { Component } from 'react';

import Header from './components/partials/Header';
import Feature from './components/Features/index';
import Info from './components/Info/index';

import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Feature/>
        <Info/>
      </div>
    );
  }
}

export default App;
