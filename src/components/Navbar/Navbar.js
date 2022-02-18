//! Styled Components
import styled from 'styled-components';
//! React Icons
import { GiHamburgerMenu } from 'react-icons/gi';


//! Styles 
// container
const Container = styled.header`
    width: 100%;
    height: 70px;
    border: 1px solid red;
`

//! Navbar Component
function Navbar() {

    //! Return Component
    return (
      <Container>
          <center>
            <GiHamburgerMenu className='nav-ham' />

          </center>
      </Container>
    )
}

export default Navbar