import {
    Routes,
    Route } from 'react-router-dom';
import './main.scss'
import Home from './components/Home.jsx';

export default function App() {
    return (
        <>
            <div className="App">
                {/*<Navbar />*/}
                <Routes>
                    <Route path="/" element={<Home id="home" />} />
                    {/*<Route path="/signin" element={<SignIn />} />*/}
                    {/*<Route path="/signup" element={<SignUp />} />*/}
                    {/*<Route path="/shoes" element={<Login />} />*/}
                    {/*<Route path="/contact" element={<Register />} />*/}
                    {/*<Route path="/contact" element={<Logout />} />*/}
                    {/*<Route path="/contact" element={<Form />} />*/}
                </Routes>
            </div>
        </>
    );
}
