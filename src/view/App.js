import React from "react";
import Header from "./Components/Header";
import About from "./Containers/About";
import Contact from "./Containers/Contact";
import Main from "./Containers/Main";
import Projects from "./Containers/Projects";
import { Provider } from "./Contex/AppContext";

function App() {
  return (
   <Provider>
     <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
   </Provider>
  );
}

export default App;
