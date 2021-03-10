import React from 'react';
import './styles.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import Lottie from 'react-lottie';
import animationData from '../../Lotties/404.json';


function Error() {

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
   <main className="notFound">
    <div className="container">
     <Lottie
      options={defaultOptions}
     />
     <h1>Não foi possível encontrar essa página!</h1>
    </div>
   </main>
  </>
 )
}

export default Error;