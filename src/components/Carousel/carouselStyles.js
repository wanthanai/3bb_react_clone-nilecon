//! Styled Components
import styled from 'styled-components';

//! Styles
export const CarouselWrap = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;


    //! Responsive (Media Queries)
    @media (max-width: 999px)
    {
        div
        {
            width: 100%;
            height: 400px;
        }
        img
        {
            height: 100%;
            object-fit: cover;
        }
    }
`