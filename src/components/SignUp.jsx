// import supabase from "../utils/supabase";
//
// import {
//   useNavigate
// } from 'react-router-dom';

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
        <form >
        <input placeholder="email" />
        <input placeholder="password" type="password" />
        <button>Zaloguj</button>
      </form>
    </>
  )

}
