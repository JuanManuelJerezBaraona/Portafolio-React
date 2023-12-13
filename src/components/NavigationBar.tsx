import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar: React.FC = () => {

  return (
    <Navbar expand="lg" className="bg-primary" id="home">
        <Container>
            <Navbar.Brand href="#home" className='text-white'>Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#about" className='text-white'>About me</Nav.Link>
                <Nav.Link href="#skills" className='text-white'>Skills</Nav.Link>
                <Nav.Link href="#projects" className='text-white'>Projects</Nav.Link>
                <Nav.Link href="#link" className='text-white'>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;