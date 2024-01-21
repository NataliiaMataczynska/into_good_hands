import { Element } from 'react-scroll';
import image1 from "../assets/Icon-1.svg";
import image2 from "../assets/Icon-2.svg";
import image3 from "../assets/Icon-3.svg";
import image4 from "../assets/Icon-4.svg";
import image5 from "../assets/Decoration.svg";
export default function About() {
    return (
        <Element name="about-section">
            <section className="about">
                <div className="main-text" >
                    <h1 className="about-title">
                        Wystarczą 4 proste kroki
                    </h1>
                    <div className="about-img">
                        <img alt="" src={image5} className="about-image" />
                    </div>
                </div>
                <div className="steps-columns" >
                    <div className="column" >
                        <div className="steps-img" >
                            <img alt="" src={image1} className="image-about" />
                        </div>
                        <p className="step-title">Wybierz rzeczy</p>
                        <p className="step-border"></p>
                        <p className="step-description">
                            ubrania, zabawki, sprzęt i inne
                        </p>
                    </div>
                    <div className="column" >
                        <div className="steps-img" >
                            <img alt="" src={image2} className="image-about" />
                        </div>
                        <p className="step-title">Spakuj je</p>
                        <p className="step-border"></p>
                        <p className="step-description">
                            skorzystaj z worków na smieci
                        </p>
                    </div>
                    <div className="column" >
                        <div className="steps-img" >
                            <img alt="" src={image3} className="image-about" />
                        </div>
                        <p className="step-title">Zdecyduj komu chcesz pomóc</p>
                        <p className="step-border"></p>
                        <p className="step-description">
                            wybierz zaufane miejsce
                        </p>
                    </div>
                    <div className="column">
                        <div className="steps-img" >
                            <img alt="" src={image4} className="image-about" />
                        </div>
                        <p className="step-title">Zamów kuriera</p>
                        <p className="step-border"></p>
                        <p className="step-description">
                            kurier przyjedzie w dowolnym terminie
                        </p>
                    </div>
                </div>
                <button className="donate-button" > ODDAJ RZECZY</button>
            </section>
        </ Element>
    );
}