import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from './Drawer';

export class Header extends Component {
  render() {
    const navProps = {
        position:"fixed", 
        style:{
            backgroundColor:'#2F2F2F',
            color: '#fff',
            fontWeight: 700,
            marginRight: 'auto',
            flexDirection: 'row',
            height: '5.3rem'
        }
    }  

    return (
      <div>
        <AppBar {...navProps}>
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

            <Drawer/>
        </AppBar>
      </div>
    )
  }
}

export default Header
