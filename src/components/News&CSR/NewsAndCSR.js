//! React
import React, { useState } from 'react'
//! Styles
import { NewsAndCSRWrap } from './newsAndCSRStyles'
//! i18next
import { useTranslation } from 'react-i18next'
//! React Icons
import { IoIosArrowForward } from 'react-icons/io'
//! Components
import NewsAndAct from './News&Act/NewsAndAct';
import CSR from './CSR/CSR';


//! Component
function NewsAndCSR() {
    //! useTranslation
    const { t } = useTranslation();

    //! useState
    // fasle = header 1 , true = header 2
    const [swapHeader, setSwapHeader] = useState(false);

    //! Return Component
    return (
        <NewsAndCSRWrap>
            {/* (Container) News and CSR */}
            <div className="news_csr-con">

                {/* (Header) Header Wrap */}
                <div className="news_csr-header-wrap">
                    {/* (Left) */}
                    <div className="news_csr-header-wrap_left">
                        {/* (Header 1) Button */}
                        <div 
                            // false = active
                            onClick={() => setSwapHeader(false)}
                            className={swapHeader ? 'news_act-wrap' : 'news_act-wrap active'}
                        >
                            <img src={require('../../assets/images/icons/3BB.jpg')} />
                            <h1>{t("content.3bb_news_act")}</h1>
                        </div>
                        {/* (Header 2) Button */}
                        <div 
                            // true = active
                            onClick={() => setSwapHeader(true)}
                            className={swapHeader ? 'csr-wrap active' : 'csr-wrap'}
                        >
                            <h1>{t("content.csr")}</h1>
                        </div>
                    </div>
                    {/* (Right) */}
                    {/* (See all) */}
                    <div
                        id="desktop" 
                        className="news_csr-see_all-wrap"
                    >
                        <span>{t("content.see_all")}</span>
                        <IoIosArrowForward />
                    </div>
                </div>

                {/* (Contents) 3BB News Activities & CSR */}
                {/* News & Activities / false = active or show */}
                <NewsAndAct swapHeader={swapHeader} />
                {/* CSR Contents / true = active or show */}
                <CSR swapHeader={swapHeader} />

            </div>
            {/* (Footer) Background */}
            <div className="news_csr-footer">
                <img src={require('../../assets/images/background/product-slide-bg2.png')} />
            </div>
        </NewsAndCSRWrap>
    )
}

export default NewsAndCSR