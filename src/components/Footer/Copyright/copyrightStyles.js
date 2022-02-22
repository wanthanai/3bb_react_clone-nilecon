//! Styled
import styled from 'styled-components';

//! Copyright Wrap
export const CopyrightWrap = styled.section`
    width: 100%;
    padding: 0px 8px;
    border: 1px solid lightgray;


    //! (Container) Copyright Container
    .copyright-con
    {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
    }

    //! (Flex Items) Copyright Items
    .copyright-items
    {
        padding: 5px 0;
        height: 55px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    //! (Left Item) Copyright Left Items
    .copyright-item-left
    {
        //! Text
        p
        {
            color: #555;
            font-size: 15px;
        }
    }

    //! (Right Item) Copyright Right Items
    .copyright-item-right
    {
        a
        {
            text-decoration: none;
            font-size: 16px;
            color: #333;
        }
    }

    //! Responsive
    // max 768
    @media (max-width: 768px)
    {
        //! (Flex Items) Copyright Items
        .copyright-items
        {
            flex-direction: column;
        }
        //! (Flex Items) Copyright Items
        .copyright-items
        {
            height: auto;
        }
    }
`