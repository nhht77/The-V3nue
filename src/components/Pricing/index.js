import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ticketURL from '../../resources/img/icons/ticket.png';


export class Pricing extends Component {
  render() {
    const itemPrice = [
      {
        price:100,
        type: "Balcony"
      },
      {
        price:150,
        type: "Medium"
      },
      {
        price:200,
        type: "Star"
      }
    ]

    let items = itemPrice.map( (item, idx) => 
    <div key={idx} className="pricing-item">
            <div className="pricing-inner-wrapper">
              <div className="pricing-title">
                <span>${item.price}</span>
                <span>{item.type}</span>
              </div>

              <div className="pricing-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts
              </div>
              <Button className="pricing-btn" variant="contained" >
              <img 
                src={ticketURL}  
                className="iconImage"
                alt="icon_button"
              />Purchase
              </Button>
            </div>
          </div>
    )

    return (
      <div className="pricing-section bg-black">
        <h2>PRICING</h2>


        <div className="pricing-wrapper">
        <div className="center-wrapper">
            {items}
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing
