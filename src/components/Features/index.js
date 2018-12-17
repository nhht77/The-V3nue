import React, { Component } from 'react';
import Carrousel from './Carrousel';
import Deadline from './Deadline';

export class Features extends Component {
  render() {
    return (
      <div style={{position:"relative"}}>
      
      <Carrousel/>

            <div className="artist-name">
                <div className="wrapper">Sungha Jung</div>
            </div>

        <Deadline/>
      </div>
    )
  }
}

export default Features
