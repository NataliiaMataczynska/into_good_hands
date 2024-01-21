import {
    Routes,
    Route } from 'react-router-dom';
import './main.scss'
import Home from './components/Home.jsx';
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import AboutUs from "./components/AboutUs.jsx";
import FoundationsAndOrganizations from "./components/FoundationsAndOrganizations.jsx";
export default function App() {
    return (
        <>
            <div className="App">
                {/*<Navbar />*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/foundations" element={<FoundationsAndOrganizations />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    );
}
