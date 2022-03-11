//! React
import React from 'react'
//! Styles
import { CopyrightWrap } from './copyrightStyles'
//! useTranslation (i18next)
import { useTranslation } from 'react-i18next';

//! Component
function Copyright() {
    //! useTranslation
    const { t } = useTranslation();

    //! Return Component
    return (
        <CopyrightWrap>
            {/* (Container) Copyright Container */}
            <div className="copyright-con">
                {/* Item */}
                <div className="copyright-items">
                    {/* (Left Itemm) */}
                    <div className="copyright-item-left">
                        <p>{t("copyright.title")}</p>
                    </div>
                    {/* (Right Itemm) */}
                    <div className="copyright-item-right">
                        <a href="#!">{t("copyright.privacy")}</a>
                        |
                        <a href="#!">{t("copyright.support")}</a>
                    </div>
                </div>
            </div>
        </CopyrightWrap>
    )
}

export default Copyright