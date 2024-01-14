
import { Outlet} from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

export default function Navbar() {

    return (
        <div>
            <nav className="navbar" >
                <ul className="navbar-items" style={{display: "flex", textDecoration: "none"}}>
                    <li className="navbar-item">
                        <ScrollLink  to="home" smooth={true} duration={500} className="navbar-link">Start</ScrollLink >
                    </li>
                    <li className="navbar-item">
                        <ScrollLink  to="about-section" smooth={true} duration={500} className="navbar-link">O co chodzi?</ScrollLink >
                    </li>
                    <li className="navbar-item">
                        <ScrollLink  to="about-us-section" smooth={true} duration={500} className="navbar-link">O nas</ScrollLink >
                    </li>
                    <li className="navbar-item">
                        <ScrollLink  to="foundations-section" smooth={true} duration={500} className="navbar-link">Fundacja i organizacja</ScrollLink >
                    </li>
                    <li className="navbar-item">
                        <ScrollLink to="contact-section" smooth={true} duration={500} className="navbar-link" spy={true}>Kontakt</ScrollLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}