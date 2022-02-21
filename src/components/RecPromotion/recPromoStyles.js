//! Styled Components
import styled from 'styled-components'

//! Media Queries
const media = {
    desktopXL: '@media(min-width: 1280px)',
    desktopL: '@media(min-width: 1000px) and (max-width: 1279px)',
    laptop: '@media(min-width: 769px) and (max-width: 999px)',
    tablet: '@media(min-width: 481px) and (max-width: 768px)',
    mobile: '@media(min-width: 320px) and (max-width: 480px)',
}


//! Styles
export const RecPromoWrap = styled.div`
    background-image: url(${require('../../assets/images/background/bg-promotion.jpg')});
    width: 100%;
    height: 100%;
    user-select: none;

    //! (Container) Recommend Promotion
    .rec-promo-con
    {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 35px 0 2rem 0;
    }

    //! (Header) Reccomend Promotion
    .rec-promo-header
    {
        padding: 35px 0 0 0;
        margin-bottom: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        // (text) header
        h1
        {
            color: white;
            font-size: 36px;
            font-weight: 600;
            padding: 0 8px;
            display: block;
        }
        // (see all) header
        .rec-promo-header_see_all
        {
            border: 1px solid white;
            border-radius: 100px;
            padding: 8px 25px;
            cursor: pointer;
            text-decoration: none;

            display: flex;
            justify-content: center;
            align-items: center;
            color: white;

            // (text) See all
            span
            {
                font-size: 14px;
                color: white;
                margin-right: 5px;
            }
        }
    }

    //! (Swiper Container) Recommend Promotion
    .rec-pro-swiper-con
    {
        width: 100%;
    }
    //! (Content Items Grid) Recommend Promotion
    .rec-promo-items-grid
    {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
    }

    //! (Content Item) Recommend Promotion
    .rec-promo-item
    {
        // (image) 
        img
        {
            width: 100%;
            box-shadow: 0 0 5px 5px #00000010;
        }
        // (Title)
        h3
        {
            font-size: 20px;
            color: white;
            font-weight: 600;
        }
        // (Description)
        p
        {
            font-size: 14px;
            color: white;
        }
    }

    //! Responsive (Media Queries)
    //!  769px > 999px
    ${media.laptop}
    {
        //! (Container) Recommend Promotion
        .rec-promo-con
        {
            max-width: 700px;
            width: 100%;
            margin: 0 auto;
            padding: 35px 0 2rem 0;
        }

        //! (Content Items Grid) Recommend Promotion
        .rec-promo-items-grid
        {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 25px;
        }
    }
    //!  481px > 768px
    ${media.tablet}
    {
        //! (Container) Recommend Promotion
        .rec-promo-con
        {
            max-width: 400px;
            width: 100%;
            margin: 0 auto;
            padding: 35px 0 2rem 0;
        }

        //! (Content Items Grid) Recommend Promotion
        .rec-promo-items-grid
        {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 25px;
        }
    }
    //! 320px > 480px
    ${media.mobile}
    {
        //! (Header) Recommend Promotion
        .rec-promo-header
        {
            // (Header)
            h1
            {
                font-size: 25px;
            }
            // (See all)
            .rec-promo-header_see_all
            {
                padding: 5px 20px;
            }
        }

        //! (Container) Recommend Promotion
        .rec-promo-con
        {
            max-width: 300px;
            width: 100%;
            margin: 0 auto;
            padding: 35px 0 2rem 0;
        }

        //! (Content Items Grid) Recommend Promotion
        .rec-promo-items-grid
        {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 25px;
        }
    }
`