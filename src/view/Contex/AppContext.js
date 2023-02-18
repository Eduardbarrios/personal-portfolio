import React from "react";
import { Skills, Projects } from "../../logic/data/data";
import { Galeria } from "../../logic/carousel";
import {ScrollHanddle} from '../../logic/ScrollHanddle'

const contex = React.createContext()
function Provider(props){

 

 return(
  <contex.Provider 
  value={{
   Skills,
   Projects,
   Galeria,
   ScrollHanddle
  }}
  >
   {props.children}
  </contex.Provider>
 )
}

export {contex, Provider};