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

//! Privileges Wrap
export const CarouselWrap = styled.section`
    width: 100%;

    //! (Image)
    img
    {
        width: 80%;
        display: block;
        margin: 0 auto;
    }

    //! Responsive
    // < 769px
    @media(max-width: 1000px)
    {
        img
        {
            width: 100%;
            display: block;
            margin: 0 auto;
        }
    }
`