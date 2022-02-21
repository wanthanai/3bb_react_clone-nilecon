//! React
import React from 'react'
//! i18next
import { useTranslation } from 'react-i18next'
//! Styles
import { PrivilegesWrap } from './privilegesStyles'
//! React Icons
import { IoIosArrowForward } from 'react-icons/io'
//! Components
import Carousel from './Carousel/Carousel';
import ContentsCarousel from './ContentsCarousel/ContentsCarousel';
//! Contents
import contents from '../../assets/contents/data.json'

//! Privileges Component
function Privileges() {
    const { t } = useTranslation();

    //! Reuturn Component
    return (
        <PrivilegesWrap>

            {/* (Header) Privileges for Customers */}
            <h1 className="pri-custom-header">{t("content.pri_customers")}</h1>

            {/* (Carousel) Swiper ฺBanner */}
            <Carousel />

            {/* (Section) 3BB Privilege */}
            {/* (Container) Privileges for Customers */}
            <div className="pri-custom-con">
                {/* 3BB Privilege */}
                <div className="pri-custom-3bb_p">
                    {/* (Header) */}
                    <div className='pri-custom-3bb_p-header'>
                        <img src={require('../../assets/images/icons/Privilege.png')} />
                        <h2>3BB Privilege</h2>
                    </div>
                    {/* (See all) */}
                    <div className="pri-custom-see_all">
                        {/* (Text) */}
                        <span>{t("content.see_all")}</span>
                        {/* (Arrow Icon) */}
                        <IoIosArrowForward />
                    </div>
                </div>
                {/* (Contents Carousel) 3BB Privilege */}
                <ContentsCarousel contents={contents.contents_carousel_pri_custom} />
            </div>

            {/* (Section) Reward */}
            {/* (Container) Privileges for Customers */}
            <div className="pri-custom-con">
                {/* Reward */}
                <div className="pri-custom-3bb_p">
                    {/* (Header) */}
                    <div className='pri-custom-3bb_p-header'>
                        <img src={require('../../assets/images/icons/Reward.png')} />
                        <h2>Reward</h2>
                    </div>
                    {/* (See all) */}
                    <div className="pri-custom-see_all">
                        {/* (Text) */}
                        <span>{t("content.see_all")}</span>
                        {/* (Arrow Icon) */}
                        <IoIosArrowForward />
                    </div>
                </div>
                {/* (Contents Carousel) 3BB Privilege */}
                <ContentsCarousel contents={contents.contents_carousel_reward} />
            </div>

        </PrivilegesWrap>
    )
}

export default Privileges