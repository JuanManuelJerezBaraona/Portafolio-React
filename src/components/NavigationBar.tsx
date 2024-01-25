import React, { useState } from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';

interface NavigationBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ darkMode, toggleDarkMode }) => {

  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={navExpanded} onToggle={setNavExpanded} className={`p-3 ${darkMode ? 'bg-dark' : 'bg-success'}`} id="home">
      <Container>
        <Navbar.Brand href="" className='fs-3 fw-bold'>Juan Jerez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects" onClick={() => setNavExpanded(false)} className='me-auto underlined fs-4'>Projects</Nav.Link>
            <Nav.Link href="#skills" onClick={() => setNavExpanded(false)} className='me-auto underlined fs-4'>Skills</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setNavExpanded(false)} className='me-auto underlined fs-4'>Contact</Nav.Link>
          </Nav>
          <div className='d-flex justify-content-start'>
            <Button 
              className={`${darkMode ? 'btn-dark' : 'btn-success'}`} 
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

{/* <Navbar.Brand href="">
    <img
        src="/path-to-your-logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Logo"
    />
</Navbar.Brand> */}