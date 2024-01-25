import { Button } from "react-bootstrap"

const Projects = () => {

    const openSuperCBD = () => {
        window.open('https://www.supercbd.cl/');
    };

    const openCalendarioApp = () => {
        window.open('https://calendario-aplicacion.netlify.app/');
    };

    const openControlaTuBolsillo = () => {
        window.open('https://controlatubolsillo.netlify.app/');
    };

    const openCotizaLasCripto = () => {
        window.open('https://cotizalascripto.netlify.app/');
    };

    return (
        <>
            <main className="container-xl projects py-4 py-lg-5 border-bottom" id="projects">

                <h2 className="display-4 text-center mb-4">Projects</h2>

                <div className="row align-items-center pb-5 mb-5 flex-md-row border-bottom">
                    <div className="col-md-6">
                        <img className="img-fluid" src="/supercbd.png" alt="Super CBD image" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center fs-1">Super CBD</h2>
                        <p className="w-75 mx-auto mt-4 mb-0 fs-5"><strong>E-commerce</strong> of CBD products with an optimized <strong>shopping cart</strong>, various <strong>payment methods</strong>, <strong>account creation</strong> functionality for customization, and a robust <strong>database</strong> that supports the comprehensive management of the platform, offering customers a secure and complete shopping experience.</p>
                        <div className="d-flex justify-content-center my-4">
                            <Button
                                className="text-uppercase w-75 btn btn-dark btn-lg rounded-pill border-primary shadow-lg fw-bold"
                                onClick={openSuperCBD}
                            >
                                See More
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center pb-5 my-5 flex-md-row-reverse border-bottom">
                    <div className="col-md-6">
                        <img className="img-fluid" src="/calendarapp.png" alt="Calendario App image" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center fs-1">Calendario App</h2>
                        <p className="w-75 mx-auto mt-4 mb-0 fs-5">I built a <strong>responsive</strong> calendar app using <strong>React Vite</strong>, <strong>MongoDB</strong>, <strong>Node.js</strong>, and <strong>Express</strong>. It features user <strong>registration</strong>, <strong>login</strong>, <strong>CRUD</strong> operations, and showcases my skills in <strong>full-stack web development</strong>, React, and database management.</p>
                        <div className="d-flex justify-content-center my-4">
                            <Button
                                className="text-uppercase w-75 btn btn-dark btn-lg rounded-pill border-primary shadow-lg fw-bold"
                                onClick={openCalendarioApp}
                            >
                                See More
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center pb-5 my-5 flex-md-row border-bottom">
                    <div className="col-md-6">
                        <img className="img-fluid" src="/controlatubolsillo.png" alt="Controla tu Bolsillo image" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center fs-1">Controla tu Bolsillo</h2>
                        <p className="w-75 mx-auto mt-4 mb-0 fs-5">Built with <strong>React-Vite</strong> and leveraging Hooks, such as <strong>useState</strong> and <strong>useEffect</strong>. Incorporates <strong>modal</strong> and <strong>local storage</strong> for an efficient expense management experience. I highlight React skills, state management, and performance optimization in this financial project.</p>
                        <div className="d-flex justify-content-center my-4">
                            <Button
                                className="text-uppercase w-75 btn btn-dark btn-lg rounded-pill border-primary shadow-lg fw-bold"
                                onClick={openControlaTuBolsillo}
                            >
                                See More
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center my-4 flex-md-row-reverse">
                    <div className="col-md-6">
                        <img className="img-fluid" src="/cotizalascripto.png" alt="Cotiza las Cripto image" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center fs-1">Cotiza las Cripto</h2>
                        <p className="w-75 mx-auto mt-4 mb-0 fs-5">It was developed with <strong>React-Vite</strong> and <strong>Styled Components</strong>, integrating <strong>two APIs</strong> to display <strong>real-time cryptocurrency</strong> and exchange rate data. It highlights my expertise in modern technologies and efficient financial data management, with an attractive interface and optimal performance.</p>
                        <div className="d-flex justify-content-center my-4">
                            <Button
                                className="text-uppercase w-75 btn btn-dark btn-lg rounded-pill border-primary shadow-lg fw-bold"
                                onClick={openCotizaLasCripto}
                            >
                                See More
                            </Button>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Projects