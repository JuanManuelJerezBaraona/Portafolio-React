import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar: React.FC = () => {

  return (
    <Navbar expand="lg" className="bg-dark p-3" id="home">
        <Container>
            <Navbar.Brand href="#home" className='text-white'>Juan Manuel Jerez</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#projects" className='text-white ms-auto underlined fs-5'>Projects</Nav.Link>
                <Nav.Link href="#skills" className='text-white ms-auto underlined fs-5'>Skills</Nav.Link>
                <Nav.Link href="#contact" className='text-white ms-auto underlined fs-5'>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;