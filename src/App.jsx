import {
    Routes,
    Route
} from 'react-router-dom';
import './main.scss'
import Home from './components/Home.jsx';
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Navbar from './components/Navbar.jsx';

export default function App() {
    const handleBackHome = () => {
        // handle back home functionality here
    }

    return (
        <>
            <div className="App">
                <Navbar handleBackHome={handleBackHome} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </>
    );
}