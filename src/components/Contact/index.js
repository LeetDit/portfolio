import React, { useState, useRef } from 'react';

import { SyncOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const [formValues, setFormValues] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    })

    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        console.log(e.target.value);
        setFormValues({...formValues, [e.target.name]: e.target.value});
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_j07y74r', 'template_fz3mjor', form.current, 'user_RGYBct08Inxb2mffNkJn2')
        .then((result) => {
            setFormValues({
                name: '',
                company: '',
                email: '',
                message: ''
            });
            setLoading(false);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
            <section id="contact">
                <div className="container">
                    <h2 className="text-uppercase text-center text-secondary mb-0">
                        Contact Me
                    </h2>
                    <hr className="star-dark mb-5" />
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <form ref={form} id="contactForm" name="sendMessage" noValidate="novalidate" onSubmit={sendEmail}>
                                <div className="control-group">
                                    <div className="mb-0 form-floating controls pb-2">
                                        <input 
                                            name="name" 
                                            id="name" 
                                            className="form-control" 
                                            type="text" 
                                            required 
                                            placeholder="Name"
                                            value={formValues['name']}
                                            onChange={changeHandler}
                                        />
                                        <label className="form-label">Name</label>
                                        <small className="form-text text-danger help-block"></small>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="mb-0 form-floating controls pb-2">
                                        <input 
                                            name="company" 
                                            id="comapny" 
                                            className="form-control" 
                                            type="text" 
                                            placeholder="Company" 
                                            value={formValues['company']}
                                            onChange={changeHandler}
                                        />
                                        <label className="form-label">Company</label>
                                        <small className="form-text text-danger help-block"></small>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="mb-0 form-floating controls pb-2">
                                        <input 
                                            name="email" 
                                            id="email" 
                                            className="form-control" 
                                            type="email"
                                            required 
                                            placeholder="Email Address"
                                            value={formValues['email']}
                                            onChange={changeHandler}
                                        />
                                        <label className="form-label">Email Address</label>
                                        <small className="form-text text-danger help-block"></small>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="mb-5 form-floating controls pb-2">
                                        <textarea 
                                            name="message" 
                                            id="message" 
                                            className="form-control" 
                                            required placeholder="Message" 
                                            style={{height: "150px"}}
                                            value={formValues['message']}
                                            onChange={changeHandler}
                                        >
                                        </textarea>
                                        <label className="form-label">Message</label>
                                        <small className="form-text text-danger help-block"></small>
                                    </div>
                                </div>

                                <div id="success"></div>

                                <div>
                                    <button 
                                        id="sendMessageButton" 
                                        className="btn btn-primary btn-xl" 
                                        type="submit"
                                    >
                                        {loading ? <SyncOutlined spin /> : 'Send'}
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact;