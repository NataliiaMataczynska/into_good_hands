import {  useNavigate } from 'react-router-dom';
//
// import supabase from '../utils/supabase';
//
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Navbar from "./Navbar.jsx";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import HomeThreeColumns from  "./HomeThreeColumns.jsx"
import About from  "./About.jsx"
import AboutUs from  "./AboutUs.jsx"
import FoundationsAndOrganizations from "./FoundationsAndOrganizations.jsx"
import Contact from "./Contact.jsx"
import image1 from "../assets/Decoration.svg";
import image2 from "../assets/Home-Hero-Image.jpg";
import { Element } from "react-scroll";
import {Outlet} from "react-router-dom";


export default function Home() {
    // const navigation = useNavigate();
    //
    // const [session, setSession] = useState(null);
    // const [notes, setNotes] = useState(null);
    //
    // useEffect(() => {
    //     getSession();
    // }, []);
    //
    // useEffect(() => {
    //     if (session) {
    //         getNotes();
    //     }
    // }, [session]);

    // async function getSession() {
    //     const { data, error } = await supabase.auth.getSession();
    //
    //     if (error) {
    //         console.error(error);
    //     }
    //
    //     setSession(data.session);
    //
    //     if (!data.session) {
    //         navigation('/signin');
    //         return;
    //     }
    // }

    // async function getNotes() {
    //     let { data: notes, error } = await supabase
    //         .from('notes')
    //         .select('*')
    //         .eq('user_id', session.user.id);
    //
    //     if (!error) {
    //         setNotes(notes);
    //         return;
    //     }
    //
    //     console.error(error);
    // }
    //
    // async function handleSignOut() {
    //     const { error } = await supabase.auth.signOut();
    //
    //     if (!error) {
    //         navigation('/signin');
    //         return;
    //     }
    //
    //     console.error(error);
    // }

    // async function handleNoteSave(e) {
    //     e.preventDefault();
    //
    //     const { data, error } = await supabase
    //         .from('notes')
    //         .insert([{ user_id: session.user.id, note: e.target.elements[0].value }])
    //         .select();
    //
    //     if (!error) {
    //         setNotes(prev => [...prev, data[0]]);
    //         return;
    //     }
    //
    //     console.error(error);
    // }

    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonType) => {
        if (buttonType === 'login') {
            setShowSignIn(true);
            setShowSignUp(false);
            setActiveButton('login');
        } else if (buttonType === 'register') {
            setShowSignIn(false);
            setShowSignUp(true);
            setActiveButton('register');
        }
    };

    const [activeLink, setActiveLink] = useState("/");
    const handleResetState = () => {
        setShowSignIn(false);
        setShowSignUp(false);
        setActiveButton(null);
    };

    const handleSetActive = (to) => {
        setActiveLink(to);
        handleResetState();
    };

    const navigator = useNavigate();

    const handleBackHome = () => {
        navigator("/");
    }


    return (
        <>
            <Element name="home-section">
                <header className="home-container">
                    <div className="home-img">
                        <img alt="" src={image2} className="image" />
                    </div>
                    <div className="home-main">
                        <div className="login-buttons">
                            <button
                                className={`login-button ${activeButton === 'login' ? 'clicked-button' : ''}`}
                                onClick={() => handleButtonClick('login')}
                            >
                                Zaloguj
                            </button>
                            <button
                                className={`login-button ${activeButton === 'register' ? 'clicked-button' : ''}`}
                                onClick={() => handleButtonClick('register')}
                            >
                                Załóż konto
                            </button>
                        </div>
                        <Navbar
                            setActiveLink={setActiveLink}
                            handleSetActive={handleSetActive}
                            activeLink={activeLink}
                            handleBackHome={handleBackHome}
                        />
                        <div className="main-text" style={{ display: showSignIn || showSignUp ? 'none' : 'flex' }}>
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
                        {showSignIn && <SignIn />}
                        {showSignUp && <SignUp />}
                        <Outlet />
                    </div>
                </header>
            </Element>
            <HomeThreeColumns />
            <About />
            <AboutUs />
            <FoundationsAndOrganizations />
            <Contact />
            {/*<hr />*/}
            {/*/!*<form onSubmit={handleNoteSave}>*!/*/}
            {/*<form>*/}
            {/*    <textarea />*/}
            {/*    <button>Save</button>*/}
            {/*</form>*/}
            {/*<hr />*/}
            {/*<ul>*/}
            {/*    {*/}
            {/*        notes && notes.map(note => (*/}
            {/*            <li key={note.id}>{note.note}</li>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</ul>*/}
            {/*<hr />*/}
            {/*/!*<button onClick={handleSignOut}>Sign out</button>*!/*/}
            {/*<button>Sign out</button>*/}
        </>
    );
}
