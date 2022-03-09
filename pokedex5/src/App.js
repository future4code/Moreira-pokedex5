import React from "react";
import Router from "./router/Router"
import { ContextPokemon } from "../src/contexts/context"
import Header from "./components/Header"

function App() {

  
  return (
    <div >
      <Header/>
      <Router/>
      
    </div>
  );
}

export default App;
