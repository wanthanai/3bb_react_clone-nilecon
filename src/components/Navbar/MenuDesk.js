//! React 
import React from 'react'
//! Styles 
import { MenuDeskWrap } from './menuDeskStyles';
import { useTranslation } from 'react-i18next';
//! PropTypes
import PropTypes from 'prop-types'
//! Fade In
import FadeIn from 'react-fade-in';
//! React Icons
import { AiFillHome } from 'react-icons/ai'
import { MdCorporateFare } from 'react-icons/md'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { FaBox } from 'react-icons/fa'


//! Menu Desktop Component
function MenuDesk({ setMenuDesk, menuDesk, setRemoveMenu, removeMenu }) {
    //! useTranslation
    const { t } = useTranslation();

    //! useState 

    //! Return Component
    return (
        <MenuDeskWrap>
            <FadeIn 
                visible={menuDesk} 
                className={removeMenu ? 'close' : 'open'}
            >
                {/* Grid */}
                <div 
                    className="grid" 
                    id="desktop"
                    onMouseEnter={() => {
                        setMenuDesk(true)
                    }}
                    onMouseLeave={() => {
                        setMenuDesk(false)
                        // for close menu (display none)
                        setTimeout(() => {
                            setRemoveMenu(true);
                        }, 400)
                    }}
                >

                    {/* item 1 */}
                    <div className="item-1">
                        {/* header */}
                        <a href="/" className="header">
                            <h2>{t('menu.main_menu')}</h2>
                        </a>
                        {/* link list */}
                        <a href="#!" className="item-link">{t('menu.tv')}</a>
                        <a href="#!" className="item-link">{t('menu.promotion')}</a>
                        <a href="#!" className="item-link">{t('menu.shopping')}</a>
                        <a href="#!" className="item-link">{t('menu.point')}</a>
                        <a href="#!" className="item-link">{t('menu.3bbshop')}</a>
                        <a href="#!" className="item-link">{t('menu.News')}</a>
                        <a href="#!" className="item-link">{t('menu.csr')}</a>
                        <a href="#!" className="item-link">{t('menu.support')}</a>
                    </div>

                    {/* spacer */}
                    <div className="spacer"></div>

                    {/* item 2 */}
                    <div className="item-2">
                        {/* header */}
                        <a 
                            className="sub-header"
                            href="#!"
                        >
                            <h2><AiFillHome /> {t('menu.home')}</h2>
                        </a>

                        <a href="#!" className="item-link">{t('menu.gigafiber')}</a>
                        <a href="#!" className="item-link">{t('menu.gigatv')}</a>
                    </div>

                    {/* item 3 */}
                    <div className="item-3">
                        {/* header */}
                        <a 
                            className="sub-header"
                            href="#!"
                        >
                            <h2><MdCorporateFare/> {t('menu.corporate')}</h2>
                        </a>

                        <a href="#!" className="item-link">{t('menu.solution')}</a>
                        <a href="#!" className="item-link">{t('menu.darkfiber')}</a>
                    </div>

                    {/* item 4 */}
                    <div className="item-4">
                        {/* header */}
                        <a 
                            className="sub-header"
                            href="#!"
                        >
                            <h2><FaBox /> {t('menu.vas')}</h2>
                        </a>

                        <a href="#!" className="item-link">{t('menu.wifi')}</a>
                        <a href="#!" className="item-link">{t('menu.cloud')}</a>
                        <a href="#!" className="item-link">{t('menu.movie')}</a>
                        <a href="#!" className="item-link">{t('menu.voice')}</a>
                        <a href="#!" className="item-link">{t('menu.gamehub')}</a>
                    </div>

                    {/* item 5 */}
                    <div className="item-5">
                        {/* header */}
                        <a 
                            className="sub-header"
                            href="#!"
                        >
                            <h2><BiDotsHorizontalRounded size={25} /> {t('menu.other')}</h2>
                        </a>

                        <a href="#!" className="item-link">{t('menu.mail')}</a>
                    </div>
                </div>
            </FadeIn>
        </MenuDeskWrap>
    )
}

//! PropTypes
MenuDesk.propTypes = {
    setMenuDesk: PropTypes.func.isRequired,
    menuDesk: PropTypes.bool.isRequired
}


export default MenuDesk