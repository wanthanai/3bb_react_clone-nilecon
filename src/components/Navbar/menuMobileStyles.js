//! Styled Components
import styled from 'styled-components'


//! Media Queries
// const media = {
//     desktopXL: '@media(min-width: 1280px)',
//     desktopL: '@media(min-width: 1000px) and (max-width: 1279px)',
//     laptop: '@media(min-width: 769px) and (max-width: 999px)',
//     tablet: '@media(min-width: 481px) and (max-width: 768px)',
//     mobile: '@media(min-width: 320px) and (max-width: 480px)',
// }

//! Styles
export const MenuMobileWrap = styled.nav`
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 50px;
    left: 0;


    //! Container
    .menu-mobile-con 
    {
        width: 100%;
        height: auto;
        background: linear-gradient(to bottom, #ff6d00, #ff5800);
        overflow: hidden;
        list-style: none;
        user-select: none;

        //! header
        label 
        {
            height: 50px;
            font-size: 18px;
            font-weight: 500;
            color: white;
            padding: 0 10px;
            cursor: pointer;
            
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        //! item
        .item 
        {
            height: 50px;
            display: flex;
            align-items: center;
            padding: 0 10px;
        }
        //! item main menu
        .item.main-menu
        {
            background: linear-gradient(to bottom, #ff6d00, #ff5800);
        } 
        ul li
        {
            cursor: pointer;
        }
        ul li a
        {
            color: white;
            text-decoration: none;
            font-size: 18px;
            display: block;
        }
        //! sub menu item
        ul ul li a 
        {
            color: #666666;
            font-size: 14px;
        }
        ul ul li
        {
            height: 35px;
            display: flex;
            align-items: center;
            padding-left: 20px;
        }
        ul ul li:hover
        {
            background: #c7c7c7;
        }
        //! sub menu 
        ul ul
        {
            position: static;
            background: #f1f1f1;
            display: none;
        }
        //! checkbox
        input[type="checkbox"] 
        {
            display: none;
        }
        //! checked
        [id^=sub-menu]:checked + ul
        {
            display: block;
        }
    }

    //! menu mobile con (Close)
    .menu-mobile-con.close
    {
        transform: translateY(-100%);
        transition: all .3s ease;
    }
    .menu-mobile-con.open
    {
        transform: translateY(0px);
        transition: all .2s ease;
    }


    //! Responsive (Media Queries)
    // > 999px
    @media (min-width: 1000px)
    {
        //! close everything (Menu Mobile)
        display: none;
    }

`
