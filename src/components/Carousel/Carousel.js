//! React
import React from 'react'
//! React Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../assets/images/banner-slides/3BB-WeTV_Home-Slide-Top-Banner_1920x680-1.jpg'
import banner2 from '../../assets/images/banner-slides/HomeSlideBanner_1920x680.jpg'
//! Styles
import { CarouselWrap } from './carouselStyles';



//! Component
function CarouselImg() {
        
    //! Return Compoenent
        return (
        <CarouselWrap>
            <Carousel 
                infiniteLoop={true}
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
            </Carousel>
        </CarouselWrap>
    )
}

export default CarouselImg