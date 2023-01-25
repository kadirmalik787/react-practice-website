import React from 'react'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const Services = () => {
  return (
    <div className='services'>
        <Carousel
        infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
            <div>
                <img src={img1} alt="item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="item2" />
                <p className='legend'>Peer to peer support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services