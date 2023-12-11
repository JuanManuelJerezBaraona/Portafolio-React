const Header: React.FC = () => {

    return (
        <header className="container-xl header">
            <div className="row align-items-center">
                <div className="col-md-4 my-lg-5 my-2 mb-md-0">
                    <img className="img-fluid" src="/public/foto-perfil.png" alt="imagen de perfil" />
                </div>
                <div className="col-md-8">
                    <p className="mb-0">Hi, i'm</p>
                    <h1 className="display-3">Juan Manuel Jerez</h1>
                    <p className="fs-3">FullStack Developer</p>
                    <a className="btn btn-danger" href="#">Download CV</a>
                </div>
            </div>
        </header>
    );
  }
  
  export default Header;