const Header: React.FC = () => {

    return (
        <header className="container-xl header">
            <div className="row align-items-center">

                <div className="col-lg-4 d-flex justify-content-center mb-3">
                    <img className="img-fluid perfil rounded-circle shadow-lg" src="/foto-perfil.png" alt="imagen de perfil" />
                </div>

                <div className="col-lg-8 d-flex flex-column align-items-center">
                    <p className="mb-0">Hi, i'm</p>
                    <h1 className="display-4">Juan Manuel Jerez</h1>
                    <p className="fs-3">FullStack Developer</p>
                    <a className="btn btn-primary shadow-lg" href="#">Download CV</a>
                </div>

            </div>
        </header>
    );
  }
  
  export default Header;