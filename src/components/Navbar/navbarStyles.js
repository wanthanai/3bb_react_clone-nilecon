import styled from 'styled-components';

//! Media Queries
const media = {
    desktopXL: '@media(min-width: 1280px)',
    desktopL: '@media(min-width: 1000px) and (max-width: 1279px)',
    laptop: '@media(min-width: 769px) and (max-width: 999px)',
    tablet: '@media(min-width: 481px) and (max-width: 768px)',
    mobile: '@media(min-width: 320px) and (max-width: 480px)',
}


export const NavbarWrap = styled.div`
    //! Navbar Wrapper
    width: 100%;
    height: 70px;
    background: ${({theme}) => theme.colors.navbar.background};
    position: relative;
    user-select: none;
    
    //! Container
    .container 
    {
        width: 1280px;
        height: 100%;
        margin: 0 auto;
        padding: 0 8px;

        color: ${({theme}) => theme.colors.navbar.main_font};

        display: grid;
        grid-template-columns: 1fr 1fr auto;
        justify-content: space-between;
        align-items: center;

        // profile mobile
        .profile-img
        {
            width: 35px;
            height: auto;
        }

        //! item left
        .main_menu_wrap
        {
            display: flex;
            align-items: center;
            
            padding: 0 13px;
    
            h2 
            {
                font-size: 18px;
                font-weight: 400;
            }

            button
            {
                display: flex;
                padding: 10px 5px;
                justify-content: center;
                align-items: center;
                background: #fff;
                border: none;
                outline: none;
                cursor: pointer;
            }
        }
        //! item center
        .menu_ham
        {
            color: ${({theme}) => theme.colors.navbar.hamberger};
            margin: 0 6px 0 0;
            cursor: pointer;
        }
        .logo_wrap
        {
            display: flex;
            justify-content: center;
            align-items: center;
            
            a
            {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        //! item right
        .nav_item_right
        {
            display: flex;
    
            // payment
            .payment
            {
                padding: 0 5px;
                text-decoration: none;
                color: #3e4555;
    
                display: flex;
                align-items: center;
            }
            .payment::after
            {
                content: "|";
                font-weight: 300;
                position: relative;
                top: -1px;
                padding: 0 0 0 10px;
                font-size: 0.95em;
                opacity: 0.8;
            }
            // support
            .support
            {
                text-decoration: none;
                color: #3e4555;
                padding: 0 0 0 5px;
                
                display: flex;
                align-items: center;
            }
            // profile login
            .profile-login
            {
                display: flex;
                justify-content: center;
                align-items: center;
    
                margin-left: 10px;
                padding: 4px;
                width: 100px;
                border: 1px solid #e8e8e8;
                background: #ffffff;
                cursor: pointer;
                user-select: none;
    
                img
                {
                    width: 21px;
                    height: auto;
                    margin-right: 5px;
                }
                span
                {
                    font-size: 16px;
                    color: #3e4555;
                }
            }
            // select languages
            .select-lang_wrapper
            {
                display: flex;
                align-items: center;
                margin-left: 15px;
            }
            .select-lang
            {
                padding: 0;
            }
        }
    }

    //! Responsive (media queries)
    ${media.desktopXL}
    {
        .container 
        {
            width: 1280px;
        }
    }
    ${media.desktopL}
    {
        .container
        {
            width: 100%;
        }
    }
    ${media.laptop}
    {
        .container
        {
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
            justify-content: space-between;

            #desktop 
            {
                display: none;
            }

            .nav_item_right
            {
                justify-content: flex-end;
                padding: 0 13px;
                cursor: pointer;
            }
        }
    }
    ${media.tablet}
    {
        .container {
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
            justify-content: space-between;

            #desktop 
            {
                display: none;
            }

            .nav_item_right
            {
                justify-content: flex-end;
                padding: 0 13px;
                cursor: pointer;
            }
        }
    }
    ${media.mobile}
    {
        .container {
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
            justify-content: space-between;

            #desktop 
            {
                display: none;
            }

            .nav_item_right
            {
                justify-content: flex-end;
                padding: 0 13px;
                cursor: pointer;
            }
        }
    }
    // close 
    @media (min-width: 1000px)
    {
        #mobile 
        {
            display: none;
        }
    }
    @media (max-width: 999px)
    {
        #desktop 
        {
            display: none;
        }
    }

`   