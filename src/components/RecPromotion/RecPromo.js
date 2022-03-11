//! React
import React from 'react'
//! i18next
import { useTranslation } from 'react-i18next'
//! Styles
import { RecPromoWrap } from './recPromoStyles'
//! React Icons
import { IoIosArrowForward } from 'react-icons/io'
//! Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
//! Swiper Modules
import { Navigation, Autoplay } from "swiper";
//! Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";


//! Component
function RecPromo() {
    const { t } = useTranslation();

    //! Return Component
    return (
        <RecPromoWrap>
            {/* (Container) Recommend Promotion */}
            <div className="rec-promo-con">

                {/* (Header) Recommend Promotion */}
                <div className="rec-promo-header">
                    {/* text */}
                    <h1>{t("content.rec_promo")}</h1>
                    {/* see all */}
                    <a href="#!" className="rec-promo-header_see_all">
                        <span>{t("content.see_all")}</span>
                        <IoIosArrowForward />
                    </a>
                </div>

                {/* (Slide Posts) Recommend Promotion */}
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
                    {/* (1) Content Items */}
                    <SwiperSlide className='rec-pro-swiper-con'>
                        {/* Grid Wrapper Items */}
                        <div className="rec-promo-items-grid">
                            {/* (Items 1) */}
                            <div className="rec-promo-item">
                                {/* image */}
                                <img 
                                    className="rec-promo-item-img"
                                    src={require('../../assets/images/rec-promotion/PromotionWeb_Pets-Friend.jpg')}
                                    alt="recommend promotion content" 
                                />
                                {/* title */}
                                <h3 className="rec-promo-item-title">
                                    3BB X Pets’ Friend Forever
                                </h3>
                                {/* description */}
                                <p className="rec-promo-item-desc">
                                    ลูกค้า 3BB รับส่วนลดสูงสุด 50% เมื่อซื้อสินค้าที่ Pets' ...
                                </p>
                            </div>
                            {/* (Items 2) */}
                            <div className="rec-promo-item">
                                {/* image */}
                                <img 
                                    className="rec-promo-item-img"
                                    src={require('../../assets/images/rec-promotion/PromotionWeb_Pets-Friend.jpg')}
                                    alt="recommend promotion content" 
                                />
                                {/* title */}
                                <h3 className="rec-promo-item-title">
                                    3BB X Pets’ Friend Forever
                                </h3>
                                {/* description */}
                                <p className="rec-promo-item-desc">
                                    ลูกค้า 3BB รับส่วนลดสูงสุด 50% เมื่อซื้อสินค้าที่ Pets' ...
                                </p>
                            </div>
                            {/* (Items 3) */}
                            <div className="rec-promo-item">
                                {/* image */}
                                <img 
                                    className="rec-promo-item-img"
                                    src={require('../../assets/images/rec-promotion/PromotionWeb_Pets-Friend.jpg')}
                                    alt="recommend promotion content" 
                                />
                                {/* title */}
                                <h3 className="rec-promo-item-title">
                                    3BB X Pets’ Friend Forever
                                </h3>
                                {/* description */}
                                <p className="rec-promo-item-desc">
                                    ลูกค้า 3BB รับส่วนลดสูงสุด 50% เมื่อซื้อสินค้าที่ Pets' ...
                                </p>
                            </div>
                            {/* (Items 4) */}
                            <div className="rec-promo-item">
                                {/* image */}
                                <img 
                                    className="rec-promo-item-img"
                                    src={require('../../assets/images/rec-promotion/PromotionWeb_Pets-Friend.jpg')}
                                    alt="recommend promotion content" 
                                />
                                {/* title */}
                                <h3 className="rec-promo-item-title">
                                    3BB X Pets’ Friend Forever
                                </h3>
                                {/* description */}
                                <p className="rec-promo-item-desc">
                                    ลูกค้า 3BB รับส่วนลดสูงสุด 50% เมื่อซื้อสินค้าที่ Pets' ...
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* (2) Content Items */}
                    <SwiperSlide className='rec-pro-swiper-con'>
                        {/* Grid Wrapper Items */}
                        <div className="rec-promo-items-grid">
                            {/* (Items 1) */}
                            <div className="rec-promo-item">
                                {/* image */}
                                <img 
                                    className="rec-promo-item-img"
                                    src={require('../../assets/images/rec-promotion/3BB_GIGAFIBER-HBOGO_aw-Dec21_Promotion-web.jpg')}
                                    alt="recommend promotion content" 
                                />
                                {/* title */}
                                <h3 className="rec-promo-item-title">
                                    3BB X Pets’ Friend Forever
                                </h3>
                                {/* description */}
                                <p className="rec-promo-item-desc">
                                    ลูกค้า 3BB รับส่วนลดสูงสุด 50% เมื่อซื้อสินค้าที่ Pets' ...
                                </p>
                            </div>
                            {/* (Items 2) */}
                            <div className="rec-promo-item">
                                {/* image */}
                                <img 
                                    className="rec-promo-item-img"
                                    src={require('../../assets/images/rec-promotion/3BB_GIGAFIBER-HBOGO_aw-Dec21_Promotion-web.jpg')}
                                    alt="recommend promotion content" 
                                />
                                {/* title */}
                                <h3 className="rec-promo-item-title">
                                    3BB X Pets’ Friend Forever
                                </h3>
                                {/* description */}
                                <p className="rec-promo-item-desc">
                                    ลูกค้า 3BB รับส่วนลดสูงสุด 50% เมื่อซื้อสินค้าที่ Pets' ...
                                </p>
                            </div>
                            {/* (Items 3) */}
                            <div className="rec-promo-item">
                                {/* image */}
                                <img 
                                    className="rec-promo-item-img"
                                    src={require('../../assets/images/rec-promotion/3BB_GIGAFIBER-HBOGO_aw-Dec21_Promotion-web.jpg')}
                                    alt="recommend promotion content" 
                                />
                                {/* title */}
                                <h3 className="rec-promo-item-title">
                                    3BB X Pets’ Friend Forever
                                </h3>
                                {/* description */}
                                <p className="rec-promo-item-desc">
                                    ลูกค้า 3BB รับส่วนลดสูงสุด 50% เมื่อซื้อสินค้าที่ Pets' ...
                                </p>
                            </div>
                            {/* (Items 4) */}
                            <div className="rec-promo-item">
                                {/* image */}
                                <img 
                                    className="rec-promo-item-img"
                                    src={require('../../assets/images/rec-promotion/3BB_GIGAFIBER-HBOGO_aw-Dec21_Promotion-web.jpg')}
                                    alt="recommend promotion content" 
                                />
                                {/* title */}
                                <h3 className="rec-promo-item-title">
                                    3BB X Pets’ Friend Forever
                                </h3>
                                {/* description */}
                                <p className="rec-promo-item-desc">
                                    ลูกค้า 3BB รับส่วนลดสูงสุด 50% เมื่อซื้อสินค้าที่ Pets' ...
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </RecPromoWrap>
    )
}

export default RecPromo