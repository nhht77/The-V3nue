import React, { Component } from 'react'

import Desc from "./Description";
import Discount from "./Discount";

export class Highlight extends Component {
  render() {
    return (
      <div>
        <Desc/>
        <Discount/>
      </div>
    )
  }
}

export default Highlight
