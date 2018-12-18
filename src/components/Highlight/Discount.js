import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import ticketURL from '../../resources/img/icons/ticket.png';

export class Discount extends Component {

  
  
  render() {
    return (
      <div className="discount-wrapper center-wrapper">

        <Fade onReveal={() => this.updatePrice()}>
          <div className="discount-percentage">
              <span>30%</span>
              <span>Off</span>
          </div>
        </Fade>

        <Fade right>
        <div className="discount-description"> 
          <h3>Purchase tickets before 20th March 2018</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
          <Button className="btn-info" variant="contained" >
          <img 
                src={ticketURL}  
                className="iconImage"
                alt="icon_button"
            />  
          Purchase Your Tickets
          </Button>
        </div>
        </Fade>
      </div>
    )
  }
}

export default Discount
