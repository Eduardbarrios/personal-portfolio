import React from 'react';
import '../Styles/Components/ProjectsItem.css'

const ProjectsItem = ({project}) => {
 return (
  <div className='project-card'>
   <img className='project-img' src={project.image} alt={project.Name} />
   <div className='onHover'>
    <p className='card-description'>{project.Description}</p>
    <span className='buttons'>
     <a className='card-button' href={project.RepositoryLink} target='_blank'>Repository</a>
     <a className='card-button' href={project.SiteLink} target='_blank'>Visit</a>
    </span>
   </div>
  </div>
 );
};

export default ProjectsItem;