const Projects = () => {

  return (
    <main className="container-xl projects">
        <h2 className="display-5 text-center mb-4">Projects</h2>

        <div className="row align-items-center my-4 flex-lg-row">
            <div className="col-lg-6">
                <img className="img-fluid" src="/public/supercbd.png" alt="Super CBD image" />
            </div>
            <div className="col-lg-6">
                <h2 className="text-center fs-1">Super CBD</h2>
                <p className="text-center mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, vero maiores fugit quas, nisi quia voluptatibus voluptates tempore, quae eligendi quaerat at maxime a reprehenderit odio. Quos at praesentium quas?</p>
            </div>
        </div>

        <div className="row align-items-center my-4 flex-lg-row-reverse">
            <div className="col-lg-6">
                <img className="img-fluid" src="/public/controlatubolsillo.png" alt="Controla tu Bolsillo image" />
            </div>
            <div className="col-lg-6">
                <h2 className="text-center fs-1">Controla tu Bolsillo</h2>
                <p className="text-center mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, vero maiores fugit quas, nisi quia voluptatibus voluptates tempore, quae eligendi quaerat at maxime a reprehenderit odio. Quos at praesentium quas?</p>
            </div>
        </div>

        <div className="row align-items-center my-4 flex-lg-row">
            <div className="col-lg-6">
                <img className="img-fluid" src="/public/cotizalascripto.png" alt="Cotiza las Cripto image" />
            </div>
            <div className="col-lg-6">
                <h2 className="text-center fs-1">Cotiza las Cripto</h2>
                <p className="text-center mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, vero maiores fugit quas, nisi quia voluptatibus voluptates tempore, quae eligendi quaerat at maxime a reprehenderit odio. Quos at praesentium quas?</p>
            </div>
        </div>

    </main>
  )
}

export default Projects