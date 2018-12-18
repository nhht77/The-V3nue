import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import ticketURL from '../../resources/img/icons/ticket.png';

export class Discount extends Component {
  state = {
    discountStart:0,
    discountPrice:30
}


updatePrice = () => {
    const {discountPrice, discountStart} = this.state
    if(discountStart < discountPrice){
        let newState = {...this.state}
        newState.discountStart ++;
        this.setState({discountStart: newState.discountStart});
    }
}

componentDidUpdate(){
    setTimeout(()=>{
        this.updatePrice()
    },30)
}
  
  
  render() {
    return (
      <div className="discount-wrapper center-wrapper">

        <Fade onReveal={() => this.updatePrice()}>
          <div className="discount-percentage">
              <span>{this.state.discountStart}%</span>
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
