const Footer = () => {

    return (
        <footer className="bg-dark p-3">
            <div className="row">
                <nav className="col-12 col-md-6 d-flex flex-column border-bottom pb-4 gap-2 mb-4 my-lg-3">
                    <h1 className="w-75 mx-auto text-primary fs-4">Sections</h1>
                    <div className="w-75 mx-auto"><a className="text-primary underlined fs-5" href="#home">Home</a></div>
                    <div className="w-75 mx-auto"><a className="text-primary underlined fs-5" href="#projects">Projects</a></div>
                    <div className="w-75 mx-auto"><a className="text-primary underlined fs-5" href="#skills">Skills</a></div>
                </nav>
                <nav className="col-12 col-md-6 d-flex flex-column border-bottom pb-4 gap-2 mb-4 my-lg-3">
                    <h1 className="w-75 mx-auto text-primary fs-4">Contact</h1>
                    <div className="w-75 mx-auto text-primary fs-5">
                        <i className="bi bi-envelope-at"></i> jjerezbaraona@gmail.com
                    </div> 

                    <div className="w-75 mx-auto">
                        <a 
                            className="text-primary underlined fs-5" 
                            href="https://wa.me/56983601614" 
                            target="_blank"
                        >
                            <i className="bi bi-whatsapp"></i> +569 8360 1614
                        </a>
                    </div>
                    
                    <div className="w-75 mx-auto text-primary fs-5">
                        <i className="bi bi-geo-alt"></i> Santiago, Chile
                    </div>

                    <div className="w-75 mx-auto">
                        <a 
                            className="text-primary underlined fs-5" 
                            href="https://www.linkedin.com/in/juan-manuel-jerez-baraona-b54486274/" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-linkedin"></i> LinkedIn
                        </a>
                    </div>

                    <div className="w-75 mx-auto">
                        <a 
                            className="text-primary underlined fs-5" 
                            href="https://github.com/JuanManuelJerezBaraona"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github"></i> GitHub
                        </a>
                    </div>

                </nav>
            </div>
            <p className="my-2 text-primary text-center">Copyright &#169; 2024. Juan Manuel Jerez Baraona. All rights reserved.</p>
        </footer>
    )
}

export default Footer