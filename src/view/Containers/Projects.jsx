import React from 'react';
import { Galeria } from '../../logic/carousel';
import ProjectsItem from '../Components/ProjectsItem';
import { contex } from '../Contex/AppContext';
import '../Styles/Containers/Projects.css';

const Projects = () => {
 const {Projects, Galeria} = React.useContext(contex)
  React.useEffect(()=>{  
      Galeria()
  },[])

 return (
  <section className='projects-section' id='projects-section'>
    <h2 className='projects-title'>Projects</h2>
   <div className='projects-container'>
    {Projects.map(item =><ProjectsItem project={item} key={item.Name}/>)}
   </div>
   <div className='swiches'>
    {Projects.map((item, i)=>{
      
      return(<span className='swich' ></span>)
    })}
   </div>
  </section>
 );
};

export default Projects;