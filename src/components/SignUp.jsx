// import supabase from "../utils/supabase";
//
// import {
//   useNavigate
// } from 'react-router-dom';

import image1 from "../assets/Decoration.svg";

export default function SignUp() {

  // const navigation = useNavigate();
  //
  // async function handleSignUp(e) {
  //   e.preventDefault();
  //
  //   const { data, error } = await supabase.auth.signUp({
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
      {/*<form onSubmit={handleSignUp}>*/}
        <div className="sign-in" >
            <h1>Załóż konto</h1>
            <div className="decoration-img">
                <img alt="" src={image1} className="image" />
            </div>
            <form className="sign-in-form">
                <label>Email</label>
                <input placeholder="" name="user_email"/>
                <label>Hasło</label>
                <input placeholder="" type="password" name="password" />
                <label>Powtórz hasło</label>
                <input placeholder="" type="password" name="confirm_password"/>
            </form>
            <div className="main-buttons" style={{ display: "flex", justifyContent: "space-between", width: "400px" }}>
                <button className="login-button ">Załóż konto</button>
                <button className="login-button " >Zaloguj się</button>
            </div>
        </div>
    </>
  )

}
