//! React
import React from 'react'
//! PropTypes
import PropTypes from 'prop-types';
//! Styles
import { ContentsCarouselWrap } from './ContentsCarouselStyles'
//! Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
//! Swiper Modules
import { Navigation, Autoplay } from "swiper";
//! Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
//! Contents


//! Component
function ContentsCarousel({ contents }) {
    //! Return Component 
    return (
        <ContentsCarouselWrap>
            {/* (Carousel) Swiper */}
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
                    {/* Content Items */}
                    {contents.map(items => (
                        <SwiperSlide key={items.id} className='content-carousel-con'>
                            {/* Grid Wrapper Items */}
                            <div className="content-carousel-items-grid">
                                {/* (Items) */}
                                {items.contents.map(item => (
                                    <div key={item.id} className="content-carousel-item">
                                        {/* image */}
                                        <img 
                                            className="content-carousel-item-img"
                                            src={require(`../../../assets/images/pri-custom/contents/${item.img_name}`)}
                                            alt="content img carousel"
                                        />
                                        {/* Content */}
                                        <div className='content-carousel-content-item'>
                                            {/* title */}
                                            <h3 className="content-carousel-item-title">
                                                {item.title}
                                            </h3>
                                            {/* description */}
                                            <p className="content-carousel-item-desc">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>

        </ContentsCarouselWrap>
    )
}

ContentsCarousel.propTypes = {
    contents: PropTypes.array.isRequired
}

export default ContentsCarousel