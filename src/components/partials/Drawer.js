import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export class Drawer extends Component {  
    state = {
        right: false,
      };
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
    
  render() {
      const drawerStyle = {
        marginLeft: 'auto',
        padding: '0.5rem 2rem'
      }

      const sideList = (
        <div>
          {["Event Count Down", "Venue NFO", "Highlight", "Pricing", "Location"].map( (text, idx) => {
            return (
            <List key={idx}>
                <ListItem button>
                    <ListItemText primary={text} />
                </ListItem>
            </List>)
          })}

        </div>
      );
      
    return (
      <div style={drawerStyle}>
        <IconButton onClick={this.toggleDrawer('right', true)} color="inherit" aria-label="Menu">
            <MenuIcon />
        </IconButton>

        <SwipeableDrawer
        anchor="right"
        open={this.state.right}
        onClose={this.toggleDrawer('right', false)}
        onOpen={this.toggleDrawer('right', true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer('right', false)}
          onKeyDown={this.toggleDrawer('right', false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
      </div>
    )
  }
}

export default Drawer
