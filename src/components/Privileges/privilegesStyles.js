//! Styled Components
import styled from 'styled-components';

//! Media Queries
const media = {
    desktopXL: '@media(min-width: 1280px)',
    desktopL: '@media(min-width: 1000px) and (max-width: 1279px)',
    laptop: '@media(min-width: 769px) and (max-width: 999px)',
    tablet: '@media(min-width: 481px) and (max-width: 768px)',
    mobile: '@media(min-width: 320px) and (max-width: 480px)',
}


//! Privileges Wrap
export const PrivilegesWrap = styled.section`
    background: #0f2539;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0 0 4rem 0;
    user-select: none;

    //! (Header) Privileges for Customers
    .pri-custom-header
    {
        display: block;
        text-align: center;
        padding-top: 55px;
        margin: 0 0 35px 0;
        font-size: 36px;
        font-weight: 400;
        color: white;
    }

    //! (Container) 3BB Privilege
    .pri-custom-con
    {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
    }
    //! (Header) 3BB Privilege
    .pri-custom-3bb_p
    {
        display: flex;
        justify-content: space-between;
        align-item: center;
        margin: 3rem 0 2.5rem 0;

        //! Header Left
        .pri-custom-3bb_p-header
        {
            display: flex;
            justify-content: center;
            align-items: center;

            //! Icon
            img
            {
                margin-right: 10px;
                width: 35px;
            }

            //! Text
            h2
            {
                color: white;
                font-size: 30px;
                font-weight: 800;
            }
        }

        //! Header Right (See all)
        .pri-custom-see_all
        {
            display: flex;
            justify-content: center;
            align-items: center;
            
            color: white;
            border: 1px solid rgb(248, 148, 28);
            padding: 3px 20px;
            border-radius: 100px;
            cursor: pointer;

            //! Text
            span
            {
                margin-right: 5px;
            }
        }
    }

    //! Responsive 
    // 1000 > 1279
    ${media.desktopL}
    {
        //! (Container) 3BB Privilege
        .pri-custom-con
        {
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
        }
    }
    // 769 > 999
    ${media.laptop}
    {
        //! (Container) 3BB Privilege
        .pri-custom-con
        {
            max-width: 700px;
            width: 100%;
            margin: 0 auto;
        }
    }
    // 481 > 768
    ${media.tablet}
    {
        //! Header (Privileges)
        .pri-custom-header
        {
            font-size: 30px;
        }
        //! (Container) 3BB Privilege
        .pri-custom-con
        {
            max-width: 400px;
            width: 100%;
            margin: 0 auto;
        }
        //! 3BB Privileges Header
        .pri-custom-3bb_p-header
        {
            h2
            {
                font-size: 22px !important;
            }
        }
    }
    // 320 > 480
    ${media.mobile}
    {
        //! Header (Privileges)
        .pri-custom-header
        {
            font-size: 26px;
        }
        //! (Container) 3BB Privilege
        .pri-custom-con
        {
            max-width: 300px;
            width: 100%;
            margin: 0 auto;
        }
        //! 3BB Privileges Header
        .pri-custom-3bb_p-header
        {
            h2
            {
                font-size: 16px !important;
            }
        }
    }

`