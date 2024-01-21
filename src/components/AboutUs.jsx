import { Element } from 'react-scroll';
import image1 from "../assets/People.jpg";
import image2 from "../assets/Decoration.svg";
import image3 from "../assets/Signature.svg";
export default function AboutUs() {
    return (
        <Element name="about-us-section">
            <section className="about-us">
                <div className="main-text">
                    <h1 className="about-us-title">
                        O nas
                    </h1>
                    <div className="about-us-img">
                        <img alt="" src={image2} className="about-us-image" />
                    </div>
                    <p className="about-us-text">
                        Nori grape silver beet broccoli kombu beet greens
                        fava bean potato quandong celery. Bunya nuts black-eyed
                        pea prairie turnip leek lentil turnip greens parsnip.
                    </p>

                    <div className="signature-wrapper">
                        <div>
                            <img alt="" src={image3} className="signature-image" />
                        </div>
                    </div>
                </div>
                <div className="about-us-main-img" style={{ display: "flex", overflow: "hidden", width: "50%" }}>
                    <img alt="" src={image1} style={{ marginRight: '-30rem', height: "100%", objectFit: "cover" }} className="" />
                </div>
            </section>
        </Element>
    );
}