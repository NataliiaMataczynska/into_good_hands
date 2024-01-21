// import supabase from "../utils/supabase";

// import {
//   useNavigate
// } from 'react-router-dom';

import image1 from "../assets/Decoration.svg";

export default function SignIn() {

  // const navigation = useNavigate();
  //
  // async function handleSignIn(e) {
  //   e.preventDefault();
  //
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: e.target.elements[0].value,
  //     password: e.target.elements[1].value,
  //   });
  //
  //   if (!error) {
  //     console.log(data);
  //
  //     navigation('/');
  //     return;
  //   }
  //
  //   console.error(error);
  // }

  return (
    <>
        <div className="sign-in" >
            <h1>Zalogoj się</h1>
            <div className="decoration-img">
                <img alt="" src={image1} className="image" />
            </div>
            <form className="sign-in-form">
                <label>Email</label>
                <input placeholder="" name="user_email"/>
                <label>Hasło</label>
                <input placeholder="" type="password" />
            </form>
            <div className="main-buttons" style={{ display: "flex", justifyContent: "space-between", width: "400px" }}>
                <button className="login-button ">Załóż konto</button>
                <button className="login-button " >Zaloguj się</button>
            </div>
        </div>
    </>
  )

}
