import React, { Component } from 'react';
import Fade from "react-reveal/Fade";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
        <Fade>
        The Venue
            <div className="footer-copyright">
                The venue 2018 &copy; All rights reserved.
            </div>
        </Fade>
        </footer>
      </div>
    )
  }
}

export default Footer
