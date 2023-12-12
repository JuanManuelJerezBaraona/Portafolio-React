const About: React.FC = () => {

    return (
        <section className="my-5 py-5 bg-primary">
            <h2 className="display-5 text-center text-white">About me</h2>
            <p className="text-center w-50 mx-auto text-white">Passionate about programming and science. Committed to excellence in web development. Always looking for new challenges and learning opportunities.</p>
            
            <div className="row align-items-center gap-5 m-5">

                <div className="col-lg-4 mb-1">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid perfil rounded shadow-lg" src="/foto-sobremi.png" alt="imagen ícono" />
                    </div>
                </div>

                <div className="col-lg-3 rounded shadow-lg p-3 bg-white">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid rounded logo" src="/desafiolatam.png" alt="imagen ícono" />
                    </div>
                    <h3 className="text-center fs-5 mt-2">Bootcamp Desafío Latam</h3>
                    <p className="text-center fst-italic mb-0">FullStack Developer.</p>
                </div>

                <div className="col-lg-3 rounded shadow-lg p-3 bg-white">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid logo" src="/unab.svg" alt="imagen ícono" />
                    </div>
                    <h3 className="text-center fs-5 mt-2">Universidad Andrés Bello</h3>
                    <p className="text-center fst-italic mb-0">Biotechnology Engineer.</p>
                </div>

            </div>
        </section>
    );
}

export default About;