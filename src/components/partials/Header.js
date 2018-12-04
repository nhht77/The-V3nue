import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from './Drawer';

export class Header extends Component {
  state = {
      headerOpen: false
  }  
    
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
        window.pageYOffset > 150 ? this.setState({headerOpen: true }) : this.setState({headerOpen: false });
  }

  render() {
    const navProps = {
        position:"fixed", 
        style:{
            backgroundColor: this.state.headerOpen ? '#2F2F2F' : 'transparent',
            color: this.state.headerOpen ? '#FFF' : '#2F2F2F',
            fontWeight: 700,
            marginRight: 'auto',
            flexDirection: 'row',
            height: '5.3rem',
            boxShadow: this.state.headerOpen ? '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)' 
                                             : 'none'
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
