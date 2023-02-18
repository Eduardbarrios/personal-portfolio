import React from 'react';
import Email from "../assets/Email-Logo.svg"
import Linkedin from "../assets/Linkedin_Logo.svg"
import Whatsapp from "../assets/Wap_Logo.svg"
import '../Styles/Containers/Contact.css'

const Contact = () => {
 return (
 <section id='contact-section' className='contact-section'>
  <h2 className='contact-title'>Contact me</h2>
  <div className='separator'></div>
  <div className='links'>
   <a href="mailto:eduardbarrios0903@gmail.com" target="_blank" className="contact-link">
    <img src={Email} alt="Email Logo" />
   </a>
   <a href="https://www.linkedin.com/in/eduard09/" target="_blank" className="contact-link">
    <img src={Linkedin} alt="Linkedin Logo" />
   </a>
   <a href="https://wa.me/+573023501666?text=Hi Eduard!" target="_blank" className="contact-link">
    <img src={Whatsapp} alt="Whatsapp Logo" />
   </a>
   <a href="https://drive.google.com/file/d/1ewYAH4n39n5w3K1mDyUG1b5nA6K3jBCF/view?usp=share_link" target="_blank" className="contact-link pdf-image">
   </a>
  </div>
 </section>
 );
};

export default Contact;