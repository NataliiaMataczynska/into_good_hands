
//
// import supabase from '../utils/supabase';
//
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// import SignUp from "./SignUp.jsx";
// import SignIn from "./SignIn.jsx";
import HomeThreeColumns from  "./HomeThreeColumns.jsx"
import About from  "./About.jsx"
import AboutUs from  "./AboutUs.jsx"
import FoundationsAndOrganizations from "./FoundationsAndOrganizations.jsx"
import Contact from "./Contact.jsx"
import Header from "./Header.jsx";


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





    return (
        <>
            <Header />
            <HomeThreeColumns />
            <About />
            <AboutUs />
            <FoundationsAndOrganizations />
            <Contact />
        </>
    );
}
