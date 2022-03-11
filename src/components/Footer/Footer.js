//! React
import React from 'react'
//! Styles
import { FooterWrap } from './footerStyles'
//! useTranslation (i18next)
import { useTranslation } from 'react-i18next';


//! Footer Component
function Footer() {
    const { t } = useTranslation();

    //! Return Component    
    return (
        <FooterWrap>
            {/* (Container) Footer Container */}
            <div className="footer-con">
                {/* (Grid) Footer */}
                <div className="footer-grid">
                    {/* (Item Left) */}
                    <div className="footer-left">
                        {/* header */}
                        <h3 className="footer-left-header">
                            {t("footer.company")}
                        </h3>
                        {/* address */}
                        <p className="footer-left-address">
                            {t("footer.address")}
                        </p>
                        {/* tel */}
                        <p className="footer-left-tel">
                            {t("footer.tel")}
                        </p>
                        {/* appeal */}
                        <p className="footer-left-appeal">
                            {t("footer.appeal")}
                        </p>
                    </div>
                    {/* (Item Center) */}
                    <div className="footer-center">
                        {/* (Logo) Footer Logo */}
                        <img 
                            src={require('../../assets/images/footer/3BB_logo_popup-1-300x128-1.png')} 
                            alt="mockup img"
                            className="footer-center-logo"
                        />
                    </div>
                    {/* (Item Right) */}
                    <div className="footer-right">
                        {/* (Header) */}
                        <div className="footer-right-header">
                            {/* text */}
                            <span>{t("footer.approved")}</span>
                            {/* img */}
                            <img 
                                src={require('../../assets/images/footer/bns_registered.png')} 
                                alt="mockup img"
                            />
                        </div>
                        {/* (Icons Link) */}
                        <div className="footer-right-icons_link">
                            {/* Facebook */}
                            <a href="#!"><img src={require('../../assets/images/footer/facebook.png')} alt="mockup img" /></a>
                            {/* Youtube */}
                            <a href="#!"><img src={require('../../assets/images/footer/youtube.png')} alt="mockup img" /></a>
                            {/* Line */}
                            <a href="#!"><img src={require('../../assets/images/footer/line.png')} alt="mockup img" /></a>
                            {/* Instagram */}
                            <a href="#!"><img src={require('../../assets/images/footer/instagram.png')} alt="mockup img" /></a>
                            {/* Twitter */}
                            <a href="#!"><img src={require('../../assets/images/footer/twitter.png')} alt="mockup img" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrap>
    )
}

export default Footer