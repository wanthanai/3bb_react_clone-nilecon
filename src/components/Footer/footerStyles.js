//! Styled 
import styled from 'styled-components';

//! Media Queries
const media = {
    desktopXL: '@media(min-width: 1280px)',
    desktopL: '@media(min-width: 1000px) and (max-width: 1279px)',
    laptop: '@media(min-width: 769px) and (max-width: 999px)',
    tablet: '@media(min-width: 481px) and (max-width: 768px)',
    mobile: '@media(min-width: 320px) and (max-width: 480px)',
}

//! Footer Wrap
export const FooterWrap = styled.footer`
    width: 100%;
    background: white;
    padding: 25px 8px;
    
    //! (Container) Footer Container
    .footer-con
    {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
    }

    //! (Grid) Footer Item
    .footer-grid
    {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    //! (Footer Left) Footer Item
    .footer-left
    {
        //! Header
        .footer-left-header
        {
            font-size: 24px;
            color: #f5941c;
            margin-bottom: 10px;
        }

        //! Text Content
        p
        {
            font-size: 16px;
            color: #3e4555;
            margin-bottom: 5px;
        }
    }

    //! (Footer Center) Footer Item
    .footer-center
    {
        padding: 10px 0 0 0;

        //! (Logo)
        img
        {
            width: 160px;
            display: block;
            margin: 0 auto;

        }
    }

    //! (Footer Right) Footer Item
    .footer-right
    {
        padding: 10px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        //! (Header)
        .footer-right-header
        {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;

            //! Text
            span
            {
                margin-right: 5px;
                font-size: 16px;
                color: #000;
            }
            //! Img
            img
            {
                width: 100px;
            }
        }

        //! (Icons link)
        .footer-right-icons_link
        {
            display: flex;
            justify-content: center;
            align-items: center;

            //! link
            a
            {
                padding: 8px;
                text-decoration: none
            }
            //! Icon
            img
            {
                width: 35px;
            }
        }
    }

    //! Responsive
    // 1000 ~ 1279
    ${media.desktopL}
    {
        //! (Container) Footer Container
        .footer-con
        {
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
        }
    }
    // 769 ~ 999
    ${media.laptop}
    {
        //! (Container) Footer Container
        .footer-con
        {
            max-width: 700px;
            width: 100%;
            margin: 0 auto;
        }
    }
    // max 768
    @media (max-width: 768px)
    {
        //! (Grid) Footer Item
        .footer-grid
        {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
        }

        //! (Footer Left) Footer Item
        .footer-left
        {
            text-align: center;
        }
    }
`