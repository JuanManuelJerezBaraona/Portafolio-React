const Contact = () => {
    return (
        <section className="contact mx-4" id="contact">
            <h2 className="display-3 text-center mb-4">Contact me</h2>

            <div className="contact-container mx-auto d-flex flex-column flex-md-row justify-content-center rounded shadow-lg gap-4 p-4">
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="justify-content-center">
                        <img src="./public/email.png" alt="Email logo" className="email-icon cursor rounded-circle shadow-lg"/>
                    </div>
                    <div>
                        <p className="mb-0">jjerezbaraona@gmail.com</p>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="justify-content-center">
                        <img src="./public/linkedin.png" alt="LinkedIn logo" className="logo cursor rounded-circle shadow-lg"/>
                    </div>
                    <div>
                        <p className="mb-0">LinkedIn</p>
                    </div>
                </div>
            </div>

        </section>        
    )
}

export default Contact