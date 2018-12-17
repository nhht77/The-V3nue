import React, { Component } from 'react';

import Header from './components/partials/Header';
import Feature from './components/Features';

import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Feature/>
      </div>
    );
  }
}

export default App;
