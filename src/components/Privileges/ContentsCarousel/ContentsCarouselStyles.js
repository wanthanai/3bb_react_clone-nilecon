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

//! Contents Carousel Wrapper 
export const ContentsCarouselWrap = styled.section`
    width: 100%;
    
    //! (Grid)
    .content-carousel-items-grid
    {
        width: 100%;
        max-height: 270px;
        height: 100%;
        display:  grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        justify-content: center;
    }
    //! (Item)
    .content-carousel-content-item
    {
        padding: 20px;

        //! Title
        h3
        {
            font-size: 18px;
            max-width: 250px;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0 0 12px 0;
        }
        //!  Description 
        p
        {
            font-size: 14px;
            color: #9e9e9e;
        }
    }
    //! Contents Items
    .content-carousel-item
    {
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        flex-direction: column;

        //! (Image)
        img
        {
            width: 100%;
        }
    }

    //! Responsive
    // 1000 > 1279
    ${media.desktopL}
    {
        //! (Grid)
        .content-carousel-items-grid
        {
            width: 100%;
            max-height: 270px;
            height: 100%;
            display:  grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
            justify-content: center;
        }
    }
    // 769 > 999
    ${media.laptop}
    {
        //! (Grid)
        .content-carousel-items-grid
        {
            width: 100%;
            max-height: 270px;
            height: 100%;
            display:  grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            justify-content: center;
        }
    }
    // 481 > 768
    ${media.tablet}
    {
        //! (Grid)
        .content-carousel-items-grid
        {
            width: 100%;
            max-height: 300px;
            height: 100%;
            display:  grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px;
            justify-content: center;
        }
    }
    // 320 > 480
    ${media.mobile}
    {
        //! (Grid)
        .content-carousel-items-grid
        {
            width: 100%;
            max-height: 250px;
            height: 100%;
            display:  grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px;
            justify-content: center;
        }
    }
`