import { Button } from "react-bootstrap";

const Header: React.FC = () => {

    const downloadCV = () => {
        window.open('./CV-Juan-Manuel-Jerez-Baraona.pdf');
    };

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/juan-manuel-jerez-baraona-b54486274/');
    };

    const openGitHub = () => {
        window.open('https://github.com/JuanManuelJerezBaraona');
    };

    return (
        <header className="container-xl header">
            <div className="row align-items-center">

                <div className="col-lg-4 d-flex justify-content-center mb-3">
                    <img className="img-fluid perfil rounded-circle shadow-lg" src="/foto-perfil.png" alt="Profile picture" />
                </div>

                <div className="col-lg-8 d-flex flex-column align-items-center">
                    <p className="mb-1">Hello! I'm</p>
                    <h1 className="display-3">Juan Manuel Jerez</h1>
                    <p className="fs-2 mb-2">FullStack Developer.</p>
                    <p className="text-center">Passionate about programming and science. Committed to excellence in web development. Always looking for new challenges and learning opportunities.</p>
                    <Button 
                        className="btn btn-dark border-white shadow-lg"
                        onClick={downloadCV}
                    >
                    Download CV
                    </Button>
                    <div className="d-flex gap-3 mt-3">
                        <img src="./linkedin.svg" alt="LinkedIn profile" className="logo cursor zoom rounded-circle shadow-lg" onClick={openLinkedIn}/>
                        <img src="./github.svg" alt="GitHub profile" className="logo cursor zoom rounded-circle shadow-lg" onClick={openGitHub}/>
                    </div>
                </div>

            </div>
        </header>
    );
  }
  
  export default Header;