import React, { Component } from 'react'

export class Location extends Component {
  render() {
    return (
      <div className="location">
        <div className="location-wrapper">
        <iframe title="ConcertMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.519609508788!2d127.06702011531094!3d37.5428199798024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4c27b8816b3%3A0xbdfd6fcb53bcf234!2sHS+Music+Hall!5e0!3m2!1sen!2sfi!4v1545239673790"
         width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>
        <div className="location-tag">
            <div>
                LOCATION            
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Location
