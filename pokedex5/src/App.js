import React from "react";
import Router from "./router/Router"
import GlobalState from "./Global/GlobalState"
import { ContextPokemon } from "../src/contexts/context"
import Header from "./components/Header"

function App() {

  
  return (
    <GlobalState >
      <Header/>
      <Router/>
    </GlobalState>
  );
}

export default App;
