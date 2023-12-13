const About: React.FC = () => {

    return (
        <section className="pb-5 pt-5" id="about">
            <h2 className="display-5 text-center mb-3 mb-lg-5">About me</h2>
            <p className="text-center">Passionate about programming and science. Committed to excellence in web development. Always looking for new challenges and learning opportunities.</p>

            <div className="row align-items-center gap-5 py-lg-5 m-5">

                <div className="col-lg-4">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid perfil rounded shadow-lg" src="/foto-sobremi.png" alt="Profile picture" />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="rounded shadow-lg p-3 bg-white">
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid rounded icon" src="/desafiolatam.png" alt="imagen ícono" />
                        </div>
                        <h3 className="text-center fs-4 mt-2">Bootcamp Desafío Latam</h3>
                        <p className="text-center fs-5 fst-italic mb-0">FullStack Developer</p>
                    </div>

                    <div className="rounded shadow-lg p-3 mt-3 bg-white">
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid icon" src="/unab.svg" alt="imagen ícono" />
                        </div>
                        <h3 className="text-center fs-4 mt-2">Universidad Andrés Bello</h3>
                        <p className="text-center fs-5 fst-italic mb-0">Biotechnology Engineer</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;