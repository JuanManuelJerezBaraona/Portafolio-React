interface ContactProps {
    darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
    return (
        <section className="contact mx-4" id="contact">
            <h2 className="display-3 text-center mb-5">Contact me</h2>

            <div className={`contact-container mx-auto d-flex flex-column justify-content-center align-items-start rounded shadow-lg gap-4 p-5 ${darkMode ? 'bg-secondary' : 'bg-success'}`}>
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="justify-content-center">
                        <img src="./email.svg" alt="Email logo" className="logo rounded-circle"/>
                    </div>
                    <div>
                        <p className="mb-0">jjerezbaraona@gmail.com</p>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="justify-content-center">
                        <a href="https://wa.me/56983601614" target="_blank"><img src="./whatsapp.svg" alt="WhatsApp logo" className="logo"/></a>
                    </div>
                    <div>
                        <a href="https://wa.me/56983601614" target="_blank" className="underlined">+569 8360 1614</a>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="justify-content-center">
                        <img src="./gps.svg" alt="GPS logo" className="logo rounded-circle"/>
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