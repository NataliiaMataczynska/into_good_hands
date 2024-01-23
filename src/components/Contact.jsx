import { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import emailjs from 'emailjs-com';
import image1 from "../assets/Background-Contact-Form.jpg";
import image2 from "../assets/Decoration.svg";
import image3 from "../assets/Facebook.svg";
import image4 from "../assets/Instagram.svg";
// import supabase from '../utils/supabase';

export default function Contact() {
    const [messageSent, setMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const newErrors = {
            name: "",
            email: "",
            message: ""
        };

        if (formData.name.trim().length < 2) {
            newErrors.name = "Podane imię jest niepoprawne!";
        }

        if (formData.email.trim().length < 3 || !formData.email.includes('@')) {
            newErrors.email = "Podany email jest nieprawidłowy!";
        }

        if (formData.message.trim().length < 120) {
            newErrors.message = "Wiadomość musi mieć co najmniej 120 znaków!";
        }

        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error !== "")) {
            return;
        }

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response =>  {
                console.log(response);
                return response.json();
                // if (response.status = 200) {
                //     return response.json();
                // }
            })
            .then(data => {
                console.log(data);

            })
            .catch(error => {
                console.error(error);
            })


        emailjs.sendForm('service_zcsbom5', 'template_pj9ko0o', form.current, 'OWYgQDAI8Z2MyobMb')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    const showMessageSent = () => {
        if (messageSent) {
            setTimeout(() => {
                alert('Wiadomość została pomyślnie wysłana!');
                setMessageSent(false);
            }, 100);
        }
    };

    showMessageSent();

    const handleInput = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <Element name="contact-section">
            <section data-scroll="contact" className="contact-section">
                <div className="contact">
                    <div className="main-image">
                        <img alt="" src={image1} className="" />
                    </div>
                    <div className="contact-text-section">
                        <div className="contact-text-section-heading">
                            <h1 className="">
                                Skontaktuj się z nami
                            </h1>
                            <div className="contact-map-image">
                                <img alt="" src={image2} className="" />
                            </div>
                        </div>
                        <form className="contact-form-section" ref={form} onSubmit={sendEmail}>
                            <div className="form-inputs">
                                <div style={{ marginRight: "20px" }}>
                                    <label>Wpisz swoje imię</label>
                                    {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                                    <input type="text" name="name" value={formData.name} onChange={handleInput} />
                                </div>
                                <div>
                                    <label>Wpisz swój email</label>
                                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                                    <input type="email" name="email" value={formData.email} onChange={handleInput} />
                                </div>
                            </div>
                            <div className="form-message">
                                <label>Wpisz swoją wiadomość</label>
                                {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
                                <textarea name="message" value={formData.message} onChange={handleInput} />
                            </div>
                            <div className="form-button">
                                <input type="submit" value="Wyślij" />
                            </div>
                        </form>
                    </div>
                </div>
                <footer className="footer-section">
                    <div className="footer-copyright-wrapper">
                        <p className="footer-copyright"> Copyright by Coders Lab</p>
                    </div>
                    <div className="footer-social-media-images">
                        <div className="footer-social-media-image" >
                            <img alt="" src={image3} className="" />
                        </div>
                        <div className="footer-social-media-image" >
                            <img alt="" src={image4} className="" />
                        </div>
                    </div>
                </footer>
            </section>
        </Element>
    );
}
