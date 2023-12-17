import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const NavigationBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Añadir o eliminar el atributo data-bs-theme="dark" al elemento html
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.removeAttribute('data-bs-theme');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'dark');
    }
  };

  return (
    <Navbar expand="lg" className="p-3 bg-dark" id="home">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Juan Manuel Jerez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects" className='text-white ms-auto underlined fs-5'>Projects</Nav.Link>
            <Nav.Link href="#skills" className='text-white ms-auto underlined fs-5'>Skills</Nav.Link>
            <Nav.Link href="#contact" className='text-white ms-auto underlined fs-5'>Contact</Nav.Link>
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