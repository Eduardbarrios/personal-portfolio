import React from 'react';
import { Galeria } from '../../logic/carousel';
import ProjectsItem from '../Components/ProjectsItem';
import { contex } from '../Contex/AppContext';
import '../Styles/Containers/Projects.css';

const Projects = () => {
 const {Projects, Carousel, Galeria} = React.useContext(contex)
  React.useEffect(()=>{
    if(window.innerWidth < 650){
      Carousel();
    }
    else{
      Galeria()
    }
  },[])

  React.useEffect(() => {
    const handleResize = () => {
    const mediaQuery = window.matchMedia("(max-width: 650px)");
    if(mediaQuery.matches){
     Carousel();
    }
    else{
     Galeria()
    }
     };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 return (
  <section className='projects-section' id='projects-section'>
   <div className='projects-container'>
    {Projects.map(item =><ProjectsItem project={item} key={item.Name}/>)}
   </div>
   <div className='swiches'>
    {Projects.map((item, i)=>{
     return(<span className='swich'></span>)
    })}
   </div>
  </section>
 );
};

export default Projects;