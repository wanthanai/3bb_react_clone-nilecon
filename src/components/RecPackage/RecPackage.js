//! React
import React from 'react'
//! Styles
import { RecPackageWrap } from './recPackageStyles'
//! useTranslation
import { useTranslation } from 'react-i18next'
//! Return Image
import { returnImage } from '../../assets/images/returnImage'

//! Component
function ReccPackage() {
    //! useTranslation
    const { t } = useTranslation();

    //! Return Component
    return (
        <RecPackageWrap>
            {/* (Container) Recommend Package */}
            <div className="rec-package-con">
                {/* spacer */}
                <div className='rec_pack-head_spacer' id="desktop"></div>
                {/* header */}
                <span className="rec-pack-header" id="desktop">
                    <span className="rec-pack-header orange">{t("content.free_hbb.1")}</span>
                    {t("content.free_hbb.2")}
                </span>
                {/* banner */}
                <img 
                    id="desktop"
                    className="rec-pack-banner"
                    src={returnImage('banner-Router-WiFi.jpg')} 
                    alt="free 3bb router home boardband"
                />
            </div>
            {/* (Section) background orange */}
            <div className="rec-pack-bg_orange">
                <div className="rec-pack-bg-range-con">
                    {/* header (Recommend Package) */}
                    <h1 
                        className="rec-pack-head-2"
                    >{t("content.rec_package")}</h1>
                    {/* Package Items */}
                    <div className="rec-pack-items">
                        <img src={require('../../assets/images/rec-pack/590.jpg')} alt="package 590" />
                        <img src={require('../../assets/images/rec-pack/690.jpg')} alt="package 690" />
                        <img src={require('../../assets/images/rec-pack/700.jpg')} alt="package 590" />
                    </div>
                </div>
            </div>
            {/* (Section) home boardband with entertainment */}
            <div className="rec-pack-hbb-con">
                {/* header */}
                <div className="rec-pack-hbb-header">
                    <img src={require('../../assets/images/rec-pack/3bb-gigatv.png')} />
                    <h2>{t('content.hbb_entertain')}</h2>
                </div>
                {/* banner */}
                <img 
                    id="desktop"
                    className="rec-pack-hbb-banner" 
                    src={require('../../assets/images/rec-pack/GIGA-TV_banner.png')}
                />
                <img 
                    id="mobile"
                    className="rec-pack-hbb-banner" 
                    src={require('../../assets/images/rec-pack/GIGA-TV_banner_500x500_vMobile.png')}
                />
                {/* button */}
                <button 
                    className="rec-pack-hbb-seemore"
                >{t("content.see_more")}</button>
            </div>
        </RecPackageWrap>
    )
}

export default ReccPackage