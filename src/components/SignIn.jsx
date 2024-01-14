// import supabase from "../utils/supabase";

// import {
//   useNavigate
// } from 'react-router-dom';

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
      {/*<form onSubmit={handleSignIn}>*/}
      <form>
        <input placeholder="email" />
        <input placeholder="password" type="password" />
        <button>Załóż konto</button>
      </form>
    </>
  )

}
