//! Styled Components
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';


//! Styles
// Container
const Container = styled.div`
    width: 100%;
    height: 100%;
`

function App() {
    return (
        <Container>
            {/* Navbar */}
            <Navbar />

        </Container>
    );
}

export default App;
