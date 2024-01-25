import { Button } from "react-bootstrap";

interface HeaderProps {
    darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({darkMode}) => {

    const downloadCV = () => {
        window.open('./CV-Juan-Manuel-Jerez-Baraona.pdf');
    };

    return (
        <>
            <header className="container-fluid header background-header">
                <div className="row align-items-center ">

                    <div className="col-md-6 col-lg-6 d-flex justify-content-center mb-3">
                        <img className="img-fluid perfil rounded-circle shadow-lg" src="/foto2-perfil.png" alt="Profile picture" />
                    </div>

                    <div className="col-md-6 col-lg-6 d-flex flex-column align-items-center">
                        <h1 className={`display-2 mb-3 ${darkMode ? 'bg-dark rounded-pill px-5 py-1' : 'bg-success rounded-pill px-5 py-1'}`}>Juan Jerez</h1>
                        {/* <p className={`text-center fs-3 mb-2 ${darkMode ? 'bg-dark rounded-pill px-3 py-1' : 'bg-success rounded-pill px-3 py-1'}`}>Fullstack Developer</p> */}
                        <Button 
                            className={`btn ${darkMode ? 'btn-dark border-primary' : 'btn-light'} btn-lg rounded-pill shadow-lg fw-bold`}
                            onClick={downloadCV}
                        >
                        Download CV
                        </Button>
                    </div>

                </div>
            </header>
        </>
    );
}
  
export default Header;