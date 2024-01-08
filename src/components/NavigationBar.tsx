import {Navbar, Container, Nav, Button} from 'react-bootstrap';

interface NavigationBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ darkMode, toggleDarkMode }) => {

  return (
    <Navbar expand="lg" className={`p-3 ${darkMode ? 'bg-dark' : 'bg-success'}`} id="home">
      <Container>
        <Navbar.Brand href="" className='fs-3'>Juan Jerez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=''/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects" className='ms-auto underlined fs-4'>Projects</Nav.Link>
            <Nav.Link href="#skills" className='ms-auto underlined fs-4'>Skills</Nav.Link>
            <Nav.Link href="#contact" className='ms-auto underlined fs-4'>Contact</Nav.Link>
          </Nav>
          <div className='d-flex justify-content-end'>
            <Button className={`${darkMode ? 'btn-dark' : 'btn-success'}`} onClick={toggleDarkMode}>
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