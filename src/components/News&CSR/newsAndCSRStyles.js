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

//! News and CSR Styles
export const NewsAndCSRWrap = styled.section`
    width: 100%;
    background: white;
    padding: 35px 0 0 0;
    user-select: none;

    //! (Container) News and CSR Contents
    .news_csr-con
    {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 8px;
    }

    //! (Header Wrapper) News and CSR
    .news_csr-header-wrap
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    //! (Header Left Wrapper) News and CSR
    .news_csr-header-wrap_left
    {
        display: flex;
        justify-content: center;
        align-items: center;

        //! Header 1
        .news_act-wrap
        {
            padding: 16px;
            margin: 0 15px 0 0;
            border-bottom: 4px solid #eee;
            cursor: pointer;
            //
            display: flex;
            align-items: center;
            justify-content: center;

            //! 3BB Icon
            img
            {
                margin: 0 10px 0 0;
            }
            //! Text
            h1
            {
                color: #272727;
                font-size: 32px;
            }
        }
        //! (Active) Header 1
        .news_act-wrap.active
        {
            border-bottom: 4px solid #F8941C !important;
        }
        //! Header 2
        .csr-wrap
        {
            padding: 16px;
            border-bottom: 4px solid #eee;
            cursor: pointer;

            //! Text
            h1
            {
                color: #272727;
                font-size: 32px;
            }
        }
        //! (Active) Header 2
        .csr-wrap.active
        {
            border-bottom: 4px solid #F8941C !important;
        }
    }

    //! (Header Right See all) News and CSR
    .news_csr-see_all-wrap
    {
        display: flex;
        justify-content: center;
        align-items: center;
        // 
        border: 1px solid rgb(248, 148, 28);
        border-radius: 100px;
        padding: 10px 20px;
        color: #f8941c !important;
        cursor: pointer;

        //! Text
        span
        {
            margin: 0 5px 0 0;
            font-size: 16px;
        }
    }

    //! (Footer) Background News & CSR
    .news_csr-footer
    {
        width: 100%;
        height: 60px;
        margin-top: 2.5rem;

        //! img
        img
        {
            width: 100%;
            height: 100%;
        }
    }

    //! Responsive
    // 1000 ~ 1279
    ${media.desktopL}
    {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
    }
    // 769 ~ 999
    ${media.laptop}
    {
        max-width: 100%;
        width: 100%;
        margin: 0 auto;

        //! Header 1 
        .news_csr-header-wrap_left
        {
            h1
            {
                font-size: 28px !important;
            }
        }
    }
    // max 768
    @media (max-width: 768px)
    {
        max-width: 100%;
        width: 100%;
        margin: 0 auto;

        //! Desktop
        #desktop
        {
            display: none;
        }

        //! Header 1 
        .news_csr-header-wrap_left
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            //! Text
            h1
            {
                font-size: 28px !important;
            }
        }
    }
    // max 481
    @media (max-width: 481px)
    {
        //! Header 1 
        .news_csr-header-wrap_left
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            //! Text
            h1
            {
                font-size: 24px !important;
            }
        }
    }
`