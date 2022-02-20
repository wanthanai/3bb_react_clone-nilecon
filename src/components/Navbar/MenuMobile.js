//! React
import React from 'react'
//! PropTypes
import PropTypes from 'prop-types'
//! useTranslation
import { useTranslation } from 'react-i18next'
//! React Icons
import { BsFillCaretDownFill } from 'react-icons/bs';
//! React Flags Select
import { Th, Us } from 'react-flags-select';
//! Styles 
import { MenuMobileWrap } from './menuMobileStyles'
//! i18next (Chage Language)
import { changeLanguage } from 'i18next'



//! Menu Mobile Component
function MenuMobile({ menuMbStatus, removeMbMenu }) {
    //! useTranslation
    const { t } = useTranslation();


    //! Return Component
    return (
        <MenuMobileWrap>
            {/* container */}
            <div 
                className={menuMbStatus ? 'menu-mobile-con open': 'menu-mobile-con close'} 
                id="mobile"
            >
                {/* menu */}
                <ul className="menu">
                    {/* item */}
                    <li className="item main-menu"><a href="/">{t("menu.main_menu")}</a></li>
                    <li className="item"><a href="#">{t("menu.tv")}</a></li>
                    {/* submenu */}
                    <li>
                        {/* header (submenu) */}
                        <label htmlFor="sub-menu">{t("menu.home")}
                            <BsFillCaretDownFill size={15} className="icon" />
                        </label>
                        <input type="checkbox" id="sub-menu" />
                        {/* item (submenu) */}
                        <ul>
                            <li><a href="#">{t("menu.gigafiber")}</a></li>
                            <li><a href="#">{t("menu.gigatv")}</a></li>
                        </ul>
                    </li>
                    {/* submenu */}
                    <li>
                        {/* header (submenu) */}
                        <label htmlFor="sub-menu-1">{t("menu.vas")}
                            <BsFillCaretDownFill size={15} className="icon" />
                        </label>
                        <input type="checkbox" id="sub-menu-1" />
                        {/* item (submenu) */}
                        <ul>
                            <li><a href="#">{t("menu.wifi")}</a></li>
                            <li><a href="#">{t("menu.cloud")}</a></li>
                            <li><a href="#">{t("menu.movie")}</a></li>
                            <li><a href="#">{t("menu.voice")}</a></li>
                            <li><a href="#">{t("menu.gamehub")}</a></li>
                        </ul>
                    </li>
                    {/* submenu */}
                    <li>
                        {/* header (submenu) */}
                        <label htmlFor="sub-menu-2">{t("menu.corporate")}
                            <BsFillCaretDownFill size={15} className="icon" />
                        </label>
                        <input type="checkbox" id="sub-menu-2" />
                        {/* item (submenu) */}
                        <ul>
                            <li><a href="#">{t("menu.solution")}</a></li>
                            <li><a href="#">{t("menu.darkfiber")}</a></li>
                        </ul>
                    </li>
                    {/* item */}
                    <li className="item"><a href="#">{t("menu.promotion")}</a></li>
                    <li className="item"><a href="#">{t("menu.point")}</a></li>
                    <li className="item"><a href="#">{t("menu.3bbshop")}</a></li>
                    {/* submenu */}
                    <li>
                        {/* header (submenu) */}
                        <label htmlFor="sub-menu-3">{t("menu.other")}
                            <BsFillCaretDownFill size={15} className="icon" />
                        </label>
                        <input type="checkbox" id="sub-menu-3" />
                        {/* item (submenu) */}
                        <ul>
                            <li><a href="#">{t("menu.support")}</a></li>
                            <li><a href="#">{t("menu.News")}</a></li>
                            <li><a href="#">{t("menu.mail")}</a></li>
                            <li><a href="#">{t("menu.csr")}</a></li>
                        </ul>
                    </li>
                    {/* submenu */}
                    <li>
                        {/* header (submenu) */}
                        <label htmlFor="sub-menu-4">{t("menu.set_lang")}
                            <BsFillCaretDownFill />
                        </label>
                        <input type="checkbox" id="sub-menu-4" />
                        {/* item (submenu) */}
                        <ul>
                            {/* select language */}
                            <li onClick={() => changeLanguage('th')}><a href="#"><Th /> Thailand</a></li>
                            <li onClick={() => changeLanguage('us')}><a href="#"><Us /> English</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </MenuMobileWrap>
    )
}

//! PropTypes
MenuMobile.propTypes = {
    menuMbStatus: PropTypes.bool.isRequired,
    removeMbMenu: PropTypes.bool.isRequired
}

export default MenuMobile