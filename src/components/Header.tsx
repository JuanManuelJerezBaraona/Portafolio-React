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
            <header className="container-fluid header background-header curved">
                <div className="row align-items-center ">

                    <div className="col-md-6 col-lg-6 d-flex justify-content-center mb-3">
                        <img className="img-fluid perfil rounded-circle shadow-lg text-focus-in" src="/foto2-perfil.png" alt="Profile picture" />
                    </div>

                    <div className="col-md-6 col-lg-6 d-flex flex-column align-items-center">
                        <h1 className={`display-2 mb-3 rounded-pill shadow-lg px-5 py-1 ${darkMode ? 'bg-dark' : 'bg-success'}`}>Juan Jerez</h1>
                        {/* <p className={`text-center fs-3 mb-2 ${darkMode ? 'bg-dark rounded-pill px-3 py-1' : 'bg-success rounded-pill px-3 py-1'}`}>Fullstack Developer</p> */}
                        <Button 
                            className={`btn btn-lg rounded-pill shadow-lg fw-bold ${darkMode ? 'btn-dark border-primary' : 'btn-light border-dark'}`}
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