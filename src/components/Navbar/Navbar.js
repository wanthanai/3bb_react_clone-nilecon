//! React
import React, { useEffect, useState } from 'react'
//! Select Image
import { returnImage } from '../../assets/images/returnImage'
//! Change Language
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
//! Styles
import { NavbarWrap } from './navbarStyles'
//! React Icons
import { GiHamburgerMenu } from 'react-icons/gi';
//! React Flags Select
import ReactFlagsSelect from 'react-flags-select';
//! Components
import MenuDesk from './MenuDesk';
import MenuMobile from './MenuMobile';


//! Navbar Component
function Navbar() {
    //! useTranslation
    const { t } = useTranslation();

    //! useState
    const [selected, setSelected] = useState('');
    // Menu Desktop
    const [menuDesk, setMenuDesk] = useState(false);
    const [removeMenu, setRemoveMenu] = useState(true);
    // Menu Mobile
    const [menuMbStatus, setMenuMbStatus] = useState(false);
    const [removeMbMenu, setRemoveMbMenu] = useState(true);

    //! useEffect
    useEffect(() => {
        checkLang();
    }, [])

    //! Function
    // Handler Select Language
    const handlerSelectLang = (lang) => {
        // set to memory
        setSelected(lang);
        localStorage.setItem('lang', lang);

        // change language
        i18n.changeLanguage(lang.toLowerCase());
    }
    // Check language every time
    const checkLang = () => {
        // set to memory
        setSelected(localStorage.getItem('lang') || "US");

        // check and change language
        switch(localStorage.getItem('lang')) {
            case "US":
                i18n.changeLanguage('us');
                break;
            case "TH":
                i18n.changeLanguage('th');
                break;
            default: 
                return;
        }
    }
    // handler menu button
    const handleMenuBtn = () => {
        if(menuMbStatus) {
            // close menu mobile
            setMenuMbStatus(false)
            // remove structure menu mobile
            setTimeout(() => {
                setRemoveMbMenu(true);
            }, 400)
        } else {
            // open structure menu mobile
            setRemoveMbMenu(false);
            // open menu mobile
            setTimeout(() => {
                setMenuMbStatus(true)
            }, 50)
        }
    }   


    //! Return Component
    return (
        <NavbarWrap>
            {/* Grid */}
            <div className="container">

                {/* Grid Item (Left) */}
                <div 
                    className="main_menu_wrap"
                >
                    <button
                        id="desktop" 
                        onMouseEnter={() => {
                            setMenuDesk(true)
                            // reset to false
                            setRemoveMenu(false);
                        }} 
                        onMouseLeave={() => {
                            setMenuDesk(false)
                        }}
                    >
                        {/* DESKTOP */}
                        <GiHamburgerMenu 
                            className='menu_ham' 
                            size={20}
                        />
                        <h2 id="desktop">{t('nav.nav_main_menu')}</h2>
                    </button>
                    {/* MOBILE */}
                    <GiHamburgerMenu 
                        className='menu_ham'
                        id="mobile" size={30}
                        onClick={handleMenuBtn}
                    />
                </div>

                {/* Grid Item (Center) */}
                <div className="logo_wrap">
                    <a href="/">
                        <img 
                            src={returnImage('3BB_logo_popupfooter.jpg')} 
                            width="100" 
                            height="auto" 
                            alt="logo 3bb"
                        />
                    </a>
                </div>

                {/* Grid Item (Right) */}
                <div className="nav_item_right">
                    {/* DESKTOP */}
                    {/* payment channel */}
                    <a className='payment' id="desktop" href="#!">{t('nav.nav_payment')}</a>
                    {/* support */}
                    <a className="support" id="desktop" href="#!">{t('nav.nav_support')}</a>
                    {/* login */}
                    <button className="profile-login" id="desktop">
                        <img 
                            src={returnImage('Profile.png')} 
                            alt="profile login"
                        />
                        <span>{t('nav.nav_login')}</span>
                    </button>
                    {/* select language */}
                    <div className="select-lang_wrapper" id="desktop">
                        <ReactFlagsSelect
                            countries={["US", "TH"]}
                            customLabels={{"US": " ","TH": " "}}
                            selected={selected}
                            onSelect={code => handlerSelectLang(code)}
                            className="select-lang"  
                        />
                    </div>
                    {/* MOBILE */}
                    <img 
                        src={returnImage('Profile.png')} 
                        alt="profile img"
                        className="profile-img" 
                        id="mobile" 
                    />
                </div>
            </div>

            {/* (DESKTOP) Main Menu */}
            <MenuDesk 
                status={menuDesk} 
                setMenuDesk={setMenuDesk} 
                menuDesk={menuDesk} 
                setRemoveMenu={setRemoveMenu}
                removeMenu={removeMenu}
            />

            {/* (Mobile) Main Menu */}
            <MenuMobile 
                menuMbStatus={menuMbStatus}
                removeMbMenu={removeMbMenu}
            />
        </NavbarWrap>
    )
}

export default Navbar