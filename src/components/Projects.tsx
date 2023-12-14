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
                    <p className="text-center mt-4 mb-0">SuperCBD es una plataforma online que ofrece información detallada sobre productos de CBD y proporciona una experiencia de compra intuitiva para los usuarios interesados en productos de bienestar basados en CBD.</p>
                    <div className="d-flex justify-content-center my-4">
                        <Button
                            className="btn btn-dark shadow-lg"
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
                    <p className="text-center mt-4 mb-0">Creada con React-Vite y aprovechando Hooks, como useState y useEffect. Incorpora modal y local storage para una experiencia eficiente de gestión de gastos. Destaco habilidades en React, manejo de estado, y optimización del rendimiento en este proyecto financiero.</p>
                    <div className="d-flex justify-content-center my-4">
                        <Button
                            className="btn btn-dark shadow-lg"
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
                    <p className="text-center mt-4 mb-0">Fue desarrollado con React-Vite y Styled Components, integrando dos APIs para mostrar en tiempo real datos de criptomonedas y tasas de cambio. Destaca mi habilidad en tecnologías modernas y en la gestión eficiente de datos financieros, con una interfaz atractiva y óptimo rendimiento.</p>
                    <div className="d-flex justify-content-center my-4">
                        <Button
                            className="btn btn-dark shadow-lg"
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