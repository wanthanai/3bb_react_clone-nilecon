//! Styled Components
import styled from 'styled-components';


//! Styles
export const SecondNavWrap = styled.ul`
    width: 100%;
    background: #f27025;

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(6, auto);

    //! Item Wrapper
    .sn-item-wrapper
    {
        list-style: none;
        margin-right: 25px;
    }

    //! Item
    .sn-item
    {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        padding: 0 13px;

        color: white;
        text-decoration: none;

        h2
        {
            margin-left: 5px;
            font-size: 18px;
            font-weight: 500;
            color: white;
        }
    }
    //! Item Hover
    .sn-item:hover
    {
        background: white;
        
        h2
        {
            color: #f27025;
        }
        .sec-nav-icon
        {
            color: #f27025;
        }
    }

    //! Responsive (Media Queries)
    @media (min-width: 1000px ) and (max-width: 1100px)
    {
        grid-template-columns: repeat(4, auto);
        grid-template-rows: repeat(2, auto);
        
        // grid-row-start / grid-column-start / grid-row-end / grid-column-end.
        .sn-item-5
        {
            grid-area: 2 / 2 / 3 / 3;
        }
        .sn-item-6
        {
            grid-area: 2 / 3 / 3 / 4;
        }
    }
    // close second nav
    @media (max-width: 999px)
    {
        display: none;
    }
`
