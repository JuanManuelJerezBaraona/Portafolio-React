import {Navbar, Container, Nav} from 'react-bootstrap';

interface NavigationBarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ darkMode, toggleDarkMode }) => {

    return (
        <Navbar expand="lg" className={`${darkMode ? 'bg-dark' : 'bg-success'}`} id="home">
            <Container>
                <Navbar.Brand href="" className='fs-4 fw-bold'>Juan Jerez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#projects" className='me-auto underlined fs-5'>Projects</Nav.Link>
                    <Nav.Link href="#skills" className='me-auto underlined fs-5'>Skills</Nav.Link>
                    <Nav.Link href="#contact" className='me-auto underlined fs-5'>Contact</Nav.Link>
                </Nav>
                <div className='d-flex justify-content-start'>
                <Nav.Link 
                    onClick={toggleDarkMode}
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    className='me-auto px-0 px-lg-3 pt-2 pb-1 underlined fs-5'
                >
                    <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
                </Nav.Link>
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