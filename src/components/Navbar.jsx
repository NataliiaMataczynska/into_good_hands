
import {NavLink, useNavigate, Outlet} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {useState} from "react";
export default function Navbar() {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const [activeLink, setActiveLink] = useState("/");

    const handleResetState = () => {
        setShowSignIn(false);
        setShowSignUp(false);
        setActiveButton(null);
    };

    const navigator = useNavigate();
    const handleBackHome = () => {
        navigator("/");
    };

    const handleClick = (to) => {
        setActiveLink(to);
        handleSetActive(to);
    };

    const handleSetActive = (to) => {
        setActiveButton(to);
        handleResetState();
    };

    return (
        <div className="nav-section">
            <div className="navlink-buttons">
                <NavLink to='signin'
                         className={`navlink-button ${activeButton === 'login' ? 'clicked-button' : ''}`}
                >
                    Zaloguj
                </NavLink>
                <NavLink to='signup'
                         className={`navlink-button ${activeButton === 'register' ? 'clicked-button' : ''}`}
                >
                    Załóż konto
                </NavLink>
            </div>
            <nav className="navbar" >
                <ul className="navbar-items" style={{ display: "flex", textDecoration: "none" }}>
                    <li className='navbar-item'>
                        <ScrollLink to="home-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onClick={handleBackHome} onSetActive={() => handleClick("home-section")}>Start</ScrollLink>
                    </li>
                    <li className='navbar-item'>
                        <ScrollLink to="about-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onClick={handleBackHome} onSetActive={() => handleClick("about-section")}>O co chodzi?</ScrollLink>
                    </li>
                    <li className='navbar-item'>
                        <ScrollLink to="about-us-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onClick={handleBackHome} onSetActive={() => handleClick("about-us-section")}>O nas</ScrollLink>
                    </li>
                    <li className='navbar-item'>
                        <ScrollLink to="foundations-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onClick={handleBackHome} onSetActive={() => handleSetActive("foundations-section")}>Fundacja i organizacja</ScrollLink>
                    </li>
                    <li className='navbar-item'>
                        <ScrollLink to="contact-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onClick={handleBackHome} onSetActive={() => handleSetActive("contact-section")}>Kontakt</ScrollLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

