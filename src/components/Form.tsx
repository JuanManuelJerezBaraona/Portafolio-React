import React, { useState } from "react";
import Swal from 'sweetalert2';

// EmailJS
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = React.useRef<HTMLFormElement>(null); // Cambio en la definición de la referencia

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState<Record<string, string | undefined>>({}); // Cambio en la definición de formErrors

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Cambio en el tipo del evento
        e.preventDefault();
    
        if (formData.name.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'The name field cannot be empty.'
            });
            return;
        }
    
        if (!isValidEmail(formData.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter a valid email address.'
            });
            return;
        }

        if (form.current !== null) {
            emailjs.sendForm(
                'service_c0dgvxd', 
                'template_xlurda6', 
                form.current, 
                'UUQnp2UYA_fVfqRtE'
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'The form has been submitted successfully.'
        });

        // Clear the form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    // Función para validar el formato de correo electrónico
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Manejar cambios en los campos de entrada y actualizar el estado del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // Cambio en el tipo del evento y del parámetro
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Borrar el mensaje de error si el campo se modifica
        setFormErrors({
            ...formErrors,
            [name]: undefined
        });
    }

    return (
        <>
            <section className='container-fluid contact border-bottom' id="contact">

                <div className='row align-items-center mb-4'>
                    <div className='col-md-12'>
                        <h2 className='display-4 text-center w-75 mx-auto'>Contact</h2>
                        <p className='fs-5 text-center w-75 mx-auto mt-4'>Fill in the form and I will contact you as soon as possible.</p>
                    </div>
                </div>

                <div className='row align-items-center mb-5'>
                    <div className='col-12'>
                        <form className='col-10 col-md-6 col-lg-3 mx-auto' ref={form} onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="name" className='form-label fs-5'>Name</label>
                                <input 
                                    type='text' 
                                    className='form-control'
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="email" className='form-label fs-5'>Email</label>
                                <input 
                                    type='email' 
                                    className='form-control'
                                    name='email'
                                    id="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='mb-5'>
                                <label htmlFor="message" className='form-label fs-5'>Message</label>
                                <textarea 
                                    className='form-control' 
                                    rows={5}
                                    name='message'
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button 
                                type='submit'
                                value="Send"
                                className='col-12 text-uppercase btn btn-dark btn-lg rounded-pill border-primary shadow-lg fw-bold mb-4'
                            >Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Form