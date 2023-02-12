import React from 'react';
import { contex } from '../Contex/AppContext';
import '../Styles/Components/Header.css'

const Header = () => {
 const {ScrollHanddle} = React.useContext(contex)
 React.useEffect(()=>{
  ScrollHanddle()
 },[])
 return (
  <header className='header'>
   <nav className='nav-bar'>
    <a href="#main-section" className="links_section">Main</a>
    <a href="#about-section" className="links_section">About</a>
    <a href="#projects-section" className="links_section">Projects</a>
    <a href="#contact-section" className="links_section">Contact</a>
   </nav>
  </header>
 );
};

export default Header;