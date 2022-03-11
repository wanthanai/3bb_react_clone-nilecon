//! React
import React from 'react'
//! Styles
import { FooterNavWrap } from './footerNavStyles'
//! useTranslation (i18next)
import { useTranslation } from 'react-i18next'

//! Component
function FooterNav() {
    //! useTranslation
    const { t } = useTranslation();

    //! Return Component
    return (
        <FooterNavWrap>
            {/* (Container) Footer Nav */}
            <div className="footer_nav-con">
                {/* Gird */}
                <div className="footer_nav-grid">
                    {/* (Item 1) */}
                    <div className="footer_nav-item">
                        {/* (Header) */}
                        <h2>{t("footer_nav.about_us")}</h2>
                        {/* Links */}
                        <a href="#!">{t("footer_nav.about_us")}</a>
                        <a href="#!">{t("footer_nav.privilege")}</a>
                        <a href="#!">{t("footer_nav.terms")}</a>
                        <a href="#!">{t("footer_nav.apply_job")}</a>
                        <a href="#!">{t("footer_nav.contact_us")}</a>
                    </div>
                    {/* (Item 2) */}
                    <div className="footer_nav-item">
                        {/* (Header) */}
                        <h2>{t("footer_nav.recom_pack")}</h2>
                        {/* Links */}
                        <a href="#!">{t("footer_nav.3bb_bb")}</a>
                        <a href="#!">{t("footer_nav.3bb_corp")}</a>
                        <a href="#!">{t("footer_nav.3bb_wifi")}</a>
                        <a href="#!">{t("footer_nav.other_service")}</a>
                    </div>
                    {/* (Item 3) */}
                    <div className="footer_nav-item">
                        {/* (Header) */}
                        <h2>{t("footer_nav.csr")}</h2>
                        {/* Links */}
                        <a href="#!">{t("footer_nav.bb_for_edu")}</a>
                        <a href="#!">{t("footer_nav.jas_for_th")}</a>
                        <a href="#!">{t("footer_nav.others")}</a>
                        <a href="#!">{t("footer_nav.csr_news")}</a>
                    </div>
                    {/* (Item 4) */}
                    <div className="footer_nav-item">
                        {/* (Header) */}
                        <h2>{t("footer_nav.support")}</h2>
                        {/* Links */}
                        <a href="#!">{t("footer_nav.speed_test")}</a>
                        <a href="#!">{t("footer_nav.3bb_shop")}</a>
                        <a href="#!">{t("footer_nav.report_legal")}</a>
                        <a href="#!">{t("footer_nav.report_loose")}</a>
                        <a href="#!">{t("footer_nav.complaint_center")}</a>
                    </div>
                    {/* (Item 5) */}
                    <div className="footer_nav-last_item">
                        {/* (Header) */}
                        <h1>3BB Call Center</h1>
                        <h2>1530</h2>
                    </div>
                </div>
            </div>
        </FooterNavWrap>
    )
}

export default FooterNav