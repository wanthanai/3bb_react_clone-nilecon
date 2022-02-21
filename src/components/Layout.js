import React from 'react'
//! Styled Components
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';


//! Styles
const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 9999;
`
const LayoutWrap = styled.div`
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999;
`

//! Layout Component
function Layout(props) {

    //! Return Component
    return (
        <Container>
            <LayoutWrap>
                {/* Navbar */}
                <Navbar />
            </LayoutWrap>
            {/* children */}
            {props.children}
        </Container>
    )
}

export default Layout