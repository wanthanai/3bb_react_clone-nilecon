//! Styled Components
import styled from 'styled-components';

//! Media Queries
// const media = {
//     desktopXL: '@media(min-width: 1280px)',
//     desktopL: '@media(min-width: 1000px) and (max-width: 1279px)',
//     laptop: '@media(min-width: 769px) and (max-width: 999px)',
//     tablet: '@media(min-width: 481px) and (max-width: 768px)',
//     mobile: '@media(min-width: 320px) and (max-width: 480px)',
// }

//! Styles
export const MenuDeskWrap = styled.div`
    position: absolute;
    width: 100%;
    top: 55px;

    //! close
    .close
    {
        pointer-events: none;
        display: none;
    }

    //! Grid
    .grid
    {
        width: 100%;
        padding: 35px 65px;
        background: linear-gradient(to bottom, #fb7a09, #f99d34);

        display: grid;
        grid-template-columns: 1fr 50px 1fr 1fr 1fr 1fr;
        cursor: pointer;

        // header
        .header
        {
            text-decoration: none;
            margin-bottom: 10px;

            // h2
            h2
            {
                font-weight: 700;
                font-size: 16px;
                color: #ffffff;
            }
        }
        // sub header
        .sub-header
        {
            text-decoration: none;
            margin-bottom: 10px;

            // h2
            h2
            {
                font-weight: 700;
                font-size: 19px;
                color: #ffffff;

                display: flex;
                align-items: center;
            }
        }

        // item link
        .item-link
        {
            font-size: 17px;
            color: #ffffff;
            font-weight: 400;
            text-decoration: none;
            margin: 0 0 6px 6px;
        }
        // spacer
        .spacer
        {
            width: 50px;
            height: 100%;
            border-left: 1px solid white;
        }

        // item 1
        .item-1
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0px 8px;

        }
        // item 2
        .item-2
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0px 8px;

        }
        // item 3
        .item-3
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0px 8px;

        }
        // item 4
        .item-4
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0px 8px;

        }
        // item 5
        .item-5
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0px 8px;
        }
    }

    //! Responsive (Media Queries)
    // < 1000px
    @media (max-width: 999px) 
    {
        //! Close Everything (Menu Desktop)
        display: none;
    }
`
