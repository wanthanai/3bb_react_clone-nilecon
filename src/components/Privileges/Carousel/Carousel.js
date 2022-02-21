//! React
import React from 'react'
//! Swiper
import { Swiper, SwiperSlide } from "swiper/react";
//! Swiper Modules
import { Navigation, Autoplay } from "swiper";
//! Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
//! Contents
import contents from '../../../assets/contents/data.json'
//! Styles
import { CarouselWrap } from './CarouselStyles'

//! Component
function Carousel() {
    //! Return Components
    return (
        <CarouselWrap>
                {/* Swiper */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {/* Items */}
                    {contents.carousel_pri_custom.map(item => (
                        <SwiperSlide 
                            key={item.id} 
                            className="pri-custom-carousel-item"
                        >
                            <img src={require(`../../../assets/images/pri-custom/${item.img_name}`)} />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </CarouselWrap>
    )
}

export default Carousel