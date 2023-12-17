import {Navbar, Container, Nav, Button} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface NavigationBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ darkMode, toggleDarkMode }) => {

  return (
    <Navbar expand="lg" className="p-3 bg-dark" id="home">
      <Container>
        <Navbar.Brand href="#home" className='text-primary'>Juan Manuel Jerez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects" className='text-primary ms-auto underlined fs-5'>Projects</Nav.Link>
            <Nav.Link href="#skills" className='text-primary ms-auto underlined fs-5'>Skills</Nav.Link>
            <Nav.Link href="#contact" className='text-primary ms-auto underlined fs-5'>Contact</Nav.Link>
          </Nav>
          <div className='d-flex justify-content-end'>
            <Button className='btn-dark' onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;