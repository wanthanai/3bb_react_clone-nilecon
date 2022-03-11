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
export const NewsAndActWrap = styled.div`
    width: 100%;
    user-select: none;

    //! Grid Container
    .news_act-grid
    {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
    }
    //! (Close) Grid Container 
    .news_act-grid.close
    {
        display: none;
    }

    //! Item
    .news_act-item
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
    .news-act-item-left
    {
        width: 80%;
        margin: 0 15px 10px 0;
        //
        color: #272727;
    }
    //! Item Right
    .news-act-item-right
    {
        //! Title
        .news-act-item-right_header
        {
            font-size: 20px;
            margin: 5px 0 10px 0;
        }
        //! Date 
        .news-act-item-right_date
        {
            font-size: 13px;
            color: #f8941c;
            margin: 0 0 10px 0;
        }
        //! Description
        .news-act-item-right_desc
        {
            color: #777777;
            font-size: 14px;
        }
    }

    //! Responsive 
    @media (max-width: 999px) 
    {
        //! Grid Container
        .news_act-grid
        {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
            align-items: center;
        }

        //! Item Left
        .news-act-item-left
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
        .news-act-item-left
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
        .news-act-item-left
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
        .news_act-item
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
        .news-act-item-left
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
        .news-act-item-left
        {
            width: 100%;
            margin: 0 15px 10px 0;
            //
            color: #272727;
        }
    }
`