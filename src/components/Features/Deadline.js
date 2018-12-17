import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export class Deadline extends Component {
  state = {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
      deadline: "May 25, 2019"
  }  

  getTimeUntil = (deadline) => {
    const time = Date.parse(this.state.deadline) - Date.parse(Date());
    if(time < 0 ){
        console.log("date is passed");
    } else {
        const secs = Math.floor((time/1000) % 60);
        const mins = Math.floor((time/1000/60) % 60);
        const hours = Math.floor((time/1000/(60*60)) % 24);
        const days = Math.floor((time/1000/(60*60*24)));
    
        this.setState({
            secs,
            mins,
            hours,
            days
        })
    }
  }

  componentDidMount(){
    setInterval(()=> this.getTimeUntil(this.state.deadline),1000)
  }

  
  render() {
    const { secs , mins, hours, days } = this.state;
    const time =  
    [
        {
            name:"days",
            value:days,
        },
        {
            name:"hours",
            value:hours,
        },
        {
            name:"mins",
            value:mins,
        },
        {
            name:"secs",
            value:secs,
        },
    ]

    const countdown = time.map( (t, idx) => {
        return (
            <div className="countdown-item">
            <div className="countdown-time">
                {t.value}
            </div>
            <div className="countdown-tag">
                {t.name}
            </div>
        </div>
        );
    } )
    
    return (
      <div>
      <Fade left>
        <div className="countdown-wrapper">
            <div className="countdown-top">Event Starts In</div>
            <div className="countdown-bottom">
                {countdown}
            </div>
        </div>
        </Fade>
      </div>
    )
  }
}

export default Deadline
