import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export class Header extends Component {
  render() {
    const navStyle = {
        position:"static", 
        color:"default",
        style:{
            backgroundColor:'#2F2F2F',
            color: '#fff',
            fontWeight: 700
        }
    }  

    return (
      <div>
        <AppBar {...navStyle}>
            <Toolbar>
                <div className="header-logo"> 
                    <div className="font-righteous header-logo-venue">
                        The Venue
                    </div>
                    <div className="header-logo-title">
                        Musical Event
                    </div>
                </div>
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header
