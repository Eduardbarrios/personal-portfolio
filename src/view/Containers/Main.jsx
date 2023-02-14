import React from "react";
import Profile from '../assets/Photo-profile.png'
import '../Styles/Containers/Main.css'

const Main = () =>{
 return(
  <section className="main-section" id="main-section">
   <img className="photo-profile" src={Profile} alt='profile'/>
   <div className="name-inf">
    <h1 className="name-title">Eduard Barrios</h1>
    <h2 className="description">Frontend developer</h2>
   </div>
   <span className="prhase">
   Life is the opposite of quicksand, if you don't move, you sink.
   <p>-Eduard Barrios</p>
   </span>
  </section>
 )
}
export default Main;