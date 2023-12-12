const Header: React.FC = () => {

    return (
        <header className="container pt-lg-5 vh-100">
            <div className="row align-items-center mt-5">

                <div className="col-lg-4 my-5 d-flex justify-content-center">
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