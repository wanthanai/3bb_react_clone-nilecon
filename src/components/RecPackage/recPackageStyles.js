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

//! Styles
export const RecPackageWrap = styled.div`
    background: #0f2539;
    width: 100%;
    height: 100%;
    position: relative;

    //! (Container) Recommend Package
    .rec-package-con
    {
        //! section 1
        width: 1280px;
        width: 100%;
        margin: 0 auto;
        z-index: 9999;
    }
    //! Spacer
    .rec_pack-head_spacer
    {
        width: 100%;
        height: 50px;
    }
    //! Header 1
    .rec-pack-header
    {
        display: block;
        text-align: center;
        color: white;
        font-size: 30px;
        font-weight: 400;
    }
    .rec-pack-header.orange
    {
        color: #f5941c;
        display: inline;
    }
    //! Banner (img)
    .rec-pack-banner
    {
        width: 100%;
        z-index: 999;
        transform: translateY(35px);
    }
    //! Background Orange
    .rec-pack-bg_orange
    {
        width: 100%;
        height: 750px;
        margin-top: -50px;
        padding-top: 70px;
        background-image: url('${require('../../assets/images/background/bg-orange.png')}');
    }
    //! (Container) Background Orange
    .rec-pack-bg-range-con
    {
        //! section 2
        width: 1280px;
        width: 100%;
        margin: 0 auto;
        height: 100%;
    }
    //! (Header) Recommend Package
    .rec-pack-head-2
    {
        padding-top: 40px;
        margin-left: -15px;
        color: white;
        font-size: 36px;
        font-weight: 600;
    }
    //! (Package Items) Recommend Package
    .rec-pack-items
    {
        display: flex;
        justify-content: flex-start;

        // img
        img
        {
            width: 280px;
            height: 100%;
            padding: 10px;
        }
    }
    //! (Container) Home Boardband & Entertainment
    .rec-pack-hbb-con
    {
        //! section 3
        width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 35px 0 30px 0;
    }
    //! (Header) Home Boardband & Entertainment
    .rec-pack-hbb-header
    {
        display: flex;
        justify-content: center;
        aling-items: center;

        // img
        img
        {
            width: 250px;
        }
        // h2
        h2
        {
            color: white;
            font-size: 25px;
            font-weight: 500;
        }
    }
    //! (Banner) Home Boardband & Entertainment
    .rec-pack-hbb-banner
    {
        width: 100%;
        margin: 25px 0 0 0;
    }
    //! (Button) Home Boardband & Entertainment
    .rec-pack-hbb-seemore
    {
        background-image: linear-gradient(to right, #f5941c 0%, #f58320 50%,#f5941c 100%);
        display: block;
        margin: 20px auto 0 auto;
        padding: 12px 32px;
        font-size: 20px;
        color: white;

        cursor: pointer;
        border-radius: 5px;
        outline: none;
        border: none;
    }
    // focus
    .rec-pack-hbb-seemore:active
    {
        box-shadow: 0 0 5px 5px #f5832030;
    }

    //! Responsive (Media Queries)
    //! (Desktop) > 999px < 1350px
    @media (min-width: 999px) and (max-width: 1350px)
    {

        #mobile
        {
            display: none;
        }

        // (Container) Recommend Package
        .rec-package-con
        {
            // section 1
            width: 900px;
        }

        // (Container) Background Orange
        .rec-pack-bg-range-con
        {
            // section 2
            width: 900px;
        }

        // (Container) Home Boardband & Entertainment
        .rec-pack-hbb-con
        {
            // section 3
            width: 900px;
        }
    }
    //! (Desktop) > 1351px
    @media (min-width: 1351px)
    {
        // (Container) Recommend Package
        .rec-package-con
        {
            // section 1
            max-width: 1280px;
            width: 100%;
        }

        // (Container) Background Orange
        .rec-pack-bg-range-con
        {
            // section 2
            max-width: 1280px;
            width: 100%;
        }

        // (Container) Home Boardband & Entertainment
        .rec-pack-hbb-con
        {
            // section 3
            max-width: 1280px;
            width: 100%;
        }
    }
    //! (Tablet) > 750px < 998px
    @media (min-width: 750px) and (max-width: 998px)
    {

        #mobile
        {
            display: none;
        }

        // (Container) Recommend Package
        .rec-package-con
        {
            // section 1
            max-width: 700px;
        }
        // Background Orange
        .rec-pack-bg_orange
        {
            height: 100%;
            margin-top: -50px;
            padding-top: 70px;
            background-image: url('${require('../../assets/images/background/bg-orange.png')}');
        }

        // (Container) Background Orange
        .rec-pack-bg-range-con
        {
            // section 2
            max-width: 700px;
        }
        // (Package Items) Recommend Package
        .rec-pack-items
        {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, auto);

            // img
            img
            {
                width: 100%;
                height: 100%;
                margin: 0 auto;
            }
        }
    
        // (Container) Home Boardband & Entertainment
        .rec-pack-hbb-con
        {
            // section 3
            width: 700px;
        }    
    }
    //! (Mobile) > 481px < 749px
    @media (min-width: 481px) and (max-width: 749px)
    {
        #desktop
        {
            display: none;
        }
        
        // Background Orange
        .rec-pack-bg_orange
        {
            height: 100%;
            margin-top: 0px;
            padding-top: 0px;
            background-image: url('${require('../../assets/images/background/bg-orange.png')}');
        }
        // (Header) Recommend Package
        .rec-pack-head-2
        {
            padding: 20px 0 0 15px;
            margin-left: 0px;
            color: white;
            font-size: 36px;
            font-weight: 600;
        }

        // (Package Items) Recommend Package
        .rec-pack-items
        {
            display: grid;
            grid-template-columns: repeat(1, 1fr);

            // img
            img
            {
                width: 70%;
                height: 100%;
                margin: 0 auto;
            }
        }

        // (Container) Home Boardband & Entertainment
        .rec-pack-hbb-con
        {
            // section 3
            width: 100%;
        }    
        // (Banner) Home Boardband & Entertainment
        .rec-pack-hbb-banner
        {
            width: 90%;
            display: block;
            margin: 25px auto 0 auto;
        }
    
        // (Header) Home Boardband & Entertainment
        .rec-pack-hbb-header
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            aling-items: center;
    
            // img
            img
            {
                width: 250px;
                display: block;
                margin: 0 auto;
            }
            // h2
            h2
            {
                color: white;
                font-size: 25px;
                font-weight: 500;
                text-align: center;
            }
        }
    }
    //! (Mobile) > 320px < 480px
    ${media.mobile}
    {
        #desktop
        {
            display: none;
        }
        
        // Background Orange
        .rec-pack-bg_orange
        {
            height: 100%;
            margin-top: 0px;
            padding-top: 0px;
            background-image: url('${require('../../assets/images/background/bg-orange.png')}');
        }
        // (Header) Recommend Package
        .rec-pack-head-2
        {
            padding: 20px 0 0 15px;
            margin-left: 0px;
            color: white;
            font-size: 25px;
            font-weight: 600;
        }

        // (Package Items) Recommend Package
        .rec-pack-items
        {
            display: grid;
            grid-template-columns: repeat(1, 1fr);

            // img
            img
            {
                width: 70%;
                height: 100%;
                margin: 0 auto;
            }
        }

        // (Container) Home Boardband & Entertainment
        .rec-pack-hbb-con
        {
            // section 3
            width: 100%;
        }    
        // (Banner) Home Boardband & Entertainment
        .rec-pack-hbb-banner
        {
            width: 90%;
            display: block;
            margin: 25px auto 0 auto;
        }
    
        // (Header) Home Boardband & Entertainment
        .rec-pack-hbb-header
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            aling-items: center;
    
            // img
            img
            {
                width: 250px;
                display: block;
                margin: 0 auto;
            }
            // h2
            h2
            {
                color: white;
                font-size: 25px;
                font-weight: 500;
                text-align: center;
            }
        }
    }
    //! > 750px
    @media (min-width: 750px)
    {
        #mobile
        {
            display: none;
        }
    }
`