import { useRef, useState} from 'react';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';
import image1 from "../assets/Background-Contact-Form.jpg";
import image2 from "../assets/Decoration.svg";
import image3 from "../assets/Facebook.svg";
import image4 from "../assets/Instagram.svg";
export default function Contact() {
    const [messageSent, setMessageSent] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zcsbom5', 'template_pj9ko0o', form.current, 'OWYgQDAI8Z2MyobMb')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
            }, (error) => {
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
    return (
        <Element name="contact-section">
            <section data-scroll="contact" className="contact-section">
                <div className="contact" >
                    <div className="main-image" >
                        <img alt="" src={image1} className="" />
                    </div>
                    <div className="contact-text-section">
                        <div className="contact-text-section-heading">
                            <h1 className="">
                                Skontaktuj się z nami
                            </h1>
                            <div className="contact-map-image" >
                                <img alt="" src={image2} className="" />
                            </div>
                        </div>
                        <form  className="contact-form-section" ref={form} onSubmit={sendEmail}>
                            <div className="form-inputs">
                                <div style={{marginRight: "20px"}}>
                                    <label>Wpisz swoje imię</label>
                                    <input type="text" name="user_name" />
                                </div>
                                <div>
                                    <label>Wpisz swój email</label>
                                    <input type="email" name="user_email" />
                                </div>
                            </div>
                            <div className="form-message">
                                <label>Wpisz swoją wiadomość</label>
                                <textarea name="message" />
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