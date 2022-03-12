import React from "react";
import Router from "./router/Router"
import GlobalState from "./Global/GlobalState"
//import { ContextPokemon } from "../src/contexts/context"


function App() {

  
  return (
    <GlobalState >
      
      <Router/>
    </GlobalState>
  );
}

export default App;
