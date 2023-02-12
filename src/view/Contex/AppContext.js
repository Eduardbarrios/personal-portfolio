import React from "react";
import { Skills, Projects } from "../../logic/data/data";
import { Carousel, Galeria } from "../../logic/carousel";
import {ScrollHanddle} from '../../logic/ScrollHanddle'

const contex = React.createContext()
function Provider(props){

 

 return(
  <contex.Provider 
  value={{
   Skills,
   Projects,
   Carousel,
   Galeria,
   ScrollHanddle
  }}
  >
   {props.children}
  </contex.Provider>
 )
}

export {contex, Provider};