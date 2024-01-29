
import {Outlet} from "react-router-dom";
import image1 from "../assets/Decoration.svg";
import image2 from "../assets/Home-Hero-Image.jpg";
import { Element } from "react-scroll";

export default function Header(){
    return (
        <Element name="home-section">
            <header className="home-container">
                <div className="home-img">
                    <img alt="" src={image2} className="image" />
                </div>
                <div className="home-main">
                    <div className="main-text">
                        <h1>Zacznij pomagać!<br />
                            Oddaj niechciane rzeczy w zaufane ręce
                        </h1>
                        <div className="decoration-img">
                            <img alt="" src={image1} className="image" />
                        </div>
                        <div className="main-buttons" style={{ display: "flex" }}>
                            <button className="main-button ">ODDAJ RZECZY</button>
                            <button className="main-button " >ZORGANIZUJ ZBIÓRKĘ</button>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </header>
        </Element>
    )
}