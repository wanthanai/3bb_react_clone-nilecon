//! React
import { useEffect } from 'react';
//! i18next
import i18n from 'i18next';
//! Styled Components
import styled from 'styled-components';
//! Components
import Carousel from './components/Carousel/Carousel';
import SecondNav from './components/Navbar/SecondNav'
import RecPackage from './components/RecPackage/RecPackage';
import RecPromo from './components/RecPromotion/RecPromo';
import Privileges from './components/Privileges/Privileges';


//! Styles
// Container
const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 70px;
    // border: 1px solid red;
`

//! App Component
function App() {

    //! useEffect
    useEffect(() => {
        checkLang();
    }, [])

    //! Function
    // Check language every time
    const checkLang = () => {
        // check and change language
        switch(localStorage.getItem('lang')) {
            case "US":
                i18n.changeLanguage('us');
                break;
            case "TH":
                i18n.changeLanguage('th');
                break;
            default: 
                return;
        }
    }

    //! Return Component
    return (
        <Container>
            {/* (DESKTOP) Second Nav */}
            <SecondNav />
            {/* (Section) Carousel images slides  */}
            <Carousel />
            {/* (Section) Recommend Package */}
            <RecPackage />
            {/* (Section) Recommend Promotion */}
            <RecPromo />
            {/* (Section) Privileges for Customers */}
            <Privileges />
        </Container>
    );
}

export default App;
