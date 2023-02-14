import React from 'react';
import SkillsItem from '../Components/SkillsItem';
import { contex } from '../Contex/AppContext';
import '../Styles/Containers/About.css'

const About = () => {
  const {Skills} = React.useContext(contex)
 return (
  <section className='about-section' id='about-section'>
   <div className='about-me'>
    <h2 className='about-title'>About me</h2>
    <p className='about-description'>I´m a software developer and passionate about technology, i like to be updated and always learning something new, i have a wide knowledge of web technologies, but i also have many soft skills that make me a good team member, like active communication, writing, time management and some more.
    Welcome to this little glimpse of a part of my work.</p>
   </div>
   <div className='skills'>
    <h2 className='skills-title'>Skills</h2>
    {Skills.map(item =><SkillsItem skill={item} key={item.Name}/>)}
   </div>
  </section>
 );
};

export default About;