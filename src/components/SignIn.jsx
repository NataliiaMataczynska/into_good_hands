import supabase from "../utils/supabase";
import image1 from "../assets/Decoration.svg";
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import SignUp from "./SignUp";

export default function SignIn() {

  const navigation = useNavigate();

  async function handleSignIn(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
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
            <h1>Zaloguj się</h1>
            <div className="decoration-img">
                <img alt="" src={image1} className="image" />
            </div>
            <form className="sign-in-form" onSubmit={handleSignIn}>
                <label>Email</label>
                <input placeholder="" name="user_email"/>
                <label>Hasło</label>
                <input placeholder="" type="password" />
            </form>
            <div className="main-buttons" >
                <button className="login-button ">Załóż konto</button>
                <NavLink
                    to='/signup'
                    className='login-button '
                    onClick={handleSing}
                >
                    Zaloguj się
                </NavLink>
            </div>
        </div>
        {activeButton === 'register' && <SignUp />}
    </>
  )

}
