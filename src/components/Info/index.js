import React, { Component } from 'react';

import calendar from "../../resources/img/icons/calendar.png";
import location from "../../resources/img/icons/location.png";

export class Info extends Component {
  render() {
    return (
      <div className="bg-black">
      <div className="info-wrapper">
      <div className="center-wrapper">

        <div className="info-item">
          <div className="info-outer">
          <div className="info-inner">
            <div className="info-icon-square bg-red"></div>
            <div className="info-icon" style={{background:`url(${calendar})`}}></div>
            <div className="info-title" >
              Event Date & Time
            </div>
            <div className="info-desc" >
            7 August 2017 @10.00 pm
            </div>
          </div>
          </div>
        </div>
        
        <div className="info-item">
          <div className="info-outer">
          <div className="info-inner">
            <div className="info-icon-square bg-yellow"></div>
            <div className="info-icon" style={{background:`url(${location})`}}></div>
            <div className="info-title" >
              Event Location
            </div>
            <div className="info-desc" >
              77 Dongil-ro, Gwangjin-gu, Seoul, South Korea
            </div>
          </div>
          </div>
        </div>
        
      </div>
      </div>
      </div>
    )
  }
}

export default Info
