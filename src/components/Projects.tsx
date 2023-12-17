import { Button } from "react-bootstrap"

const Projects = () => {

    const openSuperCBD = () => {
        window.open('https://www.supercbd.cl/');
    };

    const openControlaTuBolsillo = () => {
        window.open('https://controlatubolsillo.netlify.app/');
    };

    const openCotizaLasCripto = () => {
        window.open('https://cotizalascripto.netlify.app/');
    };

    return (
        <main className="container-xl projects pt-4 pt-lg-5" id="projects">
            <h2 className="display-3 text-center mb-4">Projects</h2>

            <div className="row align-items-center mb-5 flex-lg-row">
                <div className="col-lg-6">
                    <img className="img-fluid" src="/supercbd.png" alt="Super CBD image" />
                </div>
                <div className="col-lg-6">
                    <h2 className="text-center fs-1">Super CBD</h2>
                    <p className="text-center mt-4 mb-0">E-commerce of CBD products with an optimized shopping cart, various payment methods, account creation functionality for customization, and a robust database that supports the comprehensive management of the platform, offering customers a secure and complete shopping experience.</p>
                    <div className="d-flex justify-content-center my-4">
                        <Button
                            className="btn btn-dark border-white shadow-lg"
                            onClick={openSuperCBD}
                        >
                            See more
                        </Button>
                    </div>
                </div>
            </div>

            <div className="row align-items-center my-5 flex-lg-row-reverse">
                <div className="col-lg-6">
                    <img className="img-fluid" src="/controlatubolsillo.png" alt="Controla tu Bolsillo image" />
                </div>
                <div className="col-lg-6">
                    <h2 className="text-center fs-1">Controla tu Bolsillo</h2>
                    <p className="text-center mt-4 mb-0">Built with React-Vite and leveraging Hooks, such as useState and useEffect. Incorporates modal and local storage for an efficient expense management experience. I highlight React skills, state management, and performance optimization in this financial project.</p>
                    <div className="d-flex justify-content-center my-4">
                        <Button
                            className="btn btn-dark border-white shadow-lg"
                            onClick={openControlaTuBolsillo}
                        >
                            See more
                        </Button>
                    </div>
                </div>
            </div>

            <div className="row align-items-center my-4 flex-lg-row">
                <div className="col-lg-6">
                    <img className="img-fluid" src="/cotizalascripto.png" alt="Cotiza las Cripto image" />
                </div>
                <div className="col-lg-6">
                    <h2 className="text-center fs-1">Cotiza las Cripto</h2>
                    <p className="text-center mt-4 mb-0">It was developed with React-Vite and Styled Components, integrating two APIs to display real-time cryptocurrency and exchange rate data. It highlights my expertise in modern technologies and efficient financial data management, with an attractive interface and optimal performance.</p>
                    <div className="d-flex justify-content-center my-4">
                        <Button
                            className="btn btn-dark border-white shadow-lg"
                            onClick={openCotizaLasCripto}
                        >
                            See more
                        </Button>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Projects