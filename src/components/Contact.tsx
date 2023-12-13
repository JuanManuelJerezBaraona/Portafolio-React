const Contact = () => {
    return (
        <section className="contact mx-4" id="contact">
            <h2 className="display-3 text-center mb-5">Contact me</h2>

            <div className="contact-container mx-auto d-flex flex-column justify-content-center align-items-start rounded shadow-lg gap-4 p-5">
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="justify-content-center">
                        <img src="./public/email.png" alt="Email logo" className="logo cursor rounded-circle"/>
                    </div>
                    <div>
                        <p className="mb-0">jjerezbaraona@gmail.com</p>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="justify-content-center">
                        <img src="./public/whatsapp.svg" alt="WhatsApp logo" className="logo cursor"/>
                    </div>
                    <div>
                        <p className="mb-0">+569 8360 1614</p>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="justify-content-center">
                        <img src="./public/gps.svg" alt="GPS logo" className="logo cursor rounded-circle"/>
                    </div>
                    <div>
                        <p className="mb-0">Santiago, Chile</p>
                    </div>
                </div>
            </div>

        </section>        
    )
}

export default Contact