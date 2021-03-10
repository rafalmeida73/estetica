import React from 'react';
import './styles.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { TextInput } from 'react-materialize';
import Lottie from 'react-lottie';
import animationData from '../../Lotties/girls-face.json';

function Login() {

 const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
   preserveAspectRatio: "xMidYMid slice"
  }
 };

 return (
  <>
   <main className="login">
    <div className="row">
     <div className="col s12 m6 l6 animation">
      <Lottie
       options={defaultOptions}
      />
     </div>
     <div className="col s12 m6 l6 inputs">
      <h1>Fazer login</h1>
      <form action="">
       <TextInput
        email
        error="E-mail inválido"
        icon="email"
        id="email"
        label="Email"
        validate
       />
       <TextInput
        icon="lock_outline"
        id="password"
        type="password"
        label="Email"
       />
      </form>

     </div>
    </div>
   </main>

  </>
 )
}

export default Login