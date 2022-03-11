//! Styled
import styled from 'styled-components';

//! Media Queries
// const media = {
//     desktopXL: '@media(min-width: 1280px)',
//     desktopL: '@media(min-width: 1000px) and (max-width: 1279px)',
//     laptop: '@media(min-width: 769px) and (max-width: 999px)',
//     tablet: '@media(min-width: 481px) and (max-width: 768px)',
//     mobile: '@media(min-width: 320px) and (max-width: 480px)',
// }

//! FooterNav Wrap 
export const FooterNavWrap = styled.div`
    width: 100%;
    background-color: #0f253a;
    padding: 3rem 16px;

    //! (Container) Footer Nav
    .footer_nav-con
    {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
    }

    //! (Grid) Footer Nav Items
    .footer_nav-grid
    {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 10px;
        justify-content: flex-start;
    }

    //! (Item) Footer Nav Item
    .footer_nav-item
    {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        //! Header
        h2
        {
            font-size: 24px;
            font-weight: bold;
            color: #f5941c;
            margin-bottom: 15px;
        }
        //! Links
        a
        {
            display: block;
            text-decoration: none;
            font-size: 16px;
            color: white;
            margin-bottom: 12px;
        }
    }

    //! (Last Item) Footer Nav Last Item
    .footer_nav-last_item
    {
        padding: 20px 0;

        //! Header 
        h1
        {
            font-size: 24px;
            color: white;
        }
        h2
        {
            color: #f5941c;
            font-size: 54px;
        }
    }

    //! Responsive (Media Queries)
    // max-width 768px
    @media (max-width: 768px)
    {
        //! (Grid) Footer Nav Items
        .footer_nav-grid
        {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 10px;
            justify-content: flex-start;
        }
    }

`