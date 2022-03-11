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
export const CSRWrap = styled.div`
    width: 100%;
    user-select: none;

    //! Grid Container
    .csr-grid
    {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
    }
    //! (Close) Grid Container 
    .csr-grid.close
    {
        display: none;
    }

    //! Item
    .csr-item
    {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        //
        padding: 0 15px 15px 15px;
        cursor: pointer;

        //! Img Content
        img
        {
            width: 100%;
        }
    }
    //! Item Left
    .csr-item-left
    {
        width: 80%;
        margin: 0 15px 10px 0;
        //
        color: #272727;
    }
    //! Item Right
    .csr-item-right
    {
        //! Title
        .csr-item-right_header
        {
            font-size: 20px;
            margin: 5px 0 10px 0;
        }
        //! Date 
        .csr-item-right_date
        {
            font-size: 13px;
            color: #f8941c;
            margin: 0 0 10px 0;
        }
        //! Description
        .csr-item-right_desc
        {
            color: #777777;
            font-size: 14px;
        }
    }

    //! Responsive 
    @media (max-width: 999px) 
    {
        //! Grid Container
        .csr-grid
        {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
            align-items: center;
        }

        //! Item Left
        .csr-item-left
        {
            width: 40%;
            margin: 0 15px 10px 0;
            //
            color: #272727;
        }
    }
    @media (max-width: 768px)
    {
        //! Item Left
        .csr-item-left
        {
            width: 60%;
            margin: 0 15px 10px 0;
            //
            color: #272727;
        }
    }
    @media (max-width: 600px)
    {
        //! Item Left
        .csr-item-left
        {
            width: 70%;
            margin: 0 15px 10px 0;
            //
            color: #272727;
        }
    }
    @media (max-width: 500px)
    {
        //! Item
        .csr-item
        {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            //
            padding: 0 15px 15px 15px;
            cursor: pointer;
    
            //! Img Content
            img
            {
                width: 100%;
            }
        }
        //! Item Left
        .csr-item-left
        {
            width: 100%;
            margin: 0 15px 10px 0;
            //
            color: #272727;
        }
    }
    @media (max-width: 400px)
    {
        //! Item Left
        .csr-item-left
        {
            width: 100%;
            margin: 0 15px 10px 0;
            //
            color: #272727;
        }
    }
`