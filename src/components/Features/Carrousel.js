import React, { Component } from 'react'

import img1 from "../../resources/img/img-1.jpg"; 
import img2 from "../../resources/img/img-2.jpg"; 
import img3 from "../../resources/img/img-3.jpg"; 

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
      const settings = {
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        autoPlay: true,
        showIndicators: false
      }

      const imgSrc = [img1, img2, img3];
      const img = imgSrc.map( (i, idx) => {
        return (
          <div key={idx}>
            <img 
            src={i}
            alt="Sungha Jung"
            style={{height:"100vh", width:"100%"}}/>
          </div>
        );
      })
        return (
            <Carousel {...settings}>
                {img}
            </Carousel>
        );
    }
};
 
export default DemoCarousel;