import supabase from "../utils/supabase";
import {
    NavLink,
    useNavigate
} from 'react-router-dom';

import image1 from "../assets/Decoration.svg";
import {useState} from "react";
import SignIn from "./SignIn";

export default function SignUp() {

  const navigation = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: e.target.elements[0].value,
      password: e.target.elements[1].value,
    });

    if (!error) {
      console.log(data);

      navigation('/');
      return;
    }

    console.error(error);
  }

    const [activeButton, setActiveButton] = useState(null);

    const handleSing = () => {
        setActiveButton('register');
    };

  return (
    <>
        <div className="sign-in" >
            <h1>Załóż konto</h1>
            <div className="decoration-img">
                <img alt="" src={image1} className="image" />
            </div>
            <form className="sign-in-form" onSubmit={handleSignUp}>
                <label>Email</label>
                <input placeholder="" name="user_email"/>
                <label>Hasło</label>
                <input placeholder="" type="password" name="password" />
                <label>Powtórz hasło</label>
                <input placeholder="" type="password" name="confirm_password"/>
            </form>
            <div className="main-buttons" >
                <button className="login-button ">Zaloguj się</button>
                <NavLink
                    to='/signin'
                    className='login-button '
                    onClick={handleSing}
                >
                    Załóż konto
                </NavLink>
            </div>
        </div>
        {activeButton === 'register' && <SignIn />}
    </>
  )

}
