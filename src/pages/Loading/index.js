import React from 'react';
import './styles.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import animationData from '../../Lotties/loading.json';
import Lottie from 'react-lottie';

const defaultOptions = {
 loop: true,
 autoplay: true,
 animationData: animationData,
 rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
 }
};

function Loading() {
 return (
  <>
   <main className="loading">
    <div className="container">
     <Lottie
      options={defaultOptions}
     />
    </div>
   </main>
  </>
 )
}

export default Loading