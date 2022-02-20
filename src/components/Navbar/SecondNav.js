import React from 'react'
//! useTranslation
import { useTranslation } from 'react-i18next'
//! Styles 
import { SecondNavWrap } from './secondNavStyles';
//! React Icons
import { ImHome } from 'react-icons/im'
import { MdOutlineRouter, MdMonitor } from 'react-icons/md'
import { GoMegaphone } from 'react-icons/go'
import { FiPackage } from 'react-icons/fi'
import { GiShop } from 'react-icons/gi'

//! Second Nav Component
function SecondNav() {
    //! useTranslation
    const { t } = useTranslation();

    //! Return Component
    return (
        <SecondNavWrap>
            {/* item */}
            <li className="sn-item-wrapper">
                <a className="sn-item" href="#">
                    <ImHome className="sec-nav-icon" size={18} />
                    <h2>{t('menu.main_menu')}</h2>
                </a>
            </li>
            {/* item */}
            <li className="sn-item-wrapper">
                <a className="sn-item" href="#">
                    <MdOutlineRouter className="sec-nav-icon" size={20} />
                    <h2>{t('menu.package_net')}</h2>
                </a>
            </li>
            {/* item */}
            <li className="sn-item-wrapper">
                <a className="sn-item" href="#">
                    <MdMonitor className="sec-nav-icon" size={18} />
                    <h2>{t('menu.tv')}</h2>
                </a>
            </li>
            {/* item */}
            <li className="sn-item-wrapper">
                <a className="sn-item" href="#">
                    <GoMegaphone className="sec-nav-icon" size={18}/>
                    <h2>{t('menu.promotion')}</h2>
                </a>
            </li>
            {/* item */}
            <li className="sn-item-wrapper sn-item-5">
                <a className="sn-item" href="#">
                    <FiPackage className="sec-nav-icon" size={18} />
                    <h2>{t('menu.point')}</h2>
                </a>
            </li>
            {/* item */}
            <li className="sn-item-wrapper sn-item-6">
                <a className="sn-item" href="#">
                    <GiShop className="sec-nav-icon" size={18}/>
                    <h2>{t('menu.3bbshop')}</h2>
                </a>
            </li>
        </SecondNavWrap>
    )
}

export default SecondNav