
import { Outlet } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar({setActiveLink, handleSetActive, activeLink, handleBackHome}) {

    const handleClick = (to) => {
        setActiveLink(to);
        handleSetActive(to);
    };

    return (
        <div>
            <nav className="navbar" >
                <ul className="navbar-items" style={{ display: "flex", textDecoration: "none" }}>
                    <li className='navbar-item'>
                        <ScrollLink to="home-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onClick={handleBackHome} onSetActive={() => handleClick("home-section")}>Start</ScrollLink>
                    </li>
                    <li className='navbar-item'>
                        <ScrollLink to="about-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onSetActive={() => handleClick("about-section")}>O co chodzi?</ScrollLink>
                    </li>
                    <li className='navbar-item'>
                        <ScrollLink to="about-us-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onSetActive={() => handleClick("about-us-section")}>O nas</ScrollLink>
                    </li>
                    <li className='navbar-item'>
                        <ScrollLink to="foundations-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onSetActive={() => handleSetActive("foundations-section")}>Fundacja i organizacja</ScrollLink>
                    </li>
                    <li className='navbar-item'>
                        <ScrollLink to="contact-section" smooth={true} duration={500} className='navbar-link' spy={true} style={({ isActive }) => isActive ? { border: "1px solid black" } : {}} onSetActive={() => handleSetActive("contact-section")}>Kontakt</ScrollLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

