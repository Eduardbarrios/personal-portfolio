import React from 'react';
import '../Styles/Components/SkillsItem.css'

const SkillsItem = ({skill}) => {
 
 return (
  <span className="barrs">
  <img className='skill-logo' src={skill.image}  alt={`logo ${skill.Name}`} />
  <div>
   <div className='back-barr'> 
    <div className='title-barr'>{skill.Name}</div>
    <div className={`progress-barr a${skill.Level}`}></div>
   </div>
  </div>
  <p className='p-skills'>{skill.Level}%</p>
 </span>
 );
};

export default SkillsItem;